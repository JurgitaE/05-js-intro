// https://www.codewars.com/kata/514b92a657cdc65150000006

function solution(number) {
    if (number <= 2) return 0;
    // 1-create array  filled with 3's (first iterable) which is   3 - number length (no lower values than 3 are multiples  of 3 and 5 and number is not included in the range according to the task)
    //  replace 3's with actual values (+1 on each itearation),
    // filter out values which are multiples of 3 and 5
    // use reduce method to find sum of values filtered.

    return Array(number - 3)
        .fill(3)
        .map((a, index, arr) => (arr[index - 1] ? arr[index - 1] + index : a))
        .filter((a) => a % 3 === 0 || a % 5 === 0)
        .reduce((acc, cur) => acc + cur, 0);
}
console.log(solution(10));
