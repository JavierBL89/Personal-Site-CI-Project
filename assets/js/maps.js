
  function initMap(){
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 3,
      center: {
        lat: 46.619261,
        lng: -33.134766
      }
    });

  var labels = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
  var locations = [
    {lat: 53.3582320190, lng: -6.26324261528},
    {lat: 53.34070287984535, lng: -6.275166728067375},
    { lat: -37.774785, lng: 145.137978 }
  ];

  // WE NEED TO ITERATE THROUGH LOCATIONS AND ADD A MARKER
  // THAT HAS  A LABEL OF OUR LABELS []
  const markers = locations.map((position, i) => {
  const label = labels[i % labels.length];
  const marker = new google.maps.Marker({
    position,
    label,
  });

  marker.addListener("click", () => {
    infoWindow.setContent(label);
    infoWindow.open(map, marker);
  });
  return marker
});
// Add a marker clusterer to manage the markers.
const markerCluster = new markerClusterer.MarkerClusterer({ map, markers });};
