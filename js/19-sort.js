console.clear();
/*
SORT - rikiavimas
jei lyginamos reiksmes yra (pirma uz antra):
    - mazesne (-1)
    - lygios (0)
    - didesne (1)
*/

const dic = ["Petras", "Maryte", "Jonas", "Ona"];

const dicAZ = [...dic].sort();
const dicZA = [...dic].sort().reverse();

console.log(dic);
console.log(dicAZ);
console.log(dicZA);

const num = [10, 2, 8, 1, 4, 15, 6, 23, 45];

const numAZ = [...num].sort((a, b) => a - b);
const numZA = [...num].sort((a, b) => b - a);
const numAZreverse = [...num].sort((a, b) => a - b).reverse();

console.log(num);
console.log(numAZ);
console.log(numZA);
console.log(numAZreverse);

const students = [
    { name: "Petras", age: 99, isMarried: true },
    { name: "Maryte", age: 88, isMarried: false },
    { name: "Jonas", age: 77, isMarried: false },
    { name: "Ona", age: 66, isMarried: true },
    { name: "Simon", age: 7, isMarried: false },
    { name: "Itoleta", age: 17, isMarried: true },
    { name: "Alas", age: 47, isMarried: true },
    { name: "Eliza", age: 2, isMarried: false },
];

const studentsAgeAZ = [...students].sort((a, b) => a.age - b.age);
const studentsAgeZA = [...students].sort((a, b) => b.age - a.age);
console.log(studentsAgeAZ);
console.log(studentsAgeZA);

const studentsNameAZ = [...students].sort((a, b) => (a.name < b.name ? -1 : a.name === b.name ? 0 : 1));

console.log(studentsNameAZ);

function compareStudents(a, b) {
    if (a.name < b.name) {
        return -1;
    }
    if (a.name === b.name) {
        return 0;
    }
    return 1;
}

const studentsNameAZfunc = [...students].sort(compareStudents);
console.log(studentsNameAZfunc);
