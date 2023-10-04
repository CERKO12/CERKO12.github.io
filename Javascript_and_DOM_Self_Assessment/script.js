document.addEventListener("DOMContentLoaded", () => {
    loadListings();
});

async function loadListings() {
    try {
        const listingsData = await fetchData('airbnb_sf_listings_500.json');
        displayListings(listingsData.slice(0, 50));
    } catch (error) {
        console.error("Error fetching listings:", error);
    }
}

async function fetchData(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
}

function displayListings(listings) {
    const listContainer = document.getElementById("listings");

    for (const listing of listings) {
        const listingElement = createListingElement(listing);
        listContainer.appendChild(listingElement);
    }
}

function createListingElement(listing) {
    const amenities = extractAmenities(listing.amenities);

    const listingDiv = document.createElement('div');
    listingDiv.classList.add('listing', 'col-4');
    listingDiv.innerHTML = `
        <div class="card">
            <img class="card-img-top" src="${listing.picture_url}" alt="Listing Picture" />
            <h2 class="listing_name card-title">${listing.name}</h2>
            <div class="card-body">
                <div class="host">
                    <img src="${listing.host_picture_url}" alt="Host Picture" />
                    <div class="host_name">${listing.host_name}</div>
                </div>
                <div class="price">${listing.price}</div>
                <div class="neighborhood">${listing.neighbourhood}</div>
                <div class="amenities">
                    <h3>Amenities</h3>
                    ${amenitiesToHTML(amenities)}
                </div>
            </div>
        </div>
    `;

    return listingDiv;
}

function extractAmenities(amenitiesStr) {
    const regex = /\"((?:\\"|[^"])*)\"/g;
    return [...amenitiesStr.matchAll(regex)].map(match => match[1]);
}

function amenitiesToHTML(amenities) {
    return `<ul>${amenities.map(amenity => `<li>${amenity}</li>`).join('')}</ul>`;
}
