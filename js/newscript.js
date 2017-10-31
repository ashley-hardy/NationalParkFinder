$(document).ready(function() {
  for (var key in localStorage) {
    var favParkInfo = '<tr><td>' + key + '</td><td>' + localStorage[key] + "</td><td><button type='button'>Remove</button></td></tr>"
    $('table tbody').append(favParkInfo)
  }
  // if (localStorage.getItem('name') !== null) {
  //
  // } else {
  //   console.log('nothing in local storage')
  // }


})
