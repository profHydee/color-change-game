var numSquares = 6
var colors = generateRandomColors(numSquares)

var squares= document.querySelectorAll(".square");
var pickedColor= pickRandomColor()
var displayColor = document.querySelector("#displayColor");
var displayMessage = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
//var easyButton = document.querySelector("#easyBtn");
//var hardButton = document.querySelector(".selected");
var levelButton = document.querySelectorAll(".levelButton");


for(var i = 0; i < levelButton.length; i++){
    levelButton[i].addEventListener("click", function(){
        levelButton[0].classList.remove("selected");
        levelButton[1].classList.remove("selected");
        this.classList.add("selected");
        if (this.textContent === "Easy"){
            numSquares=3;  
        }else{
            numSquares = 6;
        }
        reset()  
    })
    
}


function reset(){
     //generate random colors
     colors = generateRandomColors(numSquares)
     //pick random color
     pickedColor= pickRandomColor()
     // change displayColor to pickedColor
     displayColor.textContent = pickedColor;
     resetButton.textContent = "New Colors";
     h1.style.backgroundColor = "steelblue";
     displayMessage.textContent ="";
     for (var i = 0; i < squares.length; i++){
         if (colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
         }
         else{
             squares[i].style.display = "none";
         }
     }
    
 
}
/*
easyButton.addEventListener("click", function(){
    displayMessage.textContent = "";
    easyButton.classList.add("selected")
    hardButton.classList.remove("selected")
    numSquares = 3
    colors= generateRandomColors(numSquares);
    pickedColor = pickRandomColor();
    displayColor.textContent = pickedColor;

    for (var p =0; p < squares.length;p++){
        if (colors[p]){
            squares[p].style.backgroundColor = colors[p];
        }else{
        squares[p].style.display = "none";
    }
}
})
hardButton.addEventListener("click", function(){
    displayMessage.textContent = "";
    hardButton.classList.add("selected")
    easyButton.classList.remove("selected")
    var numSquares = 6
    colors= generateRandomColors(numSquares);
    pickedColor = pickRandomColor();
    displayColor.textContent = pickedColor;

    for (var p =0; p < squares.length;p++){
        squares[p].style.backgroundColor = colors[p];
        squares[p].style.display = "block"
    }
})*/
resetButton.addEventListener("click", function(){
   reset()

})

displayColor.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
    
    squares[i].addEventListener("click", function(){
        var chosenColor = this.style.backgroundColor;
        if (chosenColor === pickedColor){
            changeToWinningColor(chosenColor);
            displayMessage.textContent = "Correct!";
            resetButton.textContent = "Play Again";
            h1.style.backgroundColor = chosenColor;
        }else{
            this.style.backgroundColor = "rgb(2, 5, 0)"
            displayMessage.textContent = "Wrong!"
            //resetButton.textContent = "New Colors";
        }
    })

}

function changeToWinningColor(color){
    for(var p = 0; p < squares.length; p++){
        squares[p].style.backgroundColor = color;
    }
}

function pickRandomColor(){
    var chooseColor = Math.floor(Math.random() * colors.length)
    return(colors[chooseColor])
}

function generateRandomColors(num){
    var colorArray = []
    for(var i = 0; i < num; i++){
        colorArray.push(changeColor());
    }
    return colorArray;
}
//the changeColor function generates a random color each time it is called
function changeColor(){
    //i needed to generate random numbers between 0 and 255 for Red, Green and Blue so i used the random function

    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    var newColor = "rgb(" + r + ", " + g + ", " + b + ")";
    return newColor;
}
