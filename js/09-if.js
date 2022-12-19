console.clear();
/* 
IF - reiksmiu palyginimas; salyga tenkina/netenkina?

Palyginimo Operatoriai:
visi: >, <, <=, >=, ==, !=
naudotini: >, <, <=, >=
NEnaudotini: ==, !=

Loginiai operatoriai
&& - AND - turi tenkinti visas salygas
|| - OR - turi tenkinti bent viena salyga

Sablonai:
if() {}
if() {} else {}
if() {} else if () {}
if() {} else if () {} else {}
if() {} else if ()... else if {}
if() {} else if ()... else if {} else {}
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
console.clear("Clear: 133");
// -------------------------------------------
// code nesting

const day = 10;
if (day === 1) {
    console.log("pirmadienis");
} else {
    if (day === 2) {
        console.log("antradienis");
    } else {
        if (day === 3) {
            console.log("treciadienis");
        } else {
            if (day === 4) {
                console.log("ketvirtadienis");
            } else {
                if (day === 5) {
                    console.log("penktadienis");
                } else {
                    if (day === 6) {
                        console.log("sestadienis");
                    } else {
                        if (day === 7) {
                            console.log("sekmadienis");
                        } else {
                            console.log("tokia diena savaiteje neegzistuoja :(");
                        }
                    }
                }
            }
        }
    }
}

console.log("---end---");

/// Atrakcionu parkas

// 1)
// const parkasDirba = true;
// if (parkasDirba === true) {}
// if (true === true) {}
// if (true) {}
// if (true) { vykdo sita koda } else {}

// 2)
// const parkasDirba = false;
// if (parkasDirba === true) {}
// if (false === true) {}
// if (false) {}
// if (false) {} else { vykdo sita koda }

const parkasDirba = false;
const bijauAukscio = true;

if (parkasDirba) {
    if (bijauAukscio) {
        console.log("Maaaaaamaaa!");
    } else {
        console.log("Einu i parka - bus smagu!");
    }
} else {
    if (bijauAukscio) {
        console.log("Parkas nedirba - man pasiseke - liksiu sausomis kelnemis.");
    } else {
        console.log("Parkas nedirba. Man liudna, nes labai norejai nueiti :(");
    }
}

if (parkasDirba && bijauAukscio) {
    console.log("Maaaaaamaaa!");
} else if (parkasDirba && !bijauAukscio) {
    console.log("Einu i parka - bus smagu!");
} else if (!parkasDirba && bijauAukscio) {
    console.log("Parkas nedirba - man pasiseke - liksiu sausomis kelnemis.");
} else if (!parkasDirba && !bijauAukscio) {
    console.log("Parkas nedirba. Man liudna, nes labai norejai nueiti :(");
} else {
    console.log("Neimanomas pasiekti atvejis!");
}

const amzius = 14;
const amziausRiba = 12;
const ugis = 180;
const ugioRiba = 160;
const turiuPinigu = 55;
const kaina = 10;

if (amzius >= amziausRiba) {
    if (ugis >= ugioRiba) {
        if (turiuPinigu >= kaina) {
            console.log("Einu");
        } else {
            console.log("Negalima");
        }
    } else {
        console.log("Negalima");
    }
} else {
    console.log("Negalima");
}

if (amzius >= amziausRiba && ugis >= ugioRiba && turiuPinigu >= kaina) {
    console.log("Einu");
} else {
    console.log("Negalima");
}

if (amzius < amziausRiba) {
    console.log("Negalima");
} else if (ugis < ugioRiba) {
    console.log("Negalima");
} else if (turiuPinigu < kaina) {
    console.log("Negalima");
} else {
    console.log("Einu");
}
