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
        createMarker(data.data[i])
      } // end of for loop
      function createMarker(i) {
        if (i.latLong === '') {
          return
        } else if (i.latLong.length === 34) {
          var latLongStr = i.latLong
          var lat = latLongStr.slice(4, 15)
          var lng = latLongStr.slice(22, 34)
          var latLng = new google.maps.LatLng(lat, lng)
          var marker = new google.maps.Marker({
            position: latLng,
            map: map,
            icon: 'mutcd-campground-guide-sign-hiking-trail-x-rs-068.png'
          })
          var infoWindow = new google.maps.InfoWindow({
            content: '<h5>' + i.name + '</h5><br><p><strong>About: </strong>' + i.description + "</p><p><strong>More info: </strong></p><a href ='" + i.url + "'></a>"
          })

          marker.setMap(map)
          google.maps.event.addListener(marker, 'click', function () {
              infoWindow.open(map, marker)
          })
        }
        // else if (data.data[i].latLong.length === 30) {
        //   var latLongStr = data.data[i].latLong
        //   var lat = latLongStr.slice(4, 13)
        //   var lng = latLongStr.slice(20, 30)
        //   var latLng = new google.maps.LatLng(lat, lng)
        //   var marker = new google.maps.Marker({
        //     position: latLng,
        //     icon: image
        //   })
        //   marker.setMap(map)
        //
        // } else if (data.data[i].latLong.length === 33) {
        //   var latLongStr = data.data[i].latLong
        //   var lat = latLongStr.slice(4, 15)
        //   var extLong = latLongStr.slice(21, 33)
        //   for (let i = 0; i < lng.length; i++) {
        //     lng = extLong.replace(/:/g, '')
        //   }
          // var latLng = new google.maps.LatLng(lat, lng)
          // var marker = new google.maps.Marker({
          //   position: {lat: parseFloat(lat), lng: parseFloat(lng)},
          //   icon: image
          // })
          // marker.setMap(map)
        // }

      }
      // $('#map').on('click', function (event) {
      //   console.log(marker)
      //   infoWindow.open(map, marker)
      // })
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
