let firstNumber = parseInt(prompt("Введите первое число: "));
while (firstNumber % 1 !== 0){
    firstNumber = parseInt(prompt("Неверно! Вам нужно ввести целое число: "));
}

let secondNumber = parseInt(prompt("Введите второе число: "));
while (secondNumber % 1 !== 0){
    secondNumber = parseInt(prompt("Неверно! Вам нужно ввести целое число: "));
}

while ( firstNumber >= secondNumber){
    secondNumber = parseInt(prompt("Второе число должно быть больше первого: "));
}

const withEven = confirm("Учитывать четные числа?");

let sumNumber = 0;
for (firstNumber; firstNumber <= secondNumber; firstNumber++) {
    if (withEven) {
        sumNumber += firstNumber;
    } else {
        if (firstNumber % 2 !== 0) {
            sumNumber += firstNumber;
        }
    }
}

if (withEven){
    console.log(`Сумма всех чисел в диапазоне = ${sumNumber}`);
} else {
    console.log(`Сумма всех непарных чисел в диапазоне = ${sumNumber}`);
}

