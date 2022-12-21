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

const b = [1, 2, 3, [4, 5, 6]];
const c = [...b];

b[0] = 7;
console.log(b);
console.log(c);

c[3][0] = 99;
console.log(b);
console.log(c);

const f = [9, 8, 7];
const g = [];
for (let i = 0; i < f.length; i++) {
    g.push(f[i]);
}
console.log(f);
console.log(g);

f[0] = 99;
console.log(f);
console.log(g);
