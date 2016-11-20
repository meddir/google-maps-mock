describe('Map', function() {

  it('should init', function() {
    var map = new google.maps.Map();
    expect(map).toBeDefined();
  });

  it('should create a polygon', function() {
    var shape =  new google.maps.Polygon();
    expect(shape).toBeDefined();
  });

  it('should create a marker', function() {
    var marker =  new google.maps.Marker();
    expect(marker).toBeDefined();
  });

  it('should create a map from script in the app', function() {
    initMap();
    expect(map).toBeDefined();
  });
});
