console.clear();
/*
Skaitmenu kiekis skaiciuje.
*/

function digitCount(number) {
    if (typeof number !== "number" || !isFinite(number)) {
        return "ERROR";
    }

    console.log(number);

    // const numberAsString = number.toString();
    const numberAsString = "" + number;

    let count = numberAsString.length;

    if (number < 0) {
        count--;
    }

    if (number % 1 !== 0) {
        count--;
    }

    return count;
}

console.log(digitCount(true));
console.log(digitCount("asd"));
console.log(digitCount(NaN));
console.log(digitCount(Infinity));
console.log(digitCount(-Infinity));

console.log(digitCount(0), "-->", 1);
console.log(digitCount(5), "-->", 1);
console.log(digitCount(781), "-->", 3);
console.log(digitCount(37060123456), "-->", 11);
console.log(digitCount(3.14), "-->", 3);
console.log(digitCount(-37060123456), "-->", 11);
console.log(digitCount(-3.14), "-->", 3);

console.log(digitCount(1000000000000000000000), "-->", 22);
console.log(digitCount(0.000000000000000000001), "-->", 22);
console.log(digitCount(1000000000000000000000.000000000000000000001), "-->", 22);
