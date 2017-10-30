function initMap() {
}
  let $xhr = $.ajax ({
    url: 'https://developer.nps.gov/api/v1/parks?limit=519&q=national%20park&api_key=uRy7DBPiQRPP86xvn1XwEtfKNl9CQxVEEqkAKbSr',
    type: 'GET',
    dataType: 'json',
    success: function(data) {
      var options = {
        zoom: 3,
        center: {lat:40.0150, lng:-105.2705}
      }
      var map = new google.maps.Map(document.getElementById('map'), options)

      var image = 'mutcd-campground-guide-sign-hiking-trail-x-rs-068.png'
      for (let i = 0; i < data.data.length; i++) {
        var contentString = '<h3 id="firstHeading" class="firstHeading">' + data.data[i].name + '</h3>'
        var infowindow = new google.maps.InfoWindow({
         content: contentString
        })

        if (data.data[i].latLong === '') {
        } else if (data.data[i].latLong.length === 34) {
          var latLongStr = data.data[i].latLong
          var lat = latLongStr.slice(4, 15)
          var lng = latLongStr.slice(22, 34)
          var latLng = new google.maps.LatLng(lat, lng)
          var marker = new google.maps.Marker({
            position: latLng,
            icon: image
          })
          marker.setMap(map)
          marker.addListener('click', function() {
          infowindow.open(map, marker)
          })

        } else if (data.data[i].latLong.length === 30) {
          var latLongStr = data.data[i].latLong
          var lat = latLongStr.slice(4, 13)
          var lng = latLongStr.slice(20, 30)
          var latLng = new google.maps.LatLng(lat, lng)
          var marker = new google.maps.Marker({
            position: latLng,
            icon: image
          })
          marker.setMap(map)

        } else if (data.data[i].latLong.length === 33) {
          var latLongStr = data.data[i].latLong
          var lat = latLongStr.slice(4, 15)
          var extLong = latLongStr.slice(21, 33)
          for (let i = 0; i < lng.length; i++) {
            lng = extLong.replace(/:/g, '')
          }
          var latLng = new google.maps.LatLng(lat, lng)
          var marker = new google.maps.Marker({
            position: latLng,
            icon: image
          })
          marker.setMap(map)
        }

      } // end of for loop
    },// end of success
    error: function() {alert('failed')},
  })// end of ajax

$( window ).bind('mousewheel', function( ev ){
  ev.preventDefault();
  var $window = $(window),
    scrollIncrement = ev.originalEvent.deltaY/1,
    scrollPos = $window.scrollTop(),
    newPos = scrollPos+scrollIncrement;
  $window.scrollTop( newPos );
})

$(document).ready(function(){
    $('.parallax').parallax();
});
