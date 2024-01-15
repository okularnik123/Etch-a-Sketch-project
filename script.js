const containerDiv = document.querySelector('#container');

let gridSize = 16; 



for(let i = 1;i<=gridSize * gridSize; i++){
    let gridDiv = document.createElement("div");
    gridDiv.classList.add("gridDiv")
    gridDiv.style.flexBasis = 600 / gridSize + "px";
    gridDiv.style.minHeight = 600 / gridSize + 'px';
    containerDiv.appendChild(gridDiv);
}