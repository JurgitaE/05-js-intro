console.clear();
// const Student = require("./Students"); -Old way
import Student from "./Student.js";
import SimpleStudent from "./Student2.js";

const petras = new Student("Petras", 2000, true);
const maryte = new SimpleStudent("Maryte", 1980, false);

console.log(petras);
console.log(petras.name, petras.marks);
console.log(maryte);
console.log(maryte.name, maryte.marks);
