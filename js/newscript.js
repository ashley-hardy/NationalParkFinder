$(document).ready(function() {

  for(var i = 0; i < localStorage.length; i++){
    var favParkInfo = "<tr><td>" + localStorage.key(i) + "</td><td><a target='blank' href='" + localStorage.getItem(localStorage.key(i)) + "'>NPS Webite Link</a></td><td><button type='button' value='" + localStorage.key(i) + "' class='remove waves-effect waves-light btn'>Remove</button></td></tr>"
    $('table tbody').append(favParkInfo)
  }

  $('.remove').on('click', (value) => {
    let key = $('.remove').val()
    localStorage.removeItem(key)
    location.reload(true)
  })

})
