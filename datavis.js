var dataMap;
var markers = [];
var selected_marker = null;

var mapInit = function() {

    //center map on indiana 
    var mapProps = {
    center: {lat: 40.0000, lng: -86.0000},
    zoom: 7
    panControl:true,
    zoomControl:true,
    mapTypeControl:true,
    scaleControl:true,
    streetViewControl:true,
    overviewMapControl:true,
    rotateControl:true, 
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };
    //instantiate the map
    HazmatMap = new google.maps.Map(document.getElementById("googleMap"), mapProp);
var cities = [
	      ['Ft. Wayne',41.0804, -85.1392 ,4],
	      ['Indianapolis',39.7910, -86.1480 ,5],
	      ['Marion',40.5492, -85.6647 ,3],
	      ['Bloomington', 39.1622, -86.5292 ,2],
	      ['Muncie', 40.1933, -85.3881, 1]
	      ];

funtion setMarkers(map){
    for (var i = 0; i < cities.length; i++) {
	var beach = cites[i];
	var marker = new google.maps.Marker({
		position: {lat: cities[1], lng: cities[2]},
		map: map,,
		title: cities[0],
		zIndex: cities[3]
	    });
    }
	      
var infoWindow = new google.maps.InfoWindow({map: map});

  //  HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      infoWindow.setPosition(pos);
      infoWindow.setContent('User Location.');
      map.setCenter(pos);
     }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
}
var marker = new google.maps.Marker({
	postion:pos,
	map:map
	});
marker.addListener('click',function() {
	infowindow.open(map, marker);
    });
marker.setMap(map);

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                        'Error: Geolocation failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
}