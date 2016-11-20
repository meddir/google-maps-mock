describe('Map', function() {

  it('should init', function() {
    var map = new google.maps.Map();
    expect(map).toBeDefined();
  });

  it('should create a polygon', function() {
    var triangleCoords = [
      {lat: 25.774, lng: -80.190},
      {lat: 18.466, lng: -66.118},
      {lat: 32.321, lng: -64.757},
      {lat: 25.774, lng: -80.190}
    ];
    var options = {
      paths: triangleCoords,
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpacity: 0.35
    };

    var shape = new google.maps.Polygon(options);
    expect(shape).toBeDefined();
  });

  it('should create a marker', function() {
    var map = new google.maps.Map();
    var myLatLng = {lat: -25.363, lng: 131.044};
    var options = {
      position: myLatLng,
      map: map,
      title: 'Hello World!'
    };
    var marker = new google.maps.Marker(options);
    expect(marker).toBeDefined();
  });

  it('should create a map from script in the app', function() {
    initMap();
    expect(map).toBeDefined();
  });

  it('should call geometry encode path', function() {
    var map = new google.maps.Map();
    var polyLine = createPolyLine(map);
    var encodedPath = google.maps.geometry.encoding.encodePath(polyLine.getPath());
    expect(encodedPath).toBeDefined();
  });

  function createPolyLine(map) {
    var coordinates = [
      {lat: 37.772, lng: -122.214},
      {lat: 21.291, lng: -157.821},
      {lat: -18.142, lng: 178.431},
      {lat: -27.467, lng: 153.027}
    ];
    return new google.maps.Polyline({
      map: map,
      path: coordinates,
      geodesic: true,
      strokeColor: '#FF0000',
      strokeOpacity: 1.0,
      strokeWeight: 2
    });
  }
});
