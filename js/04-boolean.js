/* 
BOOLEAN (logine reiksme)
true (number -> 1)
false (number -> 0)
*/

const isSnowing = true;
const isRaining = false;

console.log("Ar sninga?", isSnowing);
console.log("Ar lyja", isRaining);

// Idomesni atvejai

const luckyNumber = 13;
const luckySentence = `My lucky number is ${luckyNumber}`;
console.log(luckySentence);

const snowString = `Ar sninga? Ats.: ${isSnowing}.`;
console.log(snowString);

const rainString = `Ar lyja? Ats.: ${isRaining}.`;
console.log(rainString);

const penkiosTiesosSum = true + true + true + true + true;
console.log("Tiesos sum: ", penkiosTiesosSum);

const penkiMelaiSum = false + false + false + false + false;
console.log("Melai sum: ", penkiMelaiSum);

const penkiosTiesosMulti = true * true * true * true * true;
console.log("Tiesos multi: ", penkiosTiesosMulti);

const penkiMelaiMulti = false * false * false * false * false;
console.log("Melai multi: ", penkiMelaiMulti);

const combo = 5 * true - 7 * false;
console.log("Combo: ", combo);

console.log("11" + 1);

// Saknis
const saknis81 = 81 ** 0.5;
console.log(saknis81);

const saknisKubu27 = 27 ** (1 / 3);
console.log(saknisKubu27);
