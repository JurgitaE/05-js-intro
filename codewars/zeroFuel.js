console.clear();

function zeroFuel(distanceToPump, mpg, fuelLeft) {
    const availableDistance = fuelLeft * mpg;
    return distanceToPump <= availableDistance;
}

console.log(zeroFuel(50, 25, 2), "-->", true);
console.log(zeroFuel(100, 50, 1), "-->", false);
console.log(zeroFuel(40, 10, 10), "-->", true);
