let divContainer = document.querySelector('#div-container');
let createDiv;

function repeatDivs() {
    for (let i = 0; i < 256; i++) {
        createDiv = document.createElement('div');
        createDiv.setAttribute('id', 'square');
        divContainer.appendChild(createDiv);
    }
}
repeatDivs();

