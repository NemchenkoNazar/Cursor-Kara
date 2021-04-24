class Student {
    constructor(university, course, fullName, arrMarks = [], disable = false) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.arrMarks = arrMarks;
        this.disable = disable;
    }
    get getInfo(){
        return `Стундент ${this.course}-го курсу ${this.university}, ${this.fullName}`;
    }
    get getMarks() {
        if (!this.disable) {
            return this.arrMarks
        } else return null
    }
    setMarks(mark) {
        if (!this.dismiss) {
            this.arrMarks = this.arrMarks.concat(mark)
            return this.arrMarks
        } else return null
    }

    get getAverageMark() {
        let sum = 0;
        let averageMark = 0;
        this.arrMarks.forEach((mark) => {
            sum += mark
        })
        averageMark = sum / this.arrMarks.length
        return averageMark.toFixed(3)
    }

    setDismiss() {
        this.dismiss = true
        return this.dismiss
    }

    recover() {
        this.dismiss = false
        return this.dismiss
    }
}

const nazar = new Student('КНЕУ', 7, 'Ворона Богдан');
console.log(nazar.getInfo);
nazar.setDismiss();
nazar.recover();
nazar.setMarks(4);
nazar.setMarks(4);
nazar.setMarks(5);
console.log(nazar.getMarks);
console.log(nazar.getAverageMark);

class BudgetStudent extends Student{
    constructor(university, course, fullName, arrMarks, disable = false, budget = false, getScholarship ) {
        super(university, course, fullName, arrMarks, disable);
        this.budget = budget;
        this.getScholarship = getScholarship;
        setInterval(() => {
            console.log(this.setGrant(this.getScholarship));
        },30000);
    }
    setGrant(scholarship){
        if(!this.disable){
            if ((this.budget) && (this.getAverageMark >= 4)) {
                this.getScholarship = scholarship;
                return `Ви отримали ${this.getScholarship} грн. стипендії`;
            } else return `З балом ${this.getAverageMark}, ви не можете отримувати стипендію!`
        }else return `Вас виключено!`;
    }
}
const superStudent = new BudgetStudent('ДНУ', 6, 'Немченко Назар',[5,5,5],false, true);
console.log(superStudent.getInfo);
console.log(superStudent.getAverageMark);
console.log(superStudent.setGrant(1400));


