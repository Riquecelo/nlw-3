
const options ={
    draggings: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

//creat map
const map = L.map('mapid', options).setView([-1.4147594,-48.4453204], 15)

//creat and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',).addTo(map)

//creat icon 
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})


//creat and add marker
L.marker([-1.4147594,-48.4453204], {icon}).addTo(map)
    .bindPopup(popup)
    