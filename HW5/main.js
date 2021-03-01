function getRandomArray(length, min, max){
    let randomArray = [];
    for (let i = 0; i < length; i++) {
        let randomNumber = 0;
        while(randomNumber < min) {
            randomNumber = Math.floor(Math.random() * max) + 1;
        }
        randomArray[i] = randomNumber;

    }
    return randomArray;
}
console.log(`Функция №1 : ${getRandomArray(15, 90, 100)}`);

// function getModa(...numbers){
//     let count = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         const number = numbers[i];
//         if (number % 1 === 0){
//
//         }
//     }
//     return ;
// }
// const arr = [1,2,3];
// console.log(getModa(...arr));
