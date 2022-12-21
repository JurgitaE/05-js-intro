console.clear();
/*
LOOP - ciklas

tevas -> for
vaikai (isvestiniai) -> while, for-of, for-in, foreach
next-level -> map, sort, filter, reduce, ...
*/

const marks = [10, 2, 8, 4, 6];

// FOR
let sumFor = 0;
for (let iFor = 0; iFor < marks.length; ++iFor) {
    const mark = marks[iFor];
    sumFor += mark;
}
console.log("For:", sumFor / marks.length);

// WHILE
let sumWhile = 0;
let iWhile = 0;
while (iWhile < marks.length) {
    const mark = marks[iWhile];
    sumWhile += mark;
    iWhile++;
}
console.log("While:", sumWhile / marks.length);

// FOR-OF
let sumForOf = 0;
for (const mark of marks) {
    sumForOf += mark;
}
console.log("For-of:", sumForOf / marks.length);

// FOREACH
let sumForeach1 = 0;
marks.forEach(function (mark, iForeach, list) {
    sumForeach1 += mark;
});
console.log("Foreach 1:", sumForeach1 / marks.length);

let sumForeach2 = 0;
marks.forEach((mark) => (sumForeach2 += mark));
console.log("Foreach 2:", sumForeach2 / marks.length);

let sumForeach3 = 0;
function sumavimasForeach(mark, iForeach, list) {
    return (sumForeach3 += mark);
}
marks.forEach(sumavimasForeach);
console.log("Foreach 3:", sumForeach3 / marks.length);

// FOR-IN (iteruoja per objekta)
const user = {
    name: "Petras",
    age: 99,
    isMarried: true,
    favoriteNumber: 13,
    children: 5,
    grandChildren: 25,
    key: "geltonas",
    negative: -88,
};

let sumForObj = 0;
const userKeys = Object.keys(user);
for (let i = 0; i < userKeys.length; i++) {
    const key = userKeys[i];
    const value = user[key];
    if (typeof value === "number" && isFinite(value) && value > 0) {
        sumForObj += value;
    }
}
console.log("For-in:", sumForObj, "->", 142);

let sumForIn = 0;
for (const key in user) {
    const value = user[key];
    if (typeof value === "number" && isFinite(value) && value > 0) {
        sumForIn += value;
    }
}
console.log("For-in:", sumForIn, "->", 142);
