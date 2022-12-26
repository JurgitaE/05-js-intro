console.clear();
/* 
For example: ["3:1", "2:2", "0:1", ...]
*/

// function longest(a, b) {
//     let abcRemain = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//     let arrA = [...new Set(a)].sort();
//     let arrB = [...new Set(b)].sort();

//     function streak(arr) {
//         let streak = "";
//         arr.forEach((a) => {
//             abcRemain.includes(a) ? (streak += a) : streak;
//             abcRemain = abcRemain.slice(abcRemain.indexOf(a));
//         });
//         return streak;
//     }
//     console.log(streak(arrA));

//     // arrA.forEach((a) => {
//     //     abcRemain.includes(a) ? (aStreak += a) : aStreak;
//     //     abcRemain = abcRemain.slice(abcRemain.indexOf(a));
//     // });
//     // return aStreak;
// }
// longest("xyaabbbccccdefww", "xxxxyyyyabklmopq");
// // console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding"));
console.clear();
// /*
//             1               2-0 n-1                         1 = 2**0
//           3     5           2-3 n-2     2+1                 3   = 2**2 - 1
//        7     9    11        2-6 n-3     3+(2+1) +           7   = 2**3 - 1
//    13    15    17    19     2-30 n-4    4 +                 13  = 2**4 - 3
// 21    23    25    27    29  2-60 n=5
//  */
// function line(n) {
//     let sum = 0;
//     let accumulator = 1;

//     for (let i = 1; i <= n; i++) {
//         accumulator += (n - 1) * 2;
//     }
//     console.log(accumulator);
// }

// line(1);
// line(2);
// line(3);
// line(4);
console.clear();
function dontGiveMeFive(start, end) {
    return Array(end - start + 1)
        .fill(0)
        .map((a, index) => start + index)
        .filter((a) => !("" + a).includes("5")).length;
}

dontGiveMeFive(1, 9);
console.log(dontGiveMeFive(4, 17));
