function createIdGenerator (){
    let value = 1;
    return {
        next: function (){
            let res;
            res = {value: value, done: false}
            value++;
            return res;
        }
    }

}

const idGenerator = createIdGenerator();
console.log (idGenerator.next().value)
console.log (idGenerator.next().value)
console.log (idGenerator.next().value)
console.log ('simple generator end')

function newFontGenerator (fz){
    console.log (fz);
    return {
        up: function (){
            let res;
            fz++;
            res = {value: fz, done: false}

            return res;
        },
        down: function (){
            let res;
            fz--;
            res = {value: fz, done: false}
            return res;
        },

    }
}

const fontGenerator = newFontGenerator(14);
const buttonUp = document.querySelector ("#up")
buttonUp.addEventListener ('click', function(){
    const fzGenerator = fontGenerator.up().value
    console.log (fzGenerator)
    const text = document.querySelector ("#text");
    text.style.fontSize = fzGenerator +'px';
})
const buttonDown = document.querySelector ("#down")
buttonDown.addEventListener ('click', function(){
    console.log (fontGenerator.down().value)
    const fzGenerator = fontGenerator.down().value
    console.log (fzGenerator)
    const text = document.querySelector ("#text");
    text.style.fontSize = fzGenerator +'px';
})