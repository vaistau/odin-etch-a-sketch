let divContainer = document.querySelector('#div-container');
let createDiv;

function createGrid(numberOfBoxes) {
    for (let i = 0; i < numberOfBoxes; i++) {
        createDiv = document.createElement('div');
        createDiv.setAttribute('id', 'square');
        divContainer.appendChild(createDiv);
    }
}
createGrid(256);

