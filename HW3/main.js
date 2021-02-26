function getMaxDigit(number){
    number = String(number);
    let maxDigit = 0;
    for (let i = 0; i < number.length; i++) {
        if(maxDigit < number[i]){
            maxDigit = number[i];
        }
    }
    return maxDigit;
}

function numberDegree(number, degree) {
    let result = number;
    if (degree === 1) {
        result = number;
    } else {
        for (let i = 1; i < degree; i++) {
            result = number * result;
        }
    }
    return result;
}


function upperName(name) {
    name = String(name);
    return name[0].toUpperCase() + name.slice(1).toLowerCase();
}

function sumAfterTax (NDS, military, salary){
    const allTax = NDS + military;
    const sumTax = (salary * allTax) / 100;
    return salary - sumTax;
}

function randomNumber(firstNumber, finishNumber){
    return Math.floor(Math.random()*(finishNumber - firstNumber + 1) )+ firstNumber;
}

function countLetter(letter, word) {
    word = word.toLowerCase();
    let count = 0;
    for (let i = 0; i < word.length; i++) {
        if (word[i] === letter)
            count++;
    }
    return count;
}

console.log(`Функция №1 => ${getMaxDigit(125472)}`);
console.log(`Функция №2 => ${numberDegree(2, 5)}`);
console.log(`Функция №3 => ${upperName("aUditoRE")}`);
console.log(`Функция №4 => ${sumAfterTax(18, 1.5, 1000)}`);
console.log(`Функция №5 => ${randomNumber(2,10)}`);
console.log(`Функция №6 => ${countLetter("a", "Ananas")}`);