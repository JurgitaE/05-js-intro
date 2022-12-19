console.clear();
/* 
Perrasyti teksta is galo i prieki.

string <--> array
*/
function reverseString(str) {
    if (typeof str !== "string") {
        return `ERROR: duok stringa, o ne ${typeof str}!`;
    }

    //1  eiti is teksto galo, imti simboli ir lipdyti nauja teksta
    // let text = "";
    // for (let i = str.length - 1; i >= 0; i--) {
    //     const symbol = str[i];
    //     text += symbol;
    // }

    // 2) eini is teksto priekio ir imti simboli is galo
    // let text = "";
    // for (let i = str.length - 1; i >= 0; i--) {
    //     const symbol = str[str.length - 1 - i];
    //     text += symbol;
    // }

    // 3) eini is teksto priekio ir imti simboli is priekio
    let text = "";
    for (let i = 0; i < str.length; i++) {
        const symbol = str[i];
        text = symbol + text;
    }

    return text;
}
console.log(reverseString("a"), "-->", "a");
console.log(reverseString("g"), "-->", "g");
console.log(reverseString("fff"), "-->", "fff");
console.log(reverseString("asdsa"), "-->", "asdsa");
console.log(reverseString("sedek uzu kedes"), "-->", "sedek uzu kedes");
console.log(reverseString("sula"), "-->", "alus");
console.log(reverseString("qwerty"), "-->", "ytrewq");
console.log(reverseString("asd"), "-->", "dsa");

console.log(reverseString());
console.log(reverseString(5));
console.log(reverseString(false));
console.log(reverseString(true));
console.log(reverseString([]));
console.log(reverseString({}));
console.log(reverseString(function () {}));
