console.clear();
// https://www.codewars.com/kata/5390bac347d09b7da40006f6

String.prototype.toJadenCase = function () {
    let str = this.valueOf(this);
    return str
        .split(" ")
        .map((a) => a.replace(a[0], a[0].toLocaleUpperCase()))
        .join(" ");
};

console.log("you suck".toJadenCase());

/* 
String.prototype.toJadenCase = function() {
  return this.split(' ').map(item => item[0].toUpperCase() + item.slice(1)).join(' ')
};
 */
