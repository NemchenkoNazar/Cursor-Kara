export function hw2Result() {
    alert('Програма для складання чисел: від числа "N" до числа "M", з можливістю пропускати парні числа.')
    let numberN = +prompt("Введіть, будь ласка, перше значення(має бути цілим числом).");
    let numberM = +prompt("Введіть, будь ласка, друге значення(має бути цілим числом).");
    if(Number.isInteger(numberN) && Number.isInteger(numberM)) {
        let sum = 0;
        let questionEven = confirm("Чи бажаєте пропускати парні числа в обрахунках?");
        if(questionEven) {
            for(let i = numberN; i <= numberM; i++){
                if(i % 2 != 0) {
                    sum += i;
                }
            }
            return `<p>Сума від ${numberN} до ${numberM}: ${sum}</p>`;
        } else {
            for(let i = numberN; i <= numberM; i++){
                sum += i;
            }
            return `<p>Сума від ${numberN} до ${numberM}: ${sum}</p>`;
        }
    } else {    
    alert("Помилка. Введені значення не є цілими, або не є числом.");
    document.location.reload();
    }
};
