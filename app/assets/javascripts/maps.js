var citymap = {};
citymap['carson'] = {
  center: new google.maps.LatLng(33.8025833,-118.21732),
  population: 3857799
};

var cityCircle;

function initialize() {
  // Create the map.
  var mapOptions = {
    zoom: 9,
    center: new google.maps.LatLng(33.8025833,-118.21732),
    mapTypeId: google.maps.MapTypeId.TERRAIN
  };

  var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  // Construct the circle for each value in citymap.
  // Note: We scale the area of the circle based on the population.
  for (var city in citymap) {
    var populationOptions = {
      strokeColor: '#0066FF',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillOpacity: 0.35,
      map: map,
      center: citymap[city].center,
      radius: Math.sqrt(citymap[city].population) * 19
    };
    // Add the circle for this city to the map.
    cityCircle = new google.maps.Circle(populationOptions);
  }
}

google.maps.event.addDomListener(window, 'load', initialize);