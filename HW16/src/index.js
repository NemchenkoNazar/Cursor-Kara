import {maxPrice, minPrice, guitarsPrice, roundedGuitarsPrice, roundedToHundredGuitarsPrice, oddEven, customerChange, averageGuitarsPrice, discountPercentage, discountPrice, cost, profit} from './modules/hw1.js';
import {hw2Result} from './modules/hw2.js';
import {formatName, countTax, countLetter, convertCurrency, generatePassword, deleteLetters} from './modules/hw3.js';
import {pairs, studentsThemes, studentsMarks, studentPairsMarks} from './modules/hw4.js';
import {getAverage, filterEvenNumbers, countPositiveNumbers, getDividedByFive, replaceBadWords, divideByThree} from './modules/hw5.js';
import {students, getSubjects, getAverageMark, getStudentInfo, getStudentsNames, getBestStudent, calculateWordLetters} from './modules/hw6.js';
import {ukraine, latvia, litva, getMyTaxes, getMiddleTaxes, getTotalTaxes} from './modules/hw7.js';
import {student} from './modules/hw8.js';
import {generateButton, changeButton, generateBlocks, generateBlocksInterval} from './modules/hw10.js';
import {playSound, clickPlaySound, removeTransition, keys} from './modules/hw11.js';
import {getRandomChinese} from './modules/hw12.js';
import {getPlanetsButton, getPlanets} from './modules/hw13.js';
import {idGenerator} from './modules/hw15.js';
import Bells_1 from './assets/sounds/Bells1.mp3'
import Bells_2 from './assets/sounds/Bells2.mp3'
import Bells_3 from './assets/sounds/Bells3.mp3'
import Bells_4 from './assets/sounds/Bells4.mp3'
import Bells_5 from './assets/sounds/Bells5.mp3'
import Bells_6 from './assets/sounds/Bells6.mp3'
import Bells_7 from './assets/sounds/Bells7.mp3'
import Bells_8 from './assets/sounds/Bells8.mp3'
import Icon from './assets/images/Webpack_Icon.png'
import './css/modules styles/hw10.css'
import './css/modules styles/hw11.css'
import './css/modules styles/hw13.css'
import './css/style.css';

const head = document.querySelector('head');
head.insertAdjacentHTML('afterbegin', `<link rel="shortcut icon" type="image/png" href="${Icon}"></link>`);

window.onload = function() {
    let preloader = document.getElementById('preloader');
    preloader.classList.add('hide-preloader');
    setInterval(function() {
        preloader.classList.add('preloader-hidden');
    }, 990);
}

const section1 = document.getElementById('hw1');
section1.insertAdjacentHTML('beforeend', `<p>Максимальна ціна: ${maxPrice}</p>`);
section1.insertAdjacentHTML('beforeend', `<p>Мінімальна ціна: ${minPrice}</p>`);
section1.insertAdjacentHTML('beforeend', `<p>Загальна вартість: ${guitarsPrice}</p>`);
section1.insertAdjacentHTML('beforeend', `<p>Округлена ціна: ${roundedGuitarsPrice}</p>`);
section1.insertAdjacentHTML('beforeend', `<p>Округлена до сотень ціна: ${roundedToHundredGuitarsPrice}</p>`);
section1.insertAdjacentHTML('beforeend', `<p>${oddEven(roundedGuitarsPrice)}</p>`);
section1.insertAdjacentHTML('beforeend', `<p>Решта з 500грн: ${customerChange}</p>`);
section1.insertAdjacentHTML('beforeend', `<p>Середня ціна: ${averageGuitarsPrice}</p>`);
section1.insertAdjacentHTML('beforeend', `<p>Знижка: ${discountPercentage} %</p>`);
section1.insertAdjacentHTML('beforeend', `<p>Ціна зі знижкою: ${discountPrice}</p>`);
section1.insertAdjacentHTML('beforeend', `<p>Собівартість: ${cost}</p>`);
section1.insertAdjacentHTML('beforeend', `<p>Чистий прибуток: ${profit}</p>`);

const section2 = document.getElementById('hw2');
section2.insertAdjacentHTML('beforeend', `${hw2Result()}`);

const section3 = document.getElementById('hw3');
section3.insertAdjacentHTML('beforeend', `<p>Функція, яка форматує ім'я, роблячи першу букву великою: ${formatName()}</p>`);
section3.insertAdjacentHTML('beforeend', `<p>Функція, яка вираховує суму, що залишається після оплати податку від зарабітньої плати: ${countTax()}</p>`);
section3.insertAdjacentHTML('beforeend', `<p>Функція, яка рахує скільки разів певна буква повторюється в слові: ${countLetter()}</p>`);
section3.insertAdjacentHTML('beforeend', `<p>Функція, яка конвертує долари в гривні та навпаки в залежності від наявності символа $ або UAH в рядку: ${convertCurrency()}</p>`);
section3.insertAdjacentHTML('beforeend', `<p>Функція генерації випадкового паролю (тільки числа), довжина встановлюється користувачем або по замовчуванню = 8 символам: ${generatePassword()}</p>`);
section3.insertAdjacentHTML('beforeend', `<p>Функція, яка видаляє всі букви з речення: ${deleteLetters()}</p>`);

const section4 = document.getElementById('hw4');
function callbackArrayPairs(pairs) {
    const result = `Student pair: ${pairs}`;
    const newResult = result.split(',').join(', ');
    section4.insertAdjacentHTML('beforeend', `<p>${newResult}</p>`);
}
pairs.map(callbackArrayPairs);
function callbackArrayThemes(theme) {
    const result = `Students theme: ${theme}`;
    const newResult = result.split(',').join(', ');
    section4.insertAdjacentHTML('beforeend', `<p>${newResult}</p>`);
}
studentsThemes.map(callbackArrayThemes);
function callbackArrayMarks(mark) {
    const result = `Student mark: ${mark}`;
    const newResult = result.split(',').join(', ');
    section4.insertAdjacentHTML('beforeend', `<p>${newResult}</p>`);
}
studentsMarks.map(callbackArrayMarks);
function callbackArrayPairsMarks(mark) {
    const result = `Student pair mark: ${mark}`;
    const newResult = result.split(',').join(', ');
    section4.insertAdjacentHTML('beforeend', `<p>${newResult}</p>`);
}
studentPairsMarks.map(callbackArrayPairsMarks);

const section5 = document.getElementById('hw5');
section5.insertAdjacentHTML('beforeend', `<p>Average value of all arguments: ${getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)}</p>`);
section5.insertAdjacentHTML('beforeend', `<p>Filtered even numbers passed as arguments: ${filterEvenNumbers(1, 2, 3, 4, 5, 6)}</p>`);
section5.insertAdjacentHTML('beforeend', `<p>Counts numbers greater than 0: ${countPositiveNumbers(1, -2, 3, -4, -5, 6)}</p>`);
section5.insertAdjacentHTML('beforeend', `<p>Filtered all elements in the array and leaves only those that are divisible by 5: ${getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)}</p>`);
section5.insertAdjacentHTML('beforeend', `<p>Filtered obscene speech: ${replaceBadWords()}</p>`);
section5.insertAdjacentHTML('beforeend', `<p>Divided each word into conditional syllables of 3 letters: ${divideByThree()}</p>`);

const section6 = document.getElementById('hw6');
section6.insertAdjacentHTML('beforeend', `<p>Student ${students[0].name} subjects: ${getSubjects()}</p>`);
section6.insertAdjacentHTML('beforeend', `<p>Student ${students[0].name} average mark: ${getAverageMark()}</p>`);
section6.insertAdjacentHTML('beforeend', `<p>Student ${students[0].name} info: name - ${getStudentInfo().name}, course - ${getStudentInfo().course}, average mark - ${getStudentInfo().averageMark}</p>`);
section6.insertAdjacentHTML('beforeend', `<p>Student names in alphabetical order: ${getStudentsNames()}</p>`);
section6.insertAdjacentHTML('beforeend', `<p>Student with the highest average mark: ${getBestStudent()}</p>`);
function callbackLetters(item) {
    return `${item[0]} : ${item[1]}`
}
section6.insertAdjacentHTML('beforeend', `<p>Function that counts a number of identical letters in a word: ${Object.entries(calculateWordLetters()).map(callbackLetters)}</p>`);

const section7 = document.getElementById('hw7');
section7.insertAdjacentHTML('beforeend', `<p>Amount of taxes: ${getMyTaxes.call(ukraine, 3000)}</p>`);
section7.insertAdjacentHTML('beforeend', `<p>Average amount of taxes in Ukraine: ${getMiddleTaxes.call(ukraine)}</p>`);
section7.insertAdjacentHTML('beforeend', `<p>Average amount of taxes in Latvia: ${getMiddleTaxes.call(latvia)}</p>`);
section7.insertAdjacentHTML('beforeend', `<p>Average amount of taxes in Litva: ${getMiddleTaxes.call(litva)}</p>`);
section7.insertAdjacentHTML('beforeend', `<p>Total amount of taxes in Ukraine: ${getTotalTaxes.call(ukraine)}</p>`);
section7.insertAdjacentHTML('beforeend', `<p>Total amount of taxes in Latvia: ${getTotalTaxes.call(latvia)}</p>`);
section7.insertAdjacentHTML('beforeend', `<p>Total amount of taxes in Litva: ${getTotalTaxes.call(litva)}</p>`);

const section8 = document.getElementById('hw8');
section8.insertAdjacentHTML('beforeend', `<p>Інформація про студента: ${student.getInfo()}</p>`);
section8.insertAdjacentHTML('beforeend', `<p>Початкові оцінки студента: ${student.marks}</p>`);
student.setMarks = 5;
section8.insertAdjacentHTML('beforeend', `<p>Оцінки студента після поставленої 5ки: ${student.marks}</p>`);
section8.insertAdjacentHTML('beforeend', `<p>Середній бал студента: ${student.getAverageMark().toFixed(2)}</p>`);
student.dismiss();
student.setMarks = 2;
section8.insertAdjacentHTML('beforeend', `<p>Оцінки студента після відрахування: ${student.marks}</p>`);
student.recover();
student.setMarks = 4;
section8.insertAdjacentHTML('beforeend', `<p>Оцінки студента після відновлення та виставленої 4ки: ${student.marks}</p>`);

generateButton.addEventListener('click', generateBlocks);
changeButton.addEventListener('click', generateBlocksInterval);

const section11 = document.getElementById('hw11');
section11.insertAdjacentHTML('beforeend', `<audio data-key="67" src=${Bells_1}></audio>`);
section11.insertAdjacentHTML('beforeend', `<audio data-key="72" src=${Bells_2}></audio>`);
section11.insertAdjacentHTML('beforeend', `<audio data-key="82" src=${Bells_3}></audio>`);
section11.insertAdjacentHTML('beforeend', `<audio data-key="73" src=${Bells_4}></audio>`);
section11.insertAdjacentHTML('beforeend', `<audio data-key="83" src=${Bells_5}></audio>`);
section11.insertAdjacentHTML('beforeend', `<audio data-key="84" src=${Bells_6}></audio>`);
section11.insertAdjacentHTML('beforeend', `<audio data-key="77" src=${Bells_7}></audio>`);
section11.insertAdjacentHTML('beforeend', `<audio data-key="65" src=${Bells_8}></audio>`);
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
keys.forEach(key => key.addEventListener('click', clickPlaySound));

const section12 = document.getElementById('hw12');
getRandomChinese(4).then((result)=>{
    section12.insertAdjacentHTML('beforeend', `<p>${result}</p>`);
});

getPlanetsButton.addEventListener('click', getPlanets);

const section15 = document.getElementById('hw15');
section15.insertAdjacentHTML('beforeend', `<p>ID generator: ${idGenerator.next().value}</p>`);
section15.insertAdjacentHTML('beforeend', `<p>ID generator: ${idGenerator.next().value}</p>`);
section15.insertAdjacentHTML('beforeend', `<p>ID generator: ${idGenerator.next().value}</p>`);
section15.insertAdjacentHTML('beforeend', `<p>ID generator: ${idGenerator.next().value}</p>`);
section15.insertAdjacentHTML('beforeend', `<p>ID generator: ${idGenerator.next().value}</p>`);