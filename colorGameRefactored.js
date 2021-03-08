let numSquares = 6;
let colors =[];
let pickedColor;
let squares= document.querySelectorAll(".square");
let displayColor = document.querySelector("#displayColor");
let displayMessage = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let levelButton = document.querySelectorAll(".levelButton");

init();

function init(){
    setUpLevelButtons();
    setUpSquares();
    reset();
}

function setUpLevelButtons(){
    for(let i = 0; i < levelButton.length; i++){
        levelButton[i].addEventListener("click", function(){
            levelButton[0].classList.remove("selected");
            levelButton[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
            reset()  
        })
        
    }
}
function setUpSquares(){
    for(let i = 0; i < squares.length; i++){        
        squares[i].addEventListener("click", function(){
            let chosenColor = this.style.backgroundColor;
            if (chosenColor === pickedColor){
                changeToWinningColor(chosenColor);
                displayMessage.textContent = "Correct!";
                resetButton.textContent = "Play Again";
                h1.style.backgroundColor = chosenColor;
            }else{
                this.style.backgroundColor = "rgb(2, 5, 0)"
                displayMessage.textContent = "Wrong!"
            }
        })
    
    }
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
     for (let i = 0; i < squares.length; i++){
         if (colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
         }
         else{
             squares[i].style.display = "none";
         }
     }  
}
resetButton.addEventListener("click", function(){
   reset()

})




function changeToWinningColor(color){
    for(let p = 0; p < squares.length; p++){
        squares[p].style.backgroundColor = color;
    }
}

function pickRandomColor(){
    let chooseColor = Math.floor(Math.random() * colors.length)
    return(colors[chooseColor])
}

function generateRandomColors(num){
    let colorArray = []
    for(let i = 0; i < num; i++){
        colorArray.push(changeColor());
    }
    return colorArray;
}
//the changeColor function generates a random color each time it is called
function changeColor(){
    //i needed to generate random numbers between 0 and 255 for Red, Green and Blue so i used the random function

    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    let newColor = "rgb(" + r + ", " + g + ", " + b + ")";
    return newColor;
}
