var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1Background = document.querySelector("h1");
var reset = document.querySelector("#reset");

reset.addEventListener("click", function() {
  color = generateRandomColors(6);
  pickedColor = pickColor();
  colorDisplay.innerHTML = pickedColor;
  for( var i = 0; i < squares.length; i++ ) {
    squares[i].style.backgroundColor = colors[i];
  }
  h1Background.style.backgroundColor = "#232323"
});

colorDisplay.innerHTML = pickedColor;

for( var i = 0; i < squares.length; i++ ) {
    //add initial colors to squares
  squares[i].style.backgroundColor = colors[i];

    //add click listeners to squares
  squares[i].addEventListener("click", function(){
    //grab color of picked square
    //compare color of pickedColor
    var clickedColor = this.style.backgroundColor;

    if( clickedColor === pickedColor ) {
      messageDisplay.innerHTML = "Correct!";
      reset.innerHTML = "Play Again?";
      changeColors( clickedColor );
      h1Background.style.backgroundColor = clickedColor;
    } else {
      this.style.backgroundColor = "#232323";
      messageDisplay.innerHTML = "You got it wrong :(";
    }
  });
}

function changeColors(color) {
  //loop through all squares
  for( var i = 0; i < squares.length; i++ ) {
    //change each color to match given color
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  //make array
  var arr = []
  //repeat num times
  for( var i = 0; i < num; i++ ) {
    //get random color and push into array
    arr.push(randomColor());
  }
  //return array
  return arr;
}

function randomColor() {
  //pick a red from 0 - 255
  var r = Math.floor(Math.random() * 256);
  //pick a green from 0 - 255
  var g = Math.floor(Math.random() * 256);
  //pick a blue from 0 - 255
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
