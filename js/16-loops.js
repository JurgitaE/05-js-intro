console.clear();
/* 
LOOP-ciklas

tevas -> for
vaikai(isvestiniai) -> while, for-of, for-in, foreach
next-level -> map, sort, filter, reduce...
 */

const marks = [10, 2, 8, 4, 6];

// FOR
let sumFor = 0;
for (let iFor = 0; iFor < marks.length; iFor++) {
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
console.log("While", sumWhile / marks.length);

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
console.log("Foreach 1: ", sumForeach1 / marks.length);

let sumForeach2 = 0;
marks.forEach((mark) => (sumForeach2 += mark));
console.log("Foreach 2: ", sumForeach2 / marks.length);

function sumavimasForeach(mark, iForeach, list) {
    return (sumForeach3 += mark);
}

let sumForeach3 = 0;
marks.forEach(sumavimasForeach);
console.log("Foreach 3: ", sumForeach3 / marks.length);
