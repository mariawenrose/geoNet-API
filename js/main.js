var map;


// function initMap() {
//   map = new google.maps.Map(document.getElementById('map'), {
//     center: {lat: -34.397, lng: 150.644},
//     zoom: 8
//   }); //map

//   var x,y;
//   $.ajax({
//     url:'https://api.geonet.org.nz/quake?MMI=3', 
//     type: 'GET', 
//     dataType: 'json',
//     success: function(dataFromJSON) {
//       console.log(dataFromJSON);
//       for(var i = 0; i < dataFromJSON.features.length; i++) {
      
      
//       console.log(dataFromJSON.features[i].geometry.coordinates[0]); //longitude
//       y = dataFromJSON.features[i].geometry.coordinates[0]; 

      
      
//       console.log(dataFromJSON.features[i].geometry.coordinates[1]); //latitude
//       x = dataFromJSON.features[i].geometry.coordinates[1]; 
//       var marker = new google.maps.Marker({
//         position: { lat: x, lng: y },
//         map: map});
//       }
//     },
//     error: function(error) {
//       alert('hoemygod you goofed up');
//     }
//   }) //ajax
// } // init map function


function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: {lat: -41.286, lng: 174.776}
  });

  var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
  var beachMarker = new google.maps.Marker({
    position: {lat: -41.286461, lng: 174.776230},
    map: map,
    icon: image
  });

var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
var beachMarker2 = new google.maps.Marker({
  position: {lat: -41.336900, lng: 174.771000},
  map: map,
  icon: image
  });
}