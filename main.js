console.log('connected')

$('#submit-btn').click(function(event) {
  event.preventDefault()

  var valueInput = $('#city-type').val()
  var userInput = valueInput.toLowerCase();

  if (userInput  === 'nyc' || userInput === 'new york') {
    $('body').css('background-image' , 'url(images/nyc.jpg)' )
  }
  else if (userInput  === 'sf' || userInput === 'san francisco') {
    $('body').css('background-image' , 'url(images/sf.jpg)' )
  }
  else if (userInput  === 'sydney') {
    $('body').css('background-image' , 'url(images/sydney.jpg)' )
  }
  else if (userInput  === 'austin') {
    $('body').css('background-image' , 'url(images/austin.jpg)' )
  }
  else if (userInput  === 'la' || userInput === 'los angeles') {
    $('body').css('background-image' , 'url(images/la.jpg)' )
  }
  else {
    $('body').css('background-image' , 'url(images/citipix_skyline.jpg)' )
  }



})
