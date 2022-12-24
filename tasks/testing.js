/* console.clear();

console.log("--------DIVIDING WITHOUT REMAINDER----------");

function divideWithoutRemainder(range, dividers) {
    console.log("--------------------------------------------------------------------------------");

    if (!validateRange(range)) {
        return;
    }

    if (!validateDividers(dividers)) {
        return;
    }

    let rangeStart = range[0];
    let rangeEnd = range[1];
    let timesDivides = 0;

    if (rangeStart <= rangeEnd) {
        for (let j = 0; j < dividers.length; j++) {
            for (let i = rangeStart; i <= rangeEnd; i++) {
                if (i % dividers[j] === 0) {
                    timesDivides++;
                }
            }
            console.log(`Skaičių intervale tarp ${rangeStart} ir ${rangeEnd}, besidalijančių be liekanos iš ${dividers[j]} yra ${timesDivides} vienetai.`);
            timesDivides = 0;
        }
    } else {
        for (let j = 0; j < dividers.length; j++) {
            for (let i = rangeStart; i >= rangeEnd; i--) {
                if (i % dividers[j] === 0) {
                    timesDivides++;
                }
            }
            console.log(`Skaičių intervale tarp ${rangeStart} ir ${rangeEnd}, besidalijančių be liekanos iš ${dividers[j]} yra ${timesDivides} vienetai.`);
            timesDivides = 0;
        }
    }
}

function validateRange(range) {
    console.log("Validating range...");
    if (range.length !== 2) {
        console.log(` [${range}] is a bad range. Only [START, END] , no more, no less. Please fix it.`);
        return false;
    } else if (typeof range[0] !== "number" || typeof range[1] !== "number") {
        console.log(range, "is a bad range. One or both  of the elements is not a NUMBER. Please fix it.");
        return false;
    } else if (!isFinite(range[0]) || !isFinite(range[1])) {
        console.log(range, "is a bad range. One or both of the elements not Finite. Please fix it.");
        return false;
    } else if (range[0] % 1 !== 0 || range[1] % 1 !== 0) {
        console.log(range, "is a bad range. One or both of the elements not Integer. Please fix it.");
        return false;
    } else {
        return true;
    }
}

function validateDividers(dividers) {
    console.log("Validating dividers...");
    if (dividers.length === 0) {
        console.log(dividers, "There must be at least 1 divider. Please fix it.");
        return false;
    }
    for (let i = 0; i < dividers.length; i++) {
        if (typeof dividers[i] !== "number") {
            console.log(dividers[i], "in", dividers, "is a bad divider.It has to be a NUMBER. Please fix it.");
            return false;
        } else if (!isFinite(dividers[i])) {
            console.log(dividers[i], "in", dividers, "is a bad divider.It cant be Infinite. Please fix it.");
            return false;
        } else if (dividers[i] % 1 !== 0) {
            console.log(dividers[i], "in", dividers, "is a bad divider.It have to be Integral. Please fix it.");
            return false;
        }
    }

    return true;
}

const range1 = [0, 11];
// const range2 = [8, 31];
// const range3 = [-18, 18];
const dividers = [];

divideWithoutRemainder(range1, dividers);
// divideWithoutRemainder(range2, dividers);
// divideWithoutRemainder(range3, dividers);
 */
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

function solution(number) {
    if (number <= 2) return 0;

    return Array(number - 3)
        .fill(3)
        .map((a, index, arr) => (arr[index - 1] ? arr[index - 1] + index : a))
        .filter((a) => a % 3 === 0 || a % 5 === 0)
        .reduce((acc, cur) => acc + cur, 0);
}
console.log(solution(10));
