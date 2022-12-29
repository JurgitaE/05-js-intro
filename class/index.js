console.clear();

import { Student } from "./Student.js";

const petras = new Student("Petras", 2000);

petras.addMarks(10, 0, 2, 22);
petras.addMark(-22);
petras.addMark(8);
petras.addMark(3.14);
petras.addMark(-3.14);
petras.addMark(4);
petras.addMark(6);
petras.addMark(NaN);

console.log(petras.name, petras.marksAverage());
console.log(petras.name, petras.marksAverage2());
console.log();
