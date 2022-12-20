console.clear();
const n1 = 7;
const n2 = 5;

// function declaration
function sum(a, b) {
    return a + b;
}
console.log(`${n1} + ${n2} = ${sum(n1, n2)}`);

// function minus(a, b) {
//     return a - b;
// }

// function expression
// kintamajam priskirta anoninimine funkcija
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
// Jei logikos bloke yra tik 1 statement
// galim nerasyti {} ir return
const divide = (a, b) => a / b;
console.log(`${n1} / ${n2} = ${divide(n1, n2)}`);

// arrow function
// jei parametru bloke yra tik 1 parametras
// galim nerasyti ()
// negalima naudoti, jei skliaustuose yra 'kazkas keisto' 👀
const sqrt = (a) => a * a;
console.log(`${n1} ** 2 = ${sqrt(n1)}`);

function hi() {
    return "Hi there 👋";
}
console.log(hi());
console.log(hi());
console.log(hi());

const hello = () => `Hello kitty 😽`;
console.log(hello());
console.log(hello());
console.log(hello());
