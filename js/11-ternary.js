console.clear();
/* 
TERNARY (supaprastintas if'as)
*/

// IF variantas

const laimejo = false;
let pinigine = 10;

if (laimejo) {
    pinigine += 20;
} else {
    pinigine -= 1;
}

console.log(pinigine);

// IF supaprastintas variantas
const pergale = false;
let zinute = "Sveikinu, tu laimejai";

if (!pergale) {
    zinute = "Ups... Bandykite kita karta!";
}

console.log(zinute);

// TERNARY
const lotteryWin = true;
const wallet = 10 + (lotteryWin ? 20 : -1);
console.log(wallet);

const msgWin = true;
const msg = true ? "Sveikinu" : "Ups...";
console.log(msg);
