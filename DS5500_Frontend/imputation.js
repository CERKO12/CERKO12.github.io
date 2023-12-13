/* global bootstrap: false */

(function () {
  'use strict'

  // Tooltip and popover demos
  document.querySelectorAll('.tooltip-demo')
    .forEach(function (tooltip) {
      new bootstrap.Tooltip(tooltip, {
        selector: '[data-bs-toggle="tooltip"]'
      })
    })

  document.querySelectorAll('[data-bs-toggle="popover"]')
    .forEach(function (popover) {
      new bootstrap.Popover(popover)
    })

  document.querySelectorAll('.toast')
    .forEach(function (toastNode) {
      var toast = new bootstrap.Toast(toastNode, {
        autohide: false
      })

      toast.show()
    })

  // Disable empty links and submit buttons
  document.querySelectorAll('[href="#"], [type="submit"]')
    .forEach(function (link) {
      link.addEventListener('click', function (event) {
        event.preventDefault()
      })
    })

  function setActiveItem() {
    var hash = window.location.hash

    if (hash === '') {
      return
    }

    var link = document.querySelector('.bd-aside a[href="' + hash + '"]')

    if (!link) {
      return
    }

    var active = document.querySelector('.bd-aside .active')
    var parent = link.parentNode.parentNode.previousElementSibling

    link.classList.add('active')

    if (parent.classList.contains('collapsed')) {
      parent.click()
    }

    if (!active) {
      return
    }

    var expanded = active.parentNode.parentNode.previousElementSibling

    active.classList.remove('active')

    if (expanded && parent !== expanded) {
      expanded.click()
    }
  }

  setActiveItem()
  window.addEventListener('hashchange', setActiveItem)
})()

const ctx = document.getElementById('myBarChart').getContext('2d');
const myBarChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['PcrKey', 'USCensusRegion ', 'USCensusDivision', 'NasemsoRegion', 'Urbanicity', 'ageinyear', 
                 'EMSDispatchCenterTimeSec', 'EMSChuteTimeMin', 'EMSSystemResponseTimeMin', 'EMSSceneResponseTimeMin', 
                 'EMSSceneTimeMin', 'EMSSceneToPatientTimeMin', 'EMSTotalCallTimeMin', 'EMSTransportTimeMin'],
        datasets: [{
            label: 'Number of Null Values',
            data: [0, 544, 544, 544, 12938, 8774, 118179, 5674, 2540, 3156, 204405, 26707, 982, 261205],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        plugins: {
          legend: {
            display: false
          },
          title: {
              display: true,
              text: 'Null Values of Computed Elements',
              font: {
                  size: 24
              }
          }
        },
        scales: {
            y: {
                beginAtZero: true,
            },
        }
    }
});

const ctx2 = document.getElementById('mySecondBarChart').getContext('2d');
const mySecondBarChart = new Chart(ctx2, {
  type: 'bar',
  data: {
      labels: ['PcrKey', 'eDispatch_01', 'eDispatch_02', 'eArrest_14', 'eArrest_01', 'eArrest_02', 'eArrest_05', 
               'eArrest_07', 'eArrest_11', 'eArrest_16', 'eArrest_18', 'eDisposition_12', 'eDisposition_19', 'eDisposition_16', 
               'eDisposition_21', 'eDisposition_22', 'eOutcome_01', 'eOutcome_02', 'ePatient_13', 'ePatient_15', 'ePatient_16', 
               'ePayment_01', 'ePayment_50', 'eResponse_05', 'eResponse_07', 'eResponse_15', 'eResponse_23', 'eScene_01', 
               'eScene_06', 'eScene_07', 'eScene_08', 'eScene_09', 'eSituation_02', 'eSituation_07', 'eSituation_08', 'eSituation_13',
               'eSituation_01', 'eTimes_01', 'eTimes_03', 'eTimes_05', 'eTimes_06', 'eTimes_07', 'eTimes_09', 'eTimes_11',
               'eTimes_12', 'eTimes_13', 'eDisposition_17', 'eDisposition_23'],
      datasets: [{
          label: 'Number of Null Values',
          data: [0, 0, 205064, 136208, 0, 23993, 58916, 35839, 77690, 227792, 51389, 0, 274220, 209711, 225137, 418309, 443976,
                 444651, 4062, 8445, 7735, 269830, 300962, 0, 0, 0, 0, 113150, 31772, 145950, 442379, 15869, 23961, 164852, 168552,
                 111957, 129283, 114466, 0, 1388, 2148, 24475, 204252, 260562, 301147, 9, 252335, 323201],
          backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)'
          ],
          borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)'
          ],
          borderWidth: 1
      }]
  },
  options: {
      plugins: {
        legend: {
          display: false
        },
        title: {
            display: true,
            text: 'Null Values of PCR Events',
            font: {
                size: 24
            }
        }
      },
      scales: {
          y: {
              beginAtZero: true,
          },
      }
  }
});

const ctx3 = document.getElementById('myThirdBarChart').getContext('2d');
const myThirdBarChart = new Chart(ctx3, {
  type: 'bar',
  data: {
      labels: ['9906003', '9906001', '9906005'],
      datasets: [{
          label: 'Frequency',
          data: [277759, 166319, 544],
          backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)'
          ],
          borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)'
          ],
          borderWidth: 1
      }]
  },
  options: {
      plugins: {
        legend: {
          display: false
        },
        title: {
            display: true,
            text: 'ePatient_13 Distribution',
            font: {
                size: 24
            }
        }
      },
      scales: {
          y: {
              beginAtZero: true,
          },
      }
  }
});

const ctx4 = document.getElementById('myFourthBarChart').getContext('2d');
const myFourthBarChart = new Chart(ctx4, {
  type: 'bar',
  data: {
      labels: ['2516009', '2516007', '2516001', '2516003', '2516005'],
      datasets: [{
          label: 'Frequency',
          data: [436549, 3179, 846, 284, 91],
          backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)'
          ],
          borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)'
          ],
          borderWidth: 1
      }]
  },
  options: {
      plugins: {
        legend: {
          display: false
        },
        title: {
            display: true,
            text: 'ePatient_16 Distribution',
            font: {
                size: 24
            }
        }
      },
      scales: {
          y: {
              beginAtZero: true,
          },
      }
  }
});

const ctx5 = document.getElementById('myFifthBarChart').getContext('2d');
const myFifthBarChart = new Chart(ctx5, {
  type: 'bar',
  data: {
      labels: ['2707005', '2707001', '2707003'],
      datasets: [{
          label: 'Frequency',
          data: [409830, 4788, 2294],
          backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)'
          ],
          borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)'
          ],
          borderWidth: 1
      }]
  },
  options: {
      plugins: {
        legend: {
          display: false
        },
        title: {
            display: true,
            text: 'eScene_06 Distribution',
            font: {
                size: 24
            }
        }
      },
      scales: {
          y: {
              beginAtZero: true,
          },
      }
  }
});

const ctx6 = document.getElementById('mySixthBarChart').getContext('2d');
const mySixthBarChart = new Chart(ctx6, {
  type: 'bar',
  data: {
      labels: ['9923001', '9923003'],
      datasets: [{
          label: 'Frequency',
          data: [301804, 930],
          backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)'
          ],
          borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)'
          ],
          borderWidth: 1
      }]
  },
  options: {
      plugins: {
        legend: {
          display: false
        },
        title: {
            display: true,
            text: 'eScene_07 Distribution',
            font: {
                size: 24
            }
        }
      },
      scales: {
          y: {
              beginAtZero: true,
          },
      }
  }
});

const ctx7 = document.getElementById('mySeventhBarChart').getContext('2d');
const mySeventhBarChart = new Chart(ctx7, {
  type: 'bar',
  data: {
      labels: ['2207003', '2207007', '2207009', '2207005', '2207011', '2207013'],
      datasets: [{
          label: 'Frequency',
          data: [359893, 44973, 33465, 6563, 3500, 247],
          backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)'
          ],
          borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)'
          ],
          borderWidth: 1
      }]
  },
  options: {
      plugins: {
        legend: {
          display: false
        },
        title: {
            display: true,
            text: 'eResponse_07 Distribution',
            font: {
                size: 24
            }
        }
      },
      scales: {
          y: {
              beginAtZero: true,
          },
      }
  }
});

const ctx8 = document.getElementById('myEighthBarChart').getContext('2d');
const myEighthBarChart = new Chart(ctx8, {
  type: 'bar',
  data: {
      labels: ['2807011', '2807005', '2807015', '2807001', '2807017', '2807003', '2807013', '2807007', '2807009'],
      datasets: [{
          label: 'Frequency',
          data: [214009, 61480, 5005, 899, 862, 510, 414, 348, 305],
          backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)'
          ],
          borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)'
          ],
          borderWidth: 1
      }]
  },
  options: {
      plugins: {
        legend: {
          display: false
        },
        title: {
            display: true,
            text: 'eResponse_07 Distribution',
            font: {
                size: 24
            }
        }
      },
      scales: {
          y: {
              beginAtZero: true,
          },
      }
  }
});

const ctx9 = document.getElementById('myNinthBarChart').getContext('2d');
const myNinthBarChart = new Chart(ctx9, {
  type: 'bar',
  data: {
      labels: ['2808003', '2808011', '2808019', '2808005', '2808015', '2808009', '2808007', '2808001', '2808013', '2808021', '2808017'],
      datasets: [{
          label: 'Frequency',
          data: [147838, 114319, 8001, 5056, 3352, 651, 439, 269, 104, 70, 33],
          backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)'
          ],
          borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)'
          ],
          borderWidth: 1
      }]
  },
  options: {
      plugins: {
        legend: {
          display: false
        },
        title: {
            display: true,
            text: 'eResponse_07 Distribution',
            font: {
                size: 24
            }
        }
      },
      scales: {
          y: {
              beginAtZero: true,
          },
      }
  }
});

