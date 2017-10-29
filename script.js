function initMap() {
  let options = {
    zoom: 8,
    center: {lat:40.0150, lng:-105.2705}
  }

  let map = new google.maps.Map(document.getElementById('map'), options)
}

$(document).ready(function(){
  let $xhr = $.ajax ({
    url: 'https://developer.nps.gov/api/v1/parks?api_key=uRy7DBPiQRPP86xvn1XwEtfKNl9CQxVEEqkAKbSr',
    type: 'GET',
    dataType: 'json',
    success: function(data) {
      var markers = []
      for (let i = 0; i < data.data.length; i++) {
        if (data.data[i].latLong === '') {
        } else {
        var latLongStr = data.data[i].latLong
        var lat = latLongStr.slice(4, 13)
        var lng = latLongStr.slice(22, 30)
        var latLongObj = {}
        latLongObj.lat = parseFloat(lat)
        latLongObj.lng = parseFloat(lng)
        markers.push(latLongObj)
        }
      }
      function addMarker(coords){
        var marker = new google.maps.Marker({
          position: coords,
          setMap: map,
        })
      }
      addMarker({lat:40.0150, lng:-105.2705})
      // console.log('markers', markers)
      // for (let i = 0; i < markers.length; i++) {
      //   addMarker(markers[i])
      // }
    },
    error: function() {alert('failed')},
  })
})

//   let $xhr = $.ajax ({
//     url: 'https://developer.nps.gov/api/v0/parks',
//     type: 'GET',
//     dataType: 'json',
//     success: function(data) {
//       // console.log(data)
//       // map.data.loadGeoJson('data')
//     },
//     error: function() {alert('failed')},
//     beforeSend: setHeader,
//   })
// })
//
// function setHeader(xhr) {
//   xhr.setRequestHeader('Authorization', '22A19C65-2E7C-4BB9-9806-0A0C2397540A')
// }
