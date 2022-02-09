var x = $('h1');
//activate css

x.css('color', 'red');
x.css('background', 'grey');

//JS Object

var newCSS = {
  'color': "white",
  'background': 'blue',
  'border': 'red'
}

x.css(newCSS); //passing JS Object

//grab multiple objects at once

var listItems = $('li')

listItems.css('color','blue') //affect all li items
//for the first li  item
listItems.eq(0).css('color', 'orange')

//last item
listItems.eq(-1).css('color','green')
