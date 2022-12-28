console.clear();
function preFizz(n) {
    return [...Array(n).keys()].map((a, i) => 1 + i);
}

console.log(preFizz(1));
