let divContainer = document.querySelector('#div-container');
let createDiv;
let resetButton = document.querySelector('#reset-button');

createGrid(16, 16);

let box = document.querySelectorAll('#box');
addColor()

resetButton.addEventListener('click', function () {
    box.forEach(box => {
        box.classList.remove('color');
    })
    createGrid(prompt('What should the length and width of your new canvas be?', 16, 'x', 16));
    addColor();
})

// FUNCTION DECLARATIONS

function createGrid(length, width) {
    for (let i = 0; i < length * width; i++) {
        createDiv = document.createElement('div');
        createDiv.setAttribute('id', 'box');
        divContainer.appendChild(createDiv);
    }
}

function addColor() {
    box = document.querySelectorAll('#box');
    box.forEach(box => {
        box.addEventListener('mouseenter', function () {
            box.classList.add('color');
        });
    })
}

function resetCanvas() {
    box = document.querySelectorAll('#box');
    box.forEach(box => {
        box.classList.remove('color');
    })
    createGrid(prompt('What should the length and width of your new canvas be?', 16, 'x', 16));
    addColor();
}