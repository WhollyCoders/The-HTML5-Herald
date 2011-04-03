function determineLocation(){
    if (Modernizr.geolocation) {
        navigator.geolocation.getCurrentPosition(displayOnMap);

		var container = Raphael(document.getElementById("spinner"), 125, 125);
        var spinner = container.image("images/spinnerBW.svg", 0, 0, 100, 100);
        var attrsToAnimate = { rotation: "720" }; 
		spinner.animate(attrsToAnimate, 60000);        
    }
    else {
        // geolocation is not supported in this browser
        // we can use Google Gears as a fallback
    }
}

function displayOnMap(position){
	document.getElementById("spinner").style.visibility = "hidden";
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    
    // Let�s use Google Maps to display the location 
    var myOptions = {
        zoom: 14,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    
    var map = new google.maps.Map(document.getElementById("mapDiv"), myOptions);
    
    var initialLocation = new google.maps.LatLng(latitude, longitude);
    
    var marker = new google.maps.Marker({
        position: initialLocation,
        map: map,
        title: "Hello World!"
    });
    
    map.setCenter(initialLocation);
    
    
}



