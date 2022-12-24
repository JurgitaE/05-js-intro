console.clear();
const n1 = 7;
const n2 = 5;

// function declaration
function sum(a, b) {
    return a + b;
}
console.log(`${n1} + ${n2} = ${sum(n1, n2)}`);

// function expression
// kintamajam priskirta anonimine funkcija
const minus = function (a, b) {
    return a - b;
};
console.log(`${n1} - ${n2} = ${minus(n1, n2)}`);

// arrow function
const multiply = (a, b) => {
    return a * b;
};
console.log(`${n1} * ${n2} = ${multiply(n1, n2)}`);

// arrow function
// jeigu logikos bloke yra tik 1 statement'as
// galim nerasyti {} ir return
const divide = (a, b) => a / b;
console.log(`${n1} / ${n2} = ${divide(n1, n2)}`);

// arrow function
// jeigu parametru bloke yra tik 1 parametras
// galim nerasyti ()
// negalima naudoti, jei skliaustuote yra "kazkas keisto" 👀
const sqrt = (a) => a * a;
console.log(`${n1} ** 2 = ${sqrt(n1)}`);

function hi() {
    return "Hi there 👋";
}
const hello = function () {
    return "Hello kitty 🐱";
};

console.log(hi());
console.log(hi());
console.log(hi());

console.log(hello());
console.log(hello());
console.log(hello());
