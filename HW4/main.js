const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

function getPairs(allStudents){
    const studentsBoys = [allStudents[0],allStudents[1],allStudents[4]];
    const studentsGirls = [allStudents[2],allStudents[3],allStudents[5]];
    let studentsPairs = [];

    for (let i = 0; i < studentsBoys.length; i++) {
        studentsPairs[i] = [studentsBoys[i],studentsGirls[i]];
    }

    return studentsPairs;
}

function getThemes(pairs,themes){
    const studentsPairsThemes = [];
    for (let i = 0; i < pairs.length; i++) {
        const pair = pairs[i];
        studentsPairsThemes[i] = pair[0] + " и " + pair[1];
    }
    for (let i = 0; i < studentsPairsThemes.length; i++) {
        studentsPairsThemes[i] = [studentsPairsThemes[i],themes[i]];
    }
    return studentsPairsThemes;
}

function getMarks(students,marks){
    let studentsMarks =[];
    for (let i = 0; i < students.length; i++) {
        studentsMarks[i] = [students[i],marks[i]];
    }
    return studentsMarks;
}

function getMarksPairs(pairs){
    let pairsMarks = [];
    for (let i = 0; i < pairs.length; i++) {
        let mark = Math.floor(Math.random() * 5) + 1;
        pairsMarks[i] = [pairs[i], mark];
    }
    return pairsMarks;
}

const pairs = getPairs(students);
console.log(pairs);
const themesForPairs = getThemes(pairs,themes);
console.log(themesForPairs);
const marksForStudents = getMarks(students,marks);
console.log(marksForStudents);
const marksForPairs = getMarksPairs(themesForPairs)
console.log(marksForPairs);

console.log(students);
console.log(themes);
console.log(marks);







