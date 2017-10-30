function initMap() {
}
  let $xhr = $.ajax ({
    url: 'https://developer.nps.gov/api/v1/parks?api_key=uRy7DBPiQRPP86xvn1XwEtfKNl9CQxVEEqkAKbSr',
    type: 'GET',
    dataType: 'json',
    success: function(data) {
      var options = {
        zoom: 3,
        center: {lat:40.0150, lng:-105.2705}
      }

      var map = new google.maps.Map(document.getElementById('map'), options)
      console.log(data.data)
      for (let i = 0; i < data.data.length; i++) {
        if (data.data[i].latLong === '') {
        } else {
        var latLongStr = data.data[i].latLong
        var lat = latLongStr.slice(4, 13)
        var lng = latLongStr.slice(22, 30)

        var latLng = new google.maps.LatLng(lat, lng)
        var marker = new google.maps.Marker({
          position: latLng,
        })
        marker.setMap(map)
        }
      }
    },
    error: function() {alert('failed')},
  })
  $( window ).bind('mousewheel', function( ev ){
    ev.preventDefault();
    var $window = $(window),
        scrollIncrement = ev.originalEvent.deltaY/1,
        scrollPos = $window.scrollTop(),
        newPos = scrollPos+scrollIncrement;
    $window.scrollTop( newPos );
} );
