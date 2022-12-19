/* 
Kiek duotame (imtinai) intervale yra skaiciu,
kurie dalijasi be liekanos is duoto daliklio
*/

function rangeDivide(from, to, divider) {
    if (typeof from !== "number" || !isFinite(from)) {
        return "ERROR: pirmas parametras turi buti normalus skaicius.";
    }
    if (divider <= 0) {
        return "ERROR: trecias parametras negali but mazesnis uz 1";
    }

    let count = 0;

    for (let i = from; i <= to; i++) {
        if (i % divider === 0) {
            count++;
        }
    }
    return `Skaičių intervale tarp ${from} ir ${to} besidalijančių be liekanos iš ${divider} yra ${count} vienetai.`;
}
console.clear();

console.log(rangeDivide(0, 11, 3));
console.log(rangeDivide(0, 11, 5));
console.log(rangeDivide(0, 11, 7));

console.log(rangeDivide(8, 31, 3));
console.log(rangeDivide(8, 31, 5));
console.log(rangeDivide(8, 31, 7));

console.log(rangeDivide(-18, 18, 3));
console.log(rangeDivide(-18, 18, 5));
console.log(rangeDivide(-18, 18, 7));

// console.log(rangeDivide(NaN, 18, 7));

// function divideRange(from, to, divider) {
//     let counter = 0;
//     if (from > to) {
//         [from, to] = [to, from];
//     }
//     counter += from % divider === 0 ? 1 : 0;
//     counter += from <= 0 && to >= 0 ? 1 : 0;

//     return counter + Math.floor(Math.abs(to - from) / divider);
// }
/* 
function divideRange(from, to, divider) {
    // if (from > to) {
    //     [from, to] = [to, from];
    // // }

    let counter = 0;
    // counter += from % divider === 0 ? 1 : 0;
    // for (let i = 0; i <= Math.abs(to - from) - divider; i += divider) {
    //     counter++;
    // }
    // return counter;
    if (from <= 0 && to >= 0) {
        counter++;
    }
    return Math.floor(to / divider) - Math.floor(from / divider) + counter;
} */

function divideRange(from, to, divider) {
    if (from > to) {
        [from, to] = [to, from];
    }

    let counter = 0;

    if (from <= 0 && to >= 0) {
        counter++;
    }

    if ((to >= 0 && from >= 0) || (to <= 0 && from <= 0)) {
        return Math.floor(Math.abs(to) / divider) - Math.floor(Math.abs(from) / divider) + counter;
    } else {
        return Math.floor(Math.abs(to) / divider) + Math.floor(Math.abs(from) / divider) + counter;
    }
}

// console.log(divideRange(0, 11, 3));
// console.log(divideRange(0, 11, 5));
// console.log(divideRange(0, 11, 7));
console.log(divideRange(8, 31, 3));
// console.log(divideRange(8, 31, 5));
// console.log(divideRange(8, 31, 7));
console.log(divideRange(-18, 18, 3));
console.log(divideRange(-18, 18, 5));
console.log(divideRange(0, 5, 1));
