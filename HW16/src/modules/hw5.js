// Створіть функцію getAverage(...numbers) – яка рахує середнє арифметичне всіх переданих в неї аргументів.
function callbackIsInteger(number) {
    if(Number.isInteger(number)) {
        return number
    }
}
function callbackGetAverage(accumulator, currentNumber) {
    if(Number.isInteger(currentNumber)) {
        return accumulator + currentNumber;
    } else {
        return accumulator;
    }
}
function getAverage(...numbers) {
    const integerNumbers = numbers.filter(callbackIsInteger);
    return numbers.reduce(callbackGetAverage, 0) / integerNumbers.length;
}
getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2);

//Створіть функцію filterEvenNumbers(...numbers) – яка фільтрує парні числа передані як аргументи функції.
function callbackEvenNumbers(number) {
    return number % 2 !== 0;
}
function filterEvenNumbers(...numbers) {
    return numbers.filter(callbackEvenNumbers);
}
filterEvenNumbers(1, 2, 3, 4, 5, 6);

//Створіть функцію countPositiveNumbers(...numbers) – яка порахує кількість чисел більших 0.
function callbackPositiveNumbers(number) {
    return number > 0
}
function countPositiveNumbers(...numbers) {
    const positiveNumbers = numbers.filter(callbackPositiveNumbers);
    return positiveNumbers.length;
}
countPositiveNumbers(1, -2, 3, -4, -5, 6);

//Створіть функцію getDividedByFive(...numbers) – яка відфільтрує усі елементи в масиві та залишить тільки ті, які діляться на ціло на 5.
function callbackDividedByFive(number) {
    return number % 5 === 0;
}
function getDividedByFive(...numbers) {
    return numbers.filter(callbackDividedByFive);
}
getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2);

// Створіть функцію replaceBadWords(string) – яка 1) розіб'є фразу на слова, 2) замінить погані слова на зірочки (*).
function callbackBadWords(word) {
    const badWords = ['fuck', 'shit']
    return word.split(badWords[0]).join('****').split(badWords[1]).join('****');
}
function replaceBadWords(string = "Are you fucking kidding? Holy shit! It's bullshit!") {
    const words = string.split(' ');
    return words.map(callbackBadWords).join(' ');
}
replaceBadWords();

//Створіть функцію divideByThree(word), яка розбиває кожне слово на умовні склади по 3 букви.
function divideByThree(word = "Commander") {
    const wordWithotSpaces = word.split(' ').join('')
    let wordDivideByThree = [];
    for (let i = 0; i < wordWithotSpaces.length; i += 3) {
        wordDivideByThree.push(wordWithotSpaces.toLowerCase().substring(i, i+3));
    }
    return wordDivideByThree;
}
divideByThree();

export {
    getAverage,
    filterEvenNumbers,
    countPositiveNumbers,
    getDividedByFive,
    replaceBadWords,
    divideByThree
}