let divContainer = document.querySelector('#div-container');
let createDiv;
let resetButton = document.querySelector('#reset-button');

createGrid(16);

let box = document.querySelectorAll('#box');
addColor()

resetButton.addEventListener('click', function () {
    resetCanvas();
    createGrid(prompt('What should the length and width of your new canvas be? \r\n (Maximum 100)', 16));
    addColor();
})

// FUNCTION DECLARATIONS

function createGrid(dimension) {
    if (dimension <= 100) {
        for (let i = 0; i < dimension * dimension; i++) {
            createDiv = document.createElement('div');
            createDiv.setAttribute('id', 'box');
            divContainer.appendChild(createDiv);
        }
    } else {
        alert('Dimensions over 100px are not supported at this time.')
        createGrid(16);
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
    let removeBox = document.querySelectorAll('#box').forEach(box => box.remove());
}