const divContainer = document.querySelector('#div-container');
function repeatDivs() {
    for (let i = 0; i < 256; i++) {
        const createDiv = document.createElement('div');
        divContainer.appendChild(createDiv);
    }
}

repeatDivs();

