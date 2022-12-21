console.clear();
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
