// Ask for the user current location
var message = document.querySelector("#geolocationMessage"),
    CONSTANTS = {
        "GEOLOCATION": "geolocation"
    };

var getCurrentLocation = function() {
    navigator.geolocation.getCurrentPosition(success);
};

function success(position){
    var latitude = position.coords.latitude,
        longitude = position.coords.longitude,
        img = new Image();

    img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&zoom=13&size=300x300&sensor=false&key=AIzaSyA_rL4-hPMjjnnilwj0L8gb0UyIYkERgSA";
    message.innerHTML = "<p>Lat: " + latitude + ", Lng : " + longitude +"</p>";
    message.appendChild(img);
}

var verifyGeoLocation = function () {
    if (CONSTANTS.GEOLOCATION in navigator) {
        getCurrentLocation();
    } else {
        message.innerHTML = "<p>Support</p>";
    }
}();

