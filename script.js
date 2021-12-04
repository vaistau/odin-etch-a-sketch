let divContainer = document.querySelector('#div-container');
let createDiv;
let resetButton = document.querySelector('#reset-button');

function createGrid(numberOfBoxes) {
    for (let i = 0; i < numberOfBoxes * numberOfBoxes; i++) {
        createDiv = document.createElement('div');
        createDiv.setAttribute('id', 'box');
        divContainer.appendChild(createDiv);
    }
}

createGrid(16);

let box = document.querySelectorAll('#box');

box.forEach(box => {
    box.addEventListener('mouseenter', function () {
        box.classList.add('color');
    })
})

resetButton.addEventListener('click', function () {
    box.forEach(box => {
        box.classList.remove('color');
    })
})