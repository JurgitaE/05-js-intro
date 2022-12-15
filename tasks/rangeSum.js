console.clear();

/*
Susumuoti (sveikuosius) skaicius intervale nuo-iki.

if (from < to),{ 
    ciklas from-to
}

if (from > to),{ 
    ciklas to-from
}

if (from === to) {

}

*/

function rangeSum(from, to) {
    // parametru validacija

    // if (typeof from !== 'number'
    //     || typeof to !== 'number'
    //     || !isFinite(from)
    //     || !isFinite(to)
    //     || from % 1 !== 0
    //     || to % 1 !== 0) {
    //     return 'ERROR: visi parametrai turi buti sveikieji skaiciai';
    // }

    if (typeof from !== "number") {
        return "ERROR: pirmasis parametras turi buti skaicius";
    }
    if (typeof to !== "number") {
        return "ERROR: antrasis parametras turi buti skaicius";
    }

    if (!isFinite(from)) {
        return "ERROR: pirmasis parametras turi buti normalus skaicius";
    }
    if (!isFinite(to)) {
        return "ERROR: antrasis parametras turi buti normalus skaicius";
    }

    if (from % 1 !== 0) {
        return "ERROR: pirmasis parametras turi buti sveikasis skaicius";
    }
    if (to % 1 !== 0) {
        return "ERROR: antrasis parametras turi buti sveikasis skaicius";
    }

    // logika
    let sum = 0;

    if (from < to) {
        for (let i = from; i <= to; i++) {
            sum += i;
        }
    }

    if (from > to) {
        for (let i = to; i <= from; i++) {
            sum += i;
        }
    }

    if (from === to) {
        sum += from;
    }

    // rezultato validacija

    // rezultato grazinimas
    return sum;
}

console.log(rangeSum(0, Infinity));
console.log(rangeSum(-Infinity, 0));
console.log(rangeSum(0, -Infinity));
console.log(rangeSum(-Infinity, Infinity));
console.log(rangeSum(-Infinity, -Infinity));
console.log(rangeSum(Infinity, Infinity));

console.log(rangeSum(0, NaN));
console.log(rangeSum(-NaN, 0));
console.log(rangeSum(0, -NaN));
console.log(rangeSum(-NaN, -NaN));
console.log(rangeSum(-NaN, NaN));
console.log(rangeSum(NaN, NaN));

console.log(rangeSum(5, null));
console.log(rangeSum(null, 5));
console.log(rangeSum(null, null));

console.log(rangeSum(5, true));
console.log(rangeSum(true, 5));
console.log(rangeSum(true, true));

console.log(rangeSum(5, false));
console.log(rangeSum(false, 5));
console.log(rangeSum(false, false));

console.log(rangeSum(5, []));
console.log(rangeSum([], 5));
console.log(rangeSum([], []));

console.log(rangeSum(5, {}));
console.log(rangeSum({}, 5));
console.log(rangeSum({}, {}));

console.log(rangeSum("labas", 10));
console.log(rangeSum(10, "labas"));
console.log(rangeSum("labas", "rytas"));

console.log(rangeSum(0, 4), "-->", 10);
console.log(rangeSum(0, 100), "-->", 5050);
console.log(rangeSum(-70, 30), "-->", -2020);
console.log(rangeSum(574, 815), "-->", 168069);
console.log(rangeSum(-50, 50), "-->", 0);
console.log(rangeSum(4, 0), "-->", 10);
console.log(rangeSum(100, 0), "-->", 5050);
console.log(rangeSum(30, -70), "-->", -2020);
console.log(rangeSum(815, 574), "-->", 168069);
console.log(rangeSum(50, -50), "-->", 0);
console.log(rangeSum(0, 0), "-->", 0);
console.log(rangeSum(5, 5), "-->", 5);
console.log(rangeSum(-5, -5), "-->", -5);

console.log(rangeSum(2.5, 10));
console.log(rangeSum(2, 10.5));
console.log(rangeSum(2.5, 10.5));
console.log(rangeSum(-2.5, 10));
console.log(rangeSum(2, -10.5));
console.log(rangeSum(-2.5, -10.5));
console.log(rangeSum(-2.5, 10.5));
console.log(rangeSum(2.5, -10.5));
