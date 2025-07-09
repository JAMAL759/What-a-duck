
const gridElem = document.querySelector('.grid');

const cells = []

const gridWidth = 10;
const numberOfCell = gridWidth * gridWidth;

function createGrid() {

    for(let i = 0; i< numberOfCell ; i++){
       const cell = document.createElement('div');
       cell.classList = "duck";
        cell.textContent = i;
        cells.push(cell);
       gridElem.appendChild(cell);

    }
    console.log(cells)

}

createGrid()
//document.addEventListener('DOMContentLoaded' , init);
