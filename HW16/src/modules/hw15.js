//Base
function* createIdGenerator() {
    for(let i = 1; i < Infinity; i++) {
        yield i;
    };
};
const idGenerator = createIdGenerator();
// console.log(idGenerator.next().value);
// console.log(idGenerator.next().value);
// console.log(idGenerator.next().value);

//Advanced
// const body = document.querySelector('body');
// body.style.fontSize = `14px`;
// body.insertAdjacentHTML('beforeend', `<p id="CurrentFontSize">Current font size: ${body.style.fontSize}</p>`)

// function* newFontGenerator(value) {
//     currentSize = body.style.fontSize.substr(0, 2);
//     while(currentSize) {
//         if(value === "up") {
//             currentSize++;
//             yield currentSize
//         } else if(value === "down") {
//             currentSize--;
//             yield currentSize
//         };
//     };
// };

// const buttonDown = document.getElementById('ButtonDown');
// const buttonUp = document.getElementById('ButtonUp');
// const fontSizeUp = newFontGenerator("up");
// const fontSizeDown = newFontGenerator("down");

// buttonDown.addEventListener("click", () => {
//     body.style.fontSize = `${fontSizeDown.next().value}px`;
//     document.getElementById('CurrentFontSize').remove();
//     body.insertAdjacentHTML('beforeend', `<p id="CurrentFontSize">Current font size: ${body.style.fontSize}</p>`);
// });
// buttonUp.addEventListener("click", () => {
//     body.style.fontSize = `${fontSizeUp.next().value}px`;
//     document.getElementById('CurrentFontSize').remove();
//     body.insertAdjacentHTML('beforeend', `<p id="CurrentFontSize">Current font size: ${body.style.fontSize}</p>`);
// });

export {
    createIdGenerator,
    idGenerator
}