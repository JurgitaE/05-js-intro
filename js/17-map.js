console.clear();
/*
MAP - grazinamas naujas to pacio dydzio masyvas
      su modifikuotomis reiksmemis
*/

const marks = [10, 2, 8, 4, 6];
const a = marks;

console.log(marks);
console.log(a);

marks[0] = 1;

console.log(marks);
console.log(a);

a[2] = 3;

console.log(marks);
console.log(a);

console.log("-----------");
console.log("COPY spread");

const b = [1, 2, 3, [4, 5, 6]];
const c = [...b];

b[0] = 7;
console.log(b);
console.log(c);

c[3][0] = 99;
console.log(b);
console.log(c);

console.log("-----------");
console.log("COPY for");

const f = [9, 8, [7, [4, 3], 2], 6, 5];
const g = [];
for (let i = 0; i < f.length; i++) {
    if (Array.isArray(f[i])) {
        const innerArray = [];

        for (let j = 0; j < f[i].length; j++) {
            if (Array.isArray(f[i][j])) {
                const innerArray2 = [];

                for (let k = 0; k < f[i][j].length; k++) {
                    innerArray2.push(f[i][j][k]);
                }

                innerArray.push(innerArray2);
            } else {
                innerArray.push(f[i][j]);
            }
        }

        g.push(innerArray);
    } else {
        g.push(f[i]);
    }
}
console.log(f);
console.log(g);

f[0] = 99;
f[2][0] = 77;
f[2][1][0] = 44;
console.log(f);
console.log(g);

// auksciau pateikta koda reiketu perrasyti su rekursija ⤴

console.clear();
console.log("map");

const kiausiniai = [2, 4, 6, 8, 10];
const eggs = [];

for (let i = 0; i < kiausiniai.length; i++) {
    eggs.push(kiausiniai[i] * 2 - 1);
}
console.log(kiausiniai);
console.log(eggs);

function priceConvert(price) {
    return price * 1.5;
}

const didmenineKaina = [10, 20, 50, 100];
const mazmenineKaina = [];

for (const kaina of didmenineKaina) {
    mazmenineKaina.push(priceConvert(kaina));
}
console.log(didmenineKaina);
console.log(mazmenineKaina);

const retailPrice1 = didmenineKaina.map((price) => price * 1.5);
console.log(retailPrice1);

const retailPrice2 = didmenineKaina.map(priceConvert);
console.log(retailPrice2);

const aaa = [1, 2, 3, 4, 5, -1, -2, -3, -4, -5];
const bbb = aaa.map((n) => n * 2);
const ccc = aaa.map((n) => 0);
const ddd = aaa.map((n) => (n > 0 ? n : 0));
console.log(aaa);
console.log(bbb);
console.log(ccc);
console.log(ddd);

const names = ["Petras", "Maryte", "Jonas", "Ona"];
const abbr = names.map((s) => s[0]);
console.log(names);
console.log(abbr);

const students = [
    { name: "Petras", age: 99, isMarried: true },
    { name: "Maryte", age: 88, isMarried: false },
    { name: "Jonas", age: 77, isMarried: false },
    { name: "Ona", age: 66, isMarried: true },
];

const studentNames = students.map((s) => s.name);
const studentAges = students.map((s) => s.age);
const studentStatus = students.map((s) => s.isMarried);
console.log(students);
console.log(studentNames);
console.log(studentAges);
console.log(studentStatus);

const extra = { children: 0, phone: null };
const studentExtra = students.map((s) => ({ ...s, ...extra }));
console.log(studentExtra);
