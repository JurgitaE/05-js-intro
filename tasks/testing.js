console.clear();
function isOpposite(s1, s2) {
    let bool = true;
    for (let i = 0; i < s1.length; i++) {
        console.log(s1[i], s2[i]);
        if (s1.length !== s2.length || s1[i] === s2[i] || s1[i].toLowerCase() !== s2[i].toLowerCase()) {
            console.log(s1[i], s2[i]);
            bool = false;
            break;
        }
    }
    return bool;
}

console.log(isOpposite("gsdmZ", "GSDM"));
