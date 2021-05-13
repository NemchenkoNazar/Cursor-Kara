const generateButton = document.getElementById('generate-button');
generateButton.addEventListener('click', generateBlocks)

const changeButton = document.getElementById('change-button');
changeButton.addEventListener('click', generateBlocksInterval);

function generateBlocks() {
    const body = document.querySelector('#hw10');
    body.insertAdjacentHTML("beforeend", '<div class="container">');
    const container = document.getElementsByClassName('container');
    for(let i = 0; i < 25; i++) {
        container[0].insertAdjacentHTML("afterbegin", '<div class="square">');
    }
    const square = document.querySelectorAll('.square');
    square.forEach(element => {
        element.classList.add('element');
        element.style.backgroundColor = '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase();
    });
    generateButton.removeEventListener('click', generateBlocks);
};

function generateBlocksInterval() {
    const square = document.querySelectorAll('.square');
    setInterval(function() {
        square.forEach(element => {
            element.style.backgroundColor = '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase();
        });
    }, 1000);
    if(square.length > 0) {
        changeButton.removeEventListener('click', generateBlocksInterval);
    };
};

export {
    generateButton,
    changeButton,
    generateBlocks,
    generateBlocksInterval
}