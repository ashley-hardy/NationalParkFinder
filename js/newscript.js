$(document).ready(function() {
  for (var key in localStorage) {
    var favParkInfo = "<tr><td>" + key + "</td><td><a href='" + localStorage[key] + "'>NPS Webite Link</a></td><td><button type='button' class='waves-effect waves-light btn'>Remove</button></td></tr>"
    $('table tbody').append(favParkInfo)
  }
})