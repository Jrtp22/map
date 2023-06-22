// Get the user's coordinates:                                                              
async function getCoords() {
    pos = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject)
    })
    return [pos.coords.latitude, pos.coords.longitude]
}

// Create map:                                                       

// Create map:                                                       
const myMap = L.map('map');

getCoords().then(coords => {
    myMap.setView(coords, 12);
});

// Add OpenStreetMap tiles:
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    minZoom: '15',
}).addTo(myMap)

