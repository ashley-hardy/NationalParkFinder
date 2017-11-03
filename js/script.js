function initMap() {
}

function latitude(string, num1, num2) {
  lat = string.slice(num1, num2)
  return lat
}

function longitude(string, num1, num2) {
  lng = string.slice(num1, num2)
  return lng
}

  let $xhr = $.ajax ({
    url: 'https://developer.nps.gov/api/v1/parks?limit=519&q=national%20park&fields=images&api_key=uRy7DBPiQRPP86xvn1XwEtfKNl9CQxVEEqkAKbSr',
    type: 'GET',
    dataType: 'json',
    success: function(data) {
      var options = {
        zoom: 3,
        center: {lat:40.0150, lng:-105.2705}
      }
      var map = new google.maps.Map(document.getElementById('map'), options)

      for (let i = 0; i < data.data.length; i++) {
        createMarker(data.data[i])
        console.log(data.data[i])
      }

      function createMarker(i) {

        function addWindow () {
          var latLng = new google.maps.LatLng(lat, lng)
          var marker = new google.maps.Marker({
            position: latLng,
            map: map,
            icon: 'Img/HikingIcon.png'
          })

            var infoWindow = new google.maps.InfoWindow({
              content: "<img class='park-photo' src = '" + i.images[0].url + "'><h5>" + i.fullName + '</h5><br><p><strong>About: </strong>' + i.description + "</p><p><strong>More info: </strong>" + "<a target='blank' href=" + i.url + " >" + i.url + "</a><br><button class='favorites-button waves-effect waves-light btn' type='button'><strong>Add to Favorites</strong></button>"
            })
            marker.setMap(map)

            google.maps.event.addListener(marker, 'click', function (event) {
              if(!marker.open){
                infoWindow.open(map,marker)
                marker.open = true
              } else{
                infoWindow.close()
                marker.open = false
              }
              google.maps.event.addListener(map, 'click', function() {
                infoWindow.close()
                marker.open = false
              })
              $('.favorites-button').on('click', function() {
                localStorage.setItem(i.fullName, i.url)
              })
            })
          }

        if (i.latLong === '') {
          return
        } else if (i.latLong.length === 34) {
          var latLongStr = i.latLong
          lat = latitude(latLongStr, 4, 15)
          lng = longitude(latLongStr, 22, 34)
          addWindow()
        } else if (i.latLong.length === 30) {
          var latLongStr = i.latLong
          lat = latitude(latLongStr, 4, 13)
          lng = longitude(latLongStr, 20, 30)
          addWindow()
        }
      }
    },
    error: function() {alert('failed')},
  })

$(window).bind('mousewheel', function(ev){
  ev.preventDefault()
  var $window = $(window),
    scrollIncrement = ev.originalEvent.deltaY/1,
    scrollPos = $window.scrollTop(),
    newPos = scrollPos + scrollIncrement
  $window.scrollTop(newPos)
})

$(document).ready(function(){
    $('.parallax').parallax()
})
