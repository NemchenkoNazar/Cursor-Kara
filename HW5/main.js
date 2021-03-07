function getRandomArray(length = 0, min = 0, max = 0) {
    if (Number.isInteger(length) && length >= 0 && Number.isInteger(min) && Number.isInteger(max)) {
        let randomArray = [];
        for (let i = 0; i < length; i++) {
            let randomNumber = 0;
            while(randomNumber < min) {
                randomNumber = Math.floor(Math.random() * max) + 1;
            }
            randomArray.push(randomNumber);
        }
        return randomArray;
    } else {
        console.log(`Ошибка, введите целые числа!`)
    }
}
console.log(`Функция №1 : ${getRandomArray(15, 90, 100) }`);

function getAverage(...numbers){
    const newArr = numbers.filter(number => Number.isInteger(number));
    return Number(newArr.reduce((accumulator,number) => accumulator + number / newArr.length,0).toFixed(2));
}
const arr = [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2];
const result = getAverage(...arr);
console.log(`Функция №3 : ${result}`);

function getMedian(...numbers) {
    const newArr = numbers.filter(number => Number.isInteger(number));
    newArr.sort((a, b) => a - b);
    const minMedian = Math.floor( (newArr.length - 1) / 2);
    const maxMedian = Math.ceil( (newArr.length - 1) / 2);
    return ( newArr[minMedian] + newArr[maxMedian]) / 2;
}
const median = getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2);
console.log(`Функция №4 : ${median}`);

function filterEvenNumbers(...numbers) {
    return numbers.filter(number => number % 2 && Number.isInteger(number));
}
const oddNumbers = filterEvenNumbers(33, 24, "тест1", -8, -1, 5.45, 4,"тест2", 6, 11, "65");
console.log(`Функция №5 : ${oddNumbers}`);

function countPositiveNumbers(...numbers) {
    return numbers.filter(number => number > 0 && typeof number === 'number').length;
}
const countPositive = countPositiveNumbers(0, 1, -2, 3, -4, -5, 6, 7, '8', 9.99, "тест1");
console.log(`Функция №6 : ${countPositive}`);

function getDividedByFive(...numbers) {
    return numbers.filter(number => number % 5 === 0 && Number.isInteger(number));
}
const dividedByFive = getDividedByFive(6, 2, 55, 100, 78, 2.44, 55, "5", 77, 57, 87, 23, 20.5, 56, 3, 2, "тест1");
console.log(`Функция №7 : ${dividedByFive}`);