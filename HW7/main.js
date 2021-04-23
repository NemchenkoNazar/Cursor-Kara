const ukraine = {
    tax: 0.195,
    middleSalary: 1789,
    vacancies: 11476 };
const latvia = {
    tax: 0.25,
    middleSalary: 1586,
    vacancies: 3921 };
const litva = {
    tax: 0.15,
    middleSalary: 1509,
    vacancies: 1114 };

// #1
function getMyTaxes (salary) {
    return this.tax * salary;
}
console.log('Сумма налога:', getMyTaxes.call(latvia, 15000));

// #2
function getMiddleTaxes () {
    return this.tax * this.middleSalary;
}
console.log('Средний налог для ИТ-специалистов в Украине :', getMiddleTaxes.call(ukraine));
console.log('Средний налог для ИТ-специалистов в Латвии :',getMiddleTaxes.call(latvia));
console.log('Средний налог для ИТ-специалистов в Литве :',getMiddleTaxes.call(litva));

// #3
function getTotalTaxes () {
    return this.tax * this.middleSalary * this.vacancies;
}
console.log('Сумма налогов для ИТ-специалистов в Украине :', getTotalTaxes.call(ukraine));
console.log('Сумма налогов для ИТ-специалистов в Латвии :',getTotalTaxes.call(latvia));
console.log('Сумма налогов для ИТ-специалистов в Литве :',getTotalTaxes.call(litva));

// #4
function getMySalary() {
    const minSalary = 1500;
    const maxSalary = 2000;
    const salary = Math.round(Math.random() * (maxSalary - minSalary)) + minSalary;
    const taxes = +(this.tax * salary).toFixed(2);
    const profit = salary - taxes;
    setInterval(() => {
        console.log( { salary, taxes, profit } );
    }, 10000)
}
getMySalary.call(ukraine);
getMySalary.call(latvia);
getMySalary.call(litva);