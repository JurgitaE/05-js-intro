console.log(123);

/* 
NUMBERS:
-tikri/netikri (skaiciaus tipo, bet ne tikras skaicius)
    -Infinity
    -NaN (not a number)
-sveikieji/desimtainiai
-teigiami/neigiami

INICIJAVIMAS
const - neikeiciama reiksme )default)
let - kintama reiksme (sekantis pasirinkimas, jei netinka const)
var - niekada nenaudoti (seniena)

SUTRUMPINIMAI

x = x + 2 -> x += 2
x = x - 2 -> x -= 2
x = x * 2 -> x *= 2
x = x / 2 -> x /= 2
x = x % 2 -> x %= 2

jei padidinti reikia tik 1 vienetu, tai:
x = x + 1 > x += 1 -> x++
x = x + 1 > x += 1 -> ++x

jei sumazinti reikia tik 1 vienetu, tai:
x = x - 1 > x -= 1 -> x--
x = x - 1 > x -= 1 -> --x
 */
const PI = 3.14;
console.log(PI);

let wallet = 0;
console.log(wallet);

wallet = 5;
console.log(wallet);

wallet = 15;
console.log(wallet);

const negative = -888;
console.log(negative);

const maxNumber = Infinity;
const minNumber = -Infinity;
console.log(maxNumber, minNumber);
console.log(0, 1, 2, 3.14);

console.log(NaN);

// kintamuju uzvadinimas
const vienas = 1;
const antrasSkaicius = 2;
const PVM = 21;

console.log("-----------------------------");
console.log("primityvios matematines operacijos");

const a = 5;
const b = 7;

// suma
const suma = a + b;
console.log(a, b, suma);

// skirtumas
const skirtumas = a - b;
console.log(a, b, skirtumas);

// dalmuo
const dalmuoAB = a / b;
const dalmuoBA = b / a;
console.log(a, b, dalmuoAB);
console.log(b, a, dalmuoBA);

// daugyba
const sandauga = a * b;
console.log(a, b, sandauga);

// liekana
const liekanaAB = a % b;
const liekanaBA = b % a;
console.log(a, b, liekanaAB);
console.log(b, a, liekanaBA);

// laipsnis
const laipsnisAB = a ** b; //5 ** 7-> penki pakelta septintuoju
const laipsnisBA = b ** a; //7 ** 5 = 7 * 7 * 7 * 7 * 7-> septyni pakelta 5
console.log(a, b, laipsnisAB);
console.log(b, a, laipsnisBA);

console.log("---------------------");
const p1 = 10;
const p2 = 2;
const p3 = 8;
const p4 = 4;

let pazymiuSuma = 0;
console.log("pazymiu suma", pazymiuSuma);

pazymiuSuma = pazymiuSuma + p1;
console.log("pazymiu suma", pazymiuSuma);

pazymiuSuma = pazymiuSuma + p2;
console.log("pazymiu suma", pazymiuSuma);

pazymiuSuma = pazymiuSuma + p3;
console.log("pazymiu suma", pazymiuSuma);

console.log("-----------------------");

const islaida1 = 10;
const islaida2 = 20;
const islaida3 = 25;
const islaida4 = 35;

let saskaita = 100;
saskaita -= islaida1;
console.log("isleidau", islaida1, "; saskaitoje liko:", saskaita);

saskaita -= islaida2;
console.log("isleidau", islaida2, "; saskaitoje liko:", saskaita);

saskaita -= islaida3;
console.log("isleidau", islaida3, "; saskaitoje liko:", saskaita);

saskaita -= islaida4;
console.log("isleidau", islaida4, "; saskaitoje liko:", saskaita);

console.log("------------------------------");

let index1 = 0;

console.log("index:", index1++);
console.log("index:", index1++);
console.log("index:", index1++);
console.log("index:", index1++);
console.log("index:", index1++);
console.log("index:", index1++);
console.log("index:", index1++);

let index2 = 0;

console.log("index:", index2++);
console.log("index:", index2++);
console.log("index:", index2++);
console.log("index:", index2++);
console.log("index:", index2++);
console.log("index:", index2++);
console.log("index:", index2++);

console.log(8 ** (1 / 3));
