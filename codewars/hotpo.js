// https://www.codewars.com/kata/577a6e90d48e51c55e000217
console.clear();

function hotpo(n) {
    let a = n;
    let counter = 0;
    if (n === 1) {
        return 0;
    } else {
        while (a > 1) {
            if (a % 2 === 0) {
                a /= 2;
                counter++;
            } else {
                a = 3 * a + 1;
                counter++;
            }
        }
    }
    return counter;
}
console.log(hotpo(6));
