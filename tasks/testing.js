console.clear();
function isVow(a) {
    console.log(a.map((b) => ("aeoiu".includes(String.fromCharCode(b)) ? String.fromCharCode(b) : b)));
}
