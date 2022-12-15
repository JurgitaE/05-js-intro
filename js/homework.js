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
console.log("---------FUNKCIJOS------");
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
/* 3. Funkcija pavadinimu “skaitmenuKiekisSkaiciuje”:
priima vieną kintamąjį
jei perduotas kintamasis nėra skaičiaus tipo, tai išveda pranešimą “Pateikta netinkamo tipo reikšmė.”
priešingu atveju, funkcija tęsia darbą
į atskirą kintamąjį įsimena skaičių sudarančių skaitmenų kiekį
gražina skaitmenų kiekį
TESTAI:
console.log( skaitmenuKiekisSkaiciuje( 5 ) );
rezultatas: 1
console.log( skaitmenuKiekisSkaiciuje( 781 ) );
rezultatas: 3
console.log( skaitmenuKiekisSkaiciuje( 37060123456 ) );
rezultatas: 11
console.log( skaitmenuKiekisSkaiciuje( true ) );
rezultatas: “Pateikta netinkamo tipo reikšmė.”
console.log( skaitmenuKiekisSkaiciuje( “asd” ) );
rezultatas: “Pateikta netinkamo tipo reikšmė.”
console.log( skaitmenuKiekisSkaiciuje( NaN ) );
rezultatas: “Pateikta netinkamo tipo reikšmė.” */
function skaitmenuKiekisSkaiciuje(number) {
    if (typeof number !== "number" || !isFinite(number)) {
        return `Pateikta netinkamo tipo reikšmė.`;
    } else {
        return ("" + number).length;
    }
}
// console.log(skaitmenuKiekisSkaiciuje(5));
// console.log(skaitmenuKiekisSkaiciuje(781));
// console.log(skaitmenuKiekisSkaiciuje(37060123456));
// console.log(skaitmenuKiekisSkaiciuje(true));
// console.log(skaitmenuKiekisSkaiciuje("asd"));
// console.log(skaitmenuKiekisSkaiciuje(NaN));

/* 
4. Funkcija pavadinimu “didziausiasSkaiciusSarase”:
priima vieną kintamąjį
jei perduotas kintamasis nėra sąrašo tipo, tai išveda pranešimą “Pateikta netinkamo tipo reikšmė.”
jei sąrašas yra tuščias, tai išveda pranešimą “Pateiktas sąrašas negali būti tuščias.”
priešingu atveju, funkcija tęsia darbą
pereina per visą pateiktą sąrašą ir į atskirą kintamąjį įsimena skaičių, kuris tuo metu yra didžiausias
gražina didžiausią surastą skaičių
TESTAI:
console.log( didziausiasSkaiciusSarase( [ 1 ] ) );
rezultatas: 1
console.log( didziausiasSkaiciusSarase( [ 1, 2, 3 ] ) );
rezultatas: 3
console.log( didziausiasSkaiciusSarase( [ -5, 78, 14, 0, 18 ] ) );
rezultatas: 78
console.log( didziausiasSkaiciusSarase( [ 69, 69, 69, 69, 66 ] ) );
rezultatas: 69
console.log( didziausiasSkaiciusSarase( [ -1, -2, -3, -4, -5, -6, -7, -8 ] ) );
rezultatas: -1
console.log( didziausiasSkaiciusSarase( “pomidoras” ) );
rezultatas: “Pateikta netinkamo tipo reikšmė.”
console.log( didziausiasSkaiciusSarase( [] ) );
rezultatas: “Pateiktas sąrašas negali būti tuščias.” */

function didziausiasSkaiciusSarase(numList) {
    if (typeof numList !== "object") {
        return `Pateikta netinkamo tipo reikšmė.`;
    }
    if (numList.length === 0) {
        return `Pateiktas sąrašas negali būti tuščias.`;
    }

    let maxNum = numList[0];
    for (let i = 0; i < numList.length; i++) {
        if (maxNum < numList[i]) {
            maxNum = numList[i];
        }
    }
    return maxNum;
}

// console.log(didziausiasSkaiciusSarase([1]));
// console.log(didziausiasSkaiciusSarase([1, 2, 3]));
// console.log(didziausiasSkaiciusSarase([-5, 78, 14, 0, 18]));
// console.log(didziausiasSkaiciusSarase([69, 69, 69, 69, 66]));
// console.log(didziausiasSkaiciusSarase([-1, -2, -3, -4, -5, -6, -7, -8]));
// console.log(didziausiasSkaiciusSarase("pomidoras"));
// console.log(didziausiasSkaiciusSarase([]));

/* 
5. Funkcija pavadinimu “isrinktiRaides”:
priima du kintamuosius:
-pirmasis nurodo tekstą, su kuriuo reikės atlikti užduotį
-antrasis nurodo kas kelintą raidę išrinkti

patikrinti, ar pirmasis kintamasis yra teksto tipo:
jei ne, išvedame pranešimą “Pirmasis kintamasis yra netinkamo tipo.”

priešingu atveju tęsiame darbą
patikrinti, ar pirmasis kintamasis yra ne tuščias tekstas ir ne didesnis nei 100 simbolių:

-jei ne, išvedame pranešimą “Pirmojo kintamojo reikšmė yra netinkamo dydžio.”

priešingu atveju tęsiame darbą
patikrinti, ar antrasis kintamasis yra skaičiaus tipo:

- jei ne, išvedame pranešimą “Antrasis kintamasis yra netinkamo tipo.”
priešingu atveju tęsiame darbą
- patikriname, ar antrojo kintamojo vertė yra didesnė už nulį:
jei ne, išvedame pranešimą “Antrasis kintamasis turi būti didesnis už nulį.”

priešingu atveju tęsiame darbą
patikriname, ar antrojo kintamojo vertė yra ne didesnė už pirmojo kintamojo ilgį:
- jei ne, išvedame pranešimą “Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.”

priešingu atveju tęsiame darbą
išrenkame iš nurodyto teksto kas kelintą raidę (pagal antrojo kintamojo žingsnį)
išrinktas raides sudėti į atskirą kintamąjį, kuris yra teksto tipo
gražina rezultatą
TESTAI:
console.log( isrinktiRaides( “abcdefg”, 2 ) );
rezultatas: “bdf”
console.log( isrinktiRaides( “abcdefghijkl”, 3 ) );
rezultatas: “cfil”
console.log( isrinktiRaides( “abc”, 0 ) );
rezultatas: “Antrasis kintamasis turi būti didesnis už nulį.”
console.log( isrinktiRaides( “abc”, 4 ) );
rezultatas: “Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.”
console.log( isrinktiRaides( 1561, 2 ) );
rezultatas: “Pirmasis kintamasis yra netinkamo tipo.”
 */

function isrinktiRaides(str, everyN) {
    if (typeof str !== "string") {
        return `Pirmasis kintamasis yra netinkamo tipo.`;
    }
    if (str.length === 0 || str.length > 100) {
        return `Pirmojo kintamojo reikšmė yra netinkamo dydžio.`;
    }
    if (typeof everyN !== "number") {
        return `Antrasis kintamasis yra netinkamo tipo.`;
    }
    if (everyN <= 0) {
        return `Antrasis kintamasis turi būti didesnis už nulį.`;
    }
    if (everyN > str.length) {
        return `Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.`;
    }
    let newString = "";
    for (let i = everyN - 1; i < str.length; i += everyN) {
        newString += str[i];
    }
    return newString;
}

console.log(isrinktiRaides("abcdefg", 2));
console.log(isrinktiRaides("abcdefghijkl", 3));
console.log(isrinktiRaides("abc", 0));
console.log(isrinktiRaides("abc", 4));
console.log(isrinktiRaides(1561, 2));

console.log("-----Ciklo for panaudojimas--------");
// 1. Suskaičiuoti ką gausime susumavus skaičius intervale tarp (imtinai):
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

/* 
2.  panaudojant ciklą perrašyti tekstinio tipo kintamųjų reikšmes iš kito galo:
pvz.: “abcdef” -> “fedcba” 
*/

function reverse(str) {
    let reversedString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversedString += str[i];
    }
    console.log(reversedString);
}

reverse("abcd");

/* 
3.  Suskaičiuoti, kiek nurodytame intervale yra skaičių, kurie dalijasi be liekanos iš 3, 5 ir 7 atskirai:

divNoRemainder
0 - 11
8 - 31
-18 - 18
rezultatą pateikti tokiu formatu:
Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 3 yra 4 vienetai.
Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 5 yra 3 vienetai.
Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 7 yra 2 vienetai. 
*/

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
