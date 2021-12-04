let divContainer = document.querySelector('#div-container');
let createDiv;
let resetButton = document.querySelector('#reset-button');

createGrid(16);

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

function createGrid(dimension) {
    for (let i = 0; i < dimension * dimension; i++) {
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
    divContainer = document.querySelector('div');

    box.forEach(box => {
        box.classList.remove('color');
    })

    while (divContainer.box) {
        divContainer.removeChild(box);
    }
}

function newCanvas() {
    createGrid(prompt('How many cells should the length/width of your canvas contain?', 16));

    addColor();
}