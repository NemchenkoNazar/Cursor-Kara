//Створити функцію, яка форматує ім'я, роблячи першу букву великою.
function formatName(stringName = "viAchesLav") {
    return stringName[0].toUpperCase() + stringName.slice(1).toLowerCase();
}

//Створити функцію, яка вираховує суму, що залишається після оплати податку від зарабітньої плати.
function countTax(stringSalary = "1000") {
    const taxPercentage = 19.5;
    const tax = parseInt(stringSalary) * (taxPercentage / 100);
    const salaryAfterTaxes = (parseInt(stringSalary) - tax).toFixed(2);
    return salaryAfterTaxes;
}

//Створити функцію, яка рахує скільки разів певна буква повторюється в слові.
function countLetter(charNeeded = "а", stringRepeat = "Урбанізація") {
    let charCounterRepeat = 0;
    for (let i = 0; i < stringRepeat.length; i++) {
        if(charNeeded === stringRepeat.charAt(i).toLowerCase(i)) {
            charCounterRepeat++;
        }
    }
    return charCounterRepeat;
}

// Створіть функцію, яка конвертує долари в гривні та навпаки в залежності від наявності символа $ або UAH в рядку.
function convertCurrency(stringCurrency = "100$") {
    const currencyUsd = 27.85;
    const caseСurrency = stringCurrency.toLowerCase();
    if (caseСurrency.includes("uah")) {
        return (parseInt(stringCurrency) / currencyUsd).toFixed(2) + "$";
    } else if (caseСurrency.includes("$")) {
        return (parseInt(stringCurrency) * currencyUsd).toFixed(2) + "грн";
    } else {
        return "Помилка, необхідно ввести коректну валюту: $ або UAH";
    }
}

//Створіть функцію генерації випадкового паролю (тільки числа), довжина встановлюється користувачем або по замовчуванню = 8 символам.
function generatePassword(numberOfChars = 8) {
    let newPassword = "";
    for (let i = 0; i < numberOfChars; i++) {
        newPassword += Math.floor(Math.random() * 10)
    }
    return newPassword;
}

//Створіть функцію, яка видаляє всі букви з речення.
function deleteLetters(letterNeeded = "a", stringSentence = "blablabla") {
    let newSentence = stringSentence.split(letterNeeded).join("");
    return newSentence;
}

export {
    formatName,
    countTax,
    countLetter,
    convertCurrency,
    generatePassword,
    deleteLetters
}