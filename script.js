document.addEventListener("DOMContentLoaded", function(event) {

  let $xhr = $.ajax ({
    url: 'https://developer.nps.gov/api/v0/parks',
    type: 'GET',
    dataType: 'json',
    success: function(data) {
      console.log(data)
      // map.data.loadGeoJson('data')
    },
    error: function() {alert('failed')},
    beforeSend: setHeader,
  })
})

function setHeader(xhr) {
  xhr.setRequestHeader('Authorization', '22A19C65-2E7C-4BB9-9806-0A0C2397540A')
}
