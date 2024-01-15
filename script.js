const containerDiv = document.querySelector('#container');
const gridSizeInput = document.querySelector('#gridSizeInput');
const colorInput = document.querySelector('#colorInput');

let gridSize = 16; 
let paintingColor = colorInput.value;



createGrid();

gridSizeInput.addEventListener('change', () =>{
    gridSize = gridSizeInput.value;
    deleteGrid();
    createGrid();

});
colorInput.addEventListener('change', () => {
    paintingColor = colorInput.value;
});


function createGrid(){
    for(let i = 1;i <= gridSize * gridSize; i++){
        let gridDiv = document.createElement("div");
        gridDiv.classList.add("gridDiv")
        gridDiv.style.flexBasis = 600 / gridSize + "px";
        gridDiv.style.minHeight = 600 / gridSize + 'px';
        containerDiv.appendChild(gridDiv);

        gridDiv.addEventListener('mouseover', (e) =>{
            e.target.style.backgroundColor = paintingColor;
        });
    }
}
function deleteGrid(){
    while (containerDiv.firstChild){
        containerDiv.removeChild(containerDiv.firstChild);
    }
}
