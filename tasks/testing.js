function stringClean(s) {
    return [...s].filter((a) => !"012345678".includes(a)).join("");
}

console.log(stringClean("E3at m2e2!!"));
console.log(stringClean("123456789"));
