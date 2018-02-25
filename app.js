let colors = generateRandomColors(6);
var pickedColor = pickColor();
var h1 = document.querySelector('h1');
var resetButton = document.getElementById('reset');

document.getElementById('title').textContent = pickedColor;
var messageDisplay = document.querySelector("#message");

var squares = document.querySelectorAll(".square");

for(var i = 0; i < squares.length; i++){
  //add initial colors
  squares[i].style.backgroundColor = colors[i]

  // add click listeners to squares
  squares[i].addEventListener("click", function(){
    // gran color of clicked squares
    var clickedColor = this.style.backgroundColor;
    if(clickedColor == pickedColor){
      messageDisplay.textContent = "Correct!";
      changeColors(clickedColor);
      h1.style.backgroundColor = clickedColor;
    }else {
      this.style.backgroundColor = "#232323"
      messageDisplay.textContent = "Try Again";
    }
    //compaore color of pickedsquare to pickedColor
  })

}

function changeColors(color){
  //loop through all squares
  for(var i = 0; i < squares.length; i++){
      //change each color to match given color
    squares[i].style.backgroundColor = color;
  }
}

function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num){
  //make an array
  var arr = [];
  //repeat num times
  for (var i = 0; i < num; i++){
    //get random color and push into array
    arr.push(randomColor());
  }
  //return that array
  return arr;
}

function randomColor(){
  //pick a "red" from 0 - 255
  var r = Math.floor(Math.random() * 256);
  // pick a 'green' from 0 -255
  var g = Math.floor(Math.random() * 256);
  // pick a - 'blue from 0 -255
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";


}

resetButton.addEventListener('click', function(){
  //when clicked, the game resets with new colors
  colors = generateRandomColors(6);
});
