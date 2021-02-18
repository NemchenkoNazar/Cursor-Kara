console.log("Base");
console.log("");
const beansPrise = 15.678;
const pearPrise = 123.965;
const mangoPrise = 90.2345;

console.log(`Максимальное значение = ${Math.max(beansPrise,pearPrise,mangoPrise)}`);

console.log(`Минимальное значение = ${Math.min(beansPrise,pearPrise,mangoPrise)}`);

const sumProducts = beansPrise + pearPrise + mangoPrise;
console.log(`Сумма продуктов = ${sumProducts}`);

const sumFloorProducts = Math.floor(beansPrise) + Math.floor(pearPrise) + Math.floor(mangoPrise);
console.log(`Сумма округленных вниз = ${sumFloorProducts}`);

const sumRoundToHundredProducts = Math.round(sumProducts / 100) * 100;
console.log(`Сумма округленная к сотням = ${sumRoundToHundredProducts}`);

console.log(`Число является ${sumFloorProducts % 2 ? 'непарным' : 'парным'}`);

const moneyClient = 500;
console.log(`Сдача = ${moneyClient - sumProducts}`);

console.log(`Среднее арифметическое = ${Math.round((sumProducts/3)*100)/100}`);

const discount = Math.ceil(Math.random() * 100);
console.log(`Скидка ${discount +" %"}`);
const sumDiscount = (sumProducts * discount) / 100;
console.log(`Сумма со скидкой = ${Math.round((sumProducts - sumDiscount) *100) / 100}`);
const expectedMinIncome = Math.round(sumProducts) / 2;
const realIncome = expectedMinIncome - sumDiscount;
console.log(`Реальный доход = ${Math.round(realIncome)}`);

console.log("");
console.log("Advanced");
console.log("");

console.log(`Максимальное значение = ${Math.max(beansPrise,pearPrise,mangoPrise)}
Минимальное значение = ${Math.min(beansPrise,pearPrise,mangoPrise)}
Сумма продуктов = ${sumProducts}
Сумма округленных вниз = ${sumFloorProducts}
Сумма округленная к сотням = ${sumRoundToHundredProducts}
Число является ${sumFloorProducts % 2 ? 'непарным' : 'парным'}
Сдача = ${moneyClient - sumProducts}
Среднее арифметическое = ${Math.round((sumProducts/3)*100)/100}
Скидка ${discount +" %"}
Сумма со скидкой = ${Math.round((sumProducts - sumDiscount) *100) / 100}
Реальный доход = ${Math.round(realIncome)}
`);
