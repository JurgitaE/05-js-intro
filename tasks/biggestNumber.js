console.clear();
/*
Didziausias skaicius sarase.
*/

function biggestNumber(list) {
    if (!Array.isArray(list)) {
        return "ERROR: reikia masyvo.";
    }
    if (list.length < 1) {
        return "ERROR: masyvas negali buti tuscias.";
    }

    let max = -Infinity;

    for (let i = 0; i < list.length; i++) {
        const number = list[i];
        if (typeof number === "number" && isFinite(number) && number > max) {
            max = number;
        }
    }

    if (max === -Infinity) {
        return "ERROR: sarase nera nei vieno normalaus skaiciaus.";
    }

    return max;
}

console.log(biggestNumber("pomidoras"));
console.log(biggestNumber(true));
console.log(biggestNumber());
console.log(biggestNumber(5));
console.log(biggestNumber(function () {}));
console.log(biggestNumber(null));
console.log(biggestNumber({}));
console.log(biggestNumber([]));

console.log(biggestNumber([0]), "-->", 0);
console.log(biggestNumber([1, 2, 3]), "-->", 3);
console.log(biggestNumber([-5, 78, 14, 0, 18]), "-->", 78);
console.log(biggestNumber([69, 69, 69, 69, 66]), "-->", 69);
console.log(biggestNumber([-1, -2, -3, -4, -5, -6, -7, -8]), "-->", -1);

console.log(biggestNumber([1, 2, 3, Infinity]), "-->", 3);
console.log(biggestNumber([1, 2, Infinity, 3]), "-->", 3);
console.log(biggestNumber([1, Infinity, 2, 3]), "-->", 3);
console.log(biggestNumber([Infinity, 1, 2, 3]), "-->", 3);

console.log(biggestNumber([1, 2, 3, NaN]), "-->", 3);
console.log(biggestNumber([1, 2, NaN, 3]), "-->", 3);
console.log(biggestNumber([1, NaN, 2, 3]), "-->", 3);
console.log(biggestNumber([NaN, 1, 2, 3]), "-->", 3);

console.log(biggestNumber([1, 2, 3, true]), "-->", 3);
console.log(biggestNumber([1, 2, true, 3]), "-->", 3);
console.log(biggestNumber([1, true, 2, 3]), "-->", 3);
console.log(biggestNumber([true, 0, -1, -2]), "-->", 0);

console.log(biggestNumber([1, 2, 3, "true"]), "-->", 3);
console.log(biggestNumber([1, 2, "true", 3]), "-->", 3);
console.log(biggestNumber([1, "true", 2, 3]), "-->", 3);
console.log(biggestNumber(["true", 0, -1, -2]), "-->", 0);

console.log(biggestNumber(["true", true, NaN, [], [5], Infinity, -Infinity, 0]), "-->", 0);
console.log(biggestNumber(["true", true, NaN, [], [5], Infinity, -Infinity]));

console.log(biggestNumber([-5, [[78], 14], 0, 18]), "-->", 78);
