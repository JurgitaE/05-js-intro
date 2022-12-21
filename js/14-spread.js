console.clear();

// destrukturizavimas - destructuring

const pazymiai = [10, 9, 8, 7, 6];
const pirmas = pazymiai[0];
const antras = pazymiai[1];

console.log(pirmas);
console.log(antras);
console.log("----");
const marks = [10, 2, 8, 4, 6];
const [first, third] = marks;

console.log(first);
console.log(third);
console.log("----");

const petras = ["Petras", 99, true];
const vardas = petras[0];
const amzius = petras[1];
const arVedes = petras[2];
console.log(vardas, amzius, arVedes);

const ona = ["Ona", 87, false];
const [name, age, isMarried] = ona;
console.log(name, age, isMarried);

const car = {
    brand: "Tesla",
    model: "S",
    color: "red",
};
const { color, model } = car;
console.log(color, model);

// SPREAD

const numbers = [1, 2, 3];
const numbers2 = [...numbers, ...numbers];
const numbers3 = [...numbers2, 999, ...numbers2];

console.log(numbers);
console.log(numbers2);
console.log(numbers3);

// SPREAD - išrašymas, iškopijavimas

const person = {
    name: "Maryte",
    age: 88,
    isMarried: true,
    childrenCount: 5,
    phone: 2148562548,
    address: "Gatves g 5, Miestas",
    favoriteColor: "yellow",
    height: 200,
    eyes: "👀",
};
console.log(person);

const person2 = {
    ...person,
    car: {
        ...car,
        price: 100000,
    },
    happy: true,
};

console.log(person2);
console.log(person2.car.brand);

const { childrenCount, happy, favoriteColor } = person2;
console.log(childrenCount, happy, favoriteColor);

console.clear();
const a = ["a", "aa"];
const b = ["b", "bb"];
const c = ["c", "cc"];

const doubleABC = [...a, ...b, ...c];
const doubleCBA = [...c, ...b, ...a];

console.log(doubleABC);
console.log(doubleCBA);

const oa = { a: "a", aa: "aa" };
const ob = { b: "b", bb: "bb" };
const oc = { c: "c", cc: "cc" };

const oABC = { ...oa, ...ob, ...oc, gg: "gg", cc: "nebe CC" };
console.log(oABC);
console.log(oABC.cc);
console.log(oABC.gg);

const user = {
    name: "Username",
    password: "password12",
};

console.log(user);

const user2 = { ...user, name: "Petras" };
console.log(user2);
console.log(user2.name);
