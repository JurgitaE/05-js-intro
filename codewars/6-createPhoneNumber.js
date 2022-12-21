console.clear();
// https://www.codewars.com/kata/525f50e3b73515a6db000b83/javascript
function createPhoneNumber(arr) {
    const joinedArr = arr.join("");
    return `(${joinedArr.slice(0, 3)}) ${joinedArr.slice(3, 6)}-${joinedArr.slice(6)}`;
}

// function createPhoneNumber(arr) {
//     let pattern = "(xxx) xxx-xxxx";
//     arr.forEach((a) => (pattern = pattern.replace("x", a)));
//     return pattern;
// }
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
