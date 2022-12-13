console.clear();
/* 
Sablonai:
if() {}
if() {} else {}
if() {} else if () {}
if() {} else if () {} else {}
if() {} else if ()... else if {}
if() {} else if ()... else if {} else {}


Palyginimo Operatoriai:
visi: >, <, <=, >=, ==, !=
naudotini: >, <, <=, >=
NEnaudotini: ==, !=
*/

const a = 7;
const b = 7;

//  jei A daugiau B, tai spausdiname 'A daugiau uz B'
//  jei A nera daugiau B, tai spausdiname 'A nera daugiau uz B'

console.log("--------start");
if (a >= b) {
    console.log(`${a} daugiau arba lygu uz ${b}`);
} else {
    console.log(`${a} nera daugiau arba lygu uz  ${b}`);
}

if (a <= b) {
    console.log(`${a} maziau arba lygu uz ${b}`);
} else {
    console.log(`${a} nera  maziau arba lygu uz  ${b}`);
}
if (a != b) {
    console.log(`${a} ne lygu ${b}`);
} else {
    console.log(`${a} lygu ${b}`);
}

const c = 7;
const d = 6;
if (c > d) {
    console.log(`${c} daugiau uz ${d}`);
} else if (c < d) {
    console.log(`${c} maziau uz ${d}`);
} else if (c == d) {
    console.log(`${c} lygu ${d}`);
} else {
    console.log("kazkas neaiskaus su c ir d");
}

console.log("end---------");

const petras = [10, 2];
const maryte = [8, 4, 6];

if (petras.length >= maryte.length) {
    console.log(`Petras turi daugiau arba tiek pat pazymiu, kiek Maryte`);
} else {
    console.log(`Maryte turi daugiau pazymiu uz Petra`);
}

console.log("--------grieztai---------");
if (5 === 5) {
    console.log("taip");
}
if (5 !== 3) {
    console.log("taip");
}

console.log("--------------------------");
if ("labas" === "Labas") {
    console.log("vienodi");
} else {
    console.log("skirtingi");
}
