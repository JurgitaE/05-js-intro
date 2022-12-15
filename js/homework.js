/* // https://docs.google.com/document/d/1UnM5MzO7KPf-atlz3HXPJN8XlaN37nlUJ7fp6GwvIZ8/edit#heading=h.40g6yguvm5k8

// Kintamųjų inicijavimas
// 1

const a = 2;
const b = 10;
const c = 30;
console.log(a);
console.log(b);
console.log(c);

// 2
const x = "pieva";
const y = "ilgis";
const z = "niekas nezino";
console.log(x);
console.log(y);
console.log(z);

// 3
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [10, 22, 3, 48, 5];
const arr3 = [Infinity, NaN, -10, 5.8];
console.log(arr1);
console.log(arr2);
console.log(arr3);
// 4
const stringsArr1 = ["a", "b", "c", "d", "e"];
const stringsArr2 = ["covid", "rotas", "gripas", "funkcija", "objektas"];
const stringsArr3 = ["world", "war", "II", "is", "over"];
console.log(stringsArr1);
console.log(stringsArr2);
console.log(stringsArr3);

// Veiksmai su kintamaisiais
console.log("--------------Veiksmai su kintamaisiais-----------");

// 1
console.log(a + b + c);
// 2
console.log(`${x} ${y} ${z}`);
// 3
const verte1 = arr1[0] - arr1[1] + arr1[2] - arr1[3] + arr1[4];
const verte2 = arr2[0] - arr2[1] + arr2[2] - arr2[3] + arr2[4];
const verte3 = arr3[0] - arr3[1] + arr3[2] - arr3[3] + arr3[4];
console.log(verte1);
console.log(verte2);
console.log(verte3);

//
const separator = ", ";
let string1 = "";

string1 += stringsArr1[0] + separator;
string1 += stringsArr1[1] + separator;
string1 += stringsArr1[2] + separator;
string1 += stringsArr1[3] + separator;
string1 += stringsArr1[4];
console.log(string1);

let string2 = "";

string2 += stringsArr2[0] + separator;
string2 += stringsArr2[1] + separator;
string2 += stringsArr2[2] + separator;
string2 += stringsArr2[3] + separator;
string2 += stringsArr2[4];
console.log(string2);

let string3 = "";

string3 += stringsArr3[0] + separator;
string3 += stringsArr3[1] + separator;
string3 += stringsArr3[2] + separator;
string3 += stringsArr3[3] + separator;
string3 += stringsArr3[4];
console.log(string3);
 */
console.clear();
// Funkcijos
//1
/* function tusciaFunkcija() {
    return false;
}
console.log(tusciaFunkcija());

// 2 Funkcija pavadinimu “daugyba”:
// priima du skaičiaus tipo kintamuosius
// atskirame kintamajame įsimena sandaugos reikšmę
// gražina saudaugos rezultatą
// TESTAI:
// console.log( daugyba( skaicius1, skaicius2 ) );
// console.log( daugyba( skaicius3, skaicius2 ) );
// console.log( daugyba( skaicius1, skaicius3 ) );
// rezultatas: teisingos reikšmės;

function daugyba(a, b) {
    const multiply = a * b;
    return multiply;
}

console.log(daugyba(2, 5));
console.log(daugyba(0, 10));
console.log(daugyba(12.5, 5));

 */

console.log("-----Ciklo for panaudojimas--------");
// Suskaičiuoti ką gausime susumavus skaičius intervale tarp (imtinai):
// 0 … 0
// 0 … 4
// 0 … 100
// 574 … 815
// -50 … 50
// -70 … 30

function sum(numStart, numEnd) {
    let total = 0;
    for (let i = numStart; i <= numEnd; i++) {
        total += i;
    }
    console.log(total);
}

sum(0, 0);
sum(0, 4);
sum(0, 100);
sum(574, 815);
sum(-50, 50);
sum(-70, 30);

// panaudojant ciklą perrašyti tekstinio tipo kintamųjų reikšmes iš kito galo:
// pvz.: “abcdef” -> “fedcba”

function reverse(str) {
    let reversedString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversedString += str[i];
    }
    console.log(reversedString);
}

reverse("abcd");

// Suskaičiuoti, kiek nurodytame intervale yra skaičių, kurie dalijasi be liekanos iš 3, 5 ir 7 atskirai:

// divNoRemainder
// 0 - 11
// 8 - 31
// -18 - 18
// rezultatą pateikti tokiu formatu:
// Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 3 yra 4 vienetai.
// Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 5 yra 3 vienetai.
// Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 7 yra 2 vienetai.

function divNoRemainder(numStart, numEnd, divider) {
    let numCounter = 0;
    for (let i = numStart; i <= numEnd; i++) {
        if (i % divider === 0) {
            numCounter++;
            // console.log(i);
        }
    }
    console.log(`Skaičių intervale tarp ${numStart} ir ${numEnd}, besidalijančių be liekanos iš ${divider} yra ${numCounter} vienetai.`);
}

const dividers = [3, 5, 7];
function nCalls(numStart, numEnd, dividers) {
    for (let i = 0; i < dividers.length; i++) {
        divNoRemainder(numStart, numEnd, dividers[i]);
    }
}

nCalls(0, 11, dividers);
nCalls(8, 31, dividers);
nCalls(-18, 18, dividers);
