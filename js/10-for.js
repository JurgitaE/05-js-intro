console.clear();
/* 
FOR - ciklas (en. loop)
kartojame norima logika N kartu arba iki kol reikia (reikalinga patikrinimo salyga)

for() {
    logika, kuria reikia kartoti N kartu
}
*/

// isspausdinti skaicius nuo 0 iki 5

for (let i = 0; i <= 5; i++) {
    console.log("dirbu...", i);
}

// isspausdinti skaicius nuo 5 iki 10
for (let i = 5; i <= 10; i++) {
    console.log("skaicius:", i);
}
// isspausdinti skaicius nuo -10 iki -5
for (let i = -10; i <= -5; i++) {
    console.log("skaicius:", i);
}
// isspausdinti skaicius nuo 10 iki 5
for (let i = 10; i >= 5; i--) {
    console.log("skaicius:", i);
}

console.clear();

const marks = [10, 2, 8, 4, 6, 10];

let sum = 0;
let count = marks.length;

for (let i = 0; i < count; i++) {
    sum += marks[i];
}

const average = sum / count;
console.log("Pazymiu vidurkis: ", average);
console.log("------------");
const maryte = [9, 7, 5, 10];

const student1 = {
    name: "Jonas",
    marks: [2, 4, 6],
};
const student2 = {
    name: "Ona",
    marks: [4, 6, 8, 10],
};
const student3 = {
    name: "Aloyzas",
    marks: [6, 8, 10, 7, 3],
};
const student4 = {
    name: "Marijona",
    marks: [],
};
const vidurkis1 = 0;
const vidurkis2 = 0;
const vidurkis3 = 0;

function marksAverage(student) {
    let sum = 0;

    for (let i = 0; i < student.marks.length; i++) {
        sum += student.marks[i];
    }
    const average = sum / student.marks.length;

    return `${student.name} vidurkis: ${average}`;
}
console.log(marksAverage(student1));
console.log(marksAverage(student2));
console.log(marksAverage(student3));
console.log(marksAverage(student4));

console.log("--------------");

const currency = "EUR";
const prekes = [
    {
        name: "Bananas",
        price: 2,
        inStock: 10,
    },
    {
        name: "Agurkas",
        price: 3,
        inStock: 10,
    },
    {
        name: "Pomidoras",
        price: 1.57,
        inStock: 30,
    },
];

console.log("MUSU PARDUOTUVE:");
console.log("-----------");

console.log("-----------");
console.log(`Viso asortimento kaina: 97.10`);
