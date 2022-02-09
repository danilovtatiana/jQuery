$('h1').click(function(){
  // console.log("There was a click!");
  //change the heading every time you click on it
  $(this).text("I was changed!")
})

//grabbing multiple elements

$('li').click(function(){
  console.log('any li was clicked');
})

//KEY PRESS

$('input').eq(0).keypress(function(){
  // $('h2').toggleClass('turnBlue');
  if (event.which === 13) {
    $('h2').toggleClass('turnBlue')
  }
})
