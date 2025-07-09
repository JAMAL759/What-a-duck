
const gridElem = document.querySelector('.grid');
const scoreElem = document.querySelector("#score-display")
const cells = []

const gridWidth = 10;
const numberOfCell = gridWidth * gridWidth;
let duckPosition = 20;
let score = 0;






function addDuck() {
    cells[duckPosition].classList.add("duck")
}

function removeDuck() {
    cells[duckPosition].classList.remove("duck")
}



function play() {
    //setInterval ()=>{}, time)

    setInterval( (e) => {

        removeDuck();
        
        duckPosition = Math.floor(Math.random() * numberOfCell);

        console.log(numberOfCell)
        addDuck();
        

    } , 3000)
}

function handleClick(event) {
    console.log("Handle Click has run!");
    if(event.target.classList.contains('duck')){
        score += 10;
        scoreElem.textContent = score;
        console.log(score);
    }
}
function createGrid() {

    for(let i = 0; i< numberOfCell ; i++){
       const cell = document.createElement('div');
      // cell.classList = "duck";
        cell.textContent = i;
        cell.addEventListener('click', handleClick)
        cells.push(cell);
       gridElem.appendChild(cell);

    }
  
    console.log(cells)

}






createGrid()
play();

//removeDuck()
//document.addEventListener('DOMContentLoaded' , init);



