const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

function getPairs(students) {
    const studentsBoys = [students[0], students[1], students[4]];
    const studentsGirls = [students[2], students[3], students[5], students[4]];
    let arrayPairs = [];
    for(let i = 0; i < students.length / 2; i++) {
        arrayPairs[i] = [studentsBoys[i], studentsGirls[i]];
    }
    return arrayPairs;
}
const pairs = getPairs(students);

function getThemes(pairs, themes) {
    let arrayThemes = [];
    for(let i = 0; i < themes.length; i++) {
        arrayThemes[i] = [pairs[i].join(" і "), themes[i]];
    }
    return arrayThemes;
}
const studentsThemes = getThemes(pairs, themes);

function getMarks(students, marks) {
    let arrayMarks = [];
    for(let i = 0; i < students.length && i < marks.length; i++) {
        arrayMarks[i] = [students[i], marks[i]];
    }
    return arrayMarks;
}
const studentsMarks = getMarks(students, marks);

function getPairMarks(studentsThemes) {
    const possibleMarks = [1, 2, 3, 4, 5];
    let arrayPairMarks = [];
    for(let i = 0; i < studentsThemes.length; i++) {
        arrayPairMarks[i] = studentsThemes[i].concat(possibleMarks[Math.floor(Math.random()*possibleMarks.length)]);
    }
    return arrayPairMarks;
}
const studentPairsMarks = getPairMarks(studentsThemes);

export {
    pairs,
    studentsThemes,
    studentsMarks,
    studentPairsMarks
};