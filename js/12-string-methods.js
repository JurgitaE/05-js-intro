console.clear();

const name = "Petras";

console.log(name.length);
console.log("".length);
console.log("aaaa".length);
console.log("   ".length);
console.log("       ".length);
console.log("           ".length);

console.log("Petras"[-1]);
console.log("Petras"[0]);
console.log("Petras"[1]);
console.log("Petras"[2]);
console.log("Petras"[3]);
console.log("Petras"[4]);
console.log("Petras"[5]);
console.log("Petras"[6]);
console.log("Petras"[7]);

console.log(" ");
console.log("# CHARAT / AT");
console.log(" ");
console.log("Petras".charAt(0));
console.log("Petras".at(-1));
console.log("Petras".at(-2));
console.log("Petras".at(-3));
console.log("Petras".at(-4));
console.log("Petras".at(-5));
console.log("Petras".at(-6));

console.log(" ");
console.log("# INCLUDE");
console.log(" ");
console.log("Maryte".includes("M"));
console.log("Maryte".includes("a"));
console.log("Maryte".includes("x"));
console.log("Maryte".includes("xyz"));
console.log("Maryte".includes("ry"));
console.log("Maryte".includes("re"));
console.log("Maryte".includes("te"));
console.log("Maryte".startsWith("a"));
console.log("Maryte".startsWith("ar"));
console.log("Maryte".startsWith("mar"));
console.log("Maryte".startsWith("Mar"));
console.log("Maryte".endsWith("Mar"));
console.log("Maryte".endsWith("yte"));
console.log("Maryte".endsWith("te"));
console.log("Maryte".endsWith("e"));

const istiktukas = "pyst";
const sakinys = "Va tai pyst ir yra...";
const sakinys2 = "Pyst par galvą su pagaliu!";

console.log("Istiktukas", sakinys.includes(istiktukas));
console.log("Istiktukas 2", sakinys2.includes(istiktukas));

console.log(sakinys.toLowerCase());
console.log(sakinys.toLocaleUpperCase());

const p1 = sakinys.toLocaleLowerCase().includes(istiktukas.toLocaleLowerCase());
const p2 = sakinys2.toLocaleLowerCase().includes(istiktukas.toLocaleLowerCase());
console.log("Istiktukas lowercase", p1);
console.log("Istiktukas lowercase 2", p2);

console.log(" ");
console.log("# INDEXOF");
console.log("------------");

console.log("Jonas".indexOf("J"));
console.log("Jonas".indexOf("o"));
console.log("Jonas".indexOf("n"));
console.log("Jonas".indexOf("a"));
console.log("Jonas".indexOf("s"));
console.log("Jonas".indexOf("x"));
console.log("Jonas".indexOf("g"));
console.log("Jonas".indexOf("on"));
console.log("Jonas".indexOf("na"));
console.log("Jonas".indexOf("as"));
console.log("Jonas".indexOf("onas"));
console.log("Jonas".indexOf("onassss"));
console.log("---------");
console.log("Vasara".indexOf("a"));
console.log("Ananasas".indexOf("a"));
console.log("Ananasas".indexOf("a", 2));
console.log("Ananasas".indexOf("a", 3));

console.log("");
console.log("# SLICE");
console.log("--------------");

const w1 = "Pasimatymas";
const w2 = w1.slice(4);
const w3 = w1.slice(2, -2);
const w4 = w1.slice(-2);

console.log(w2);
console.log(w3);
console.log(w4);

console.log(" ");
console.log("# REPLACE");
console.log("---------");

const s1 = "Labas rytas, Lietuva!";
const s2 = s1.replace("rytas", "vakaras");

console.log(s1);
console.log(s2);

const template = "Gera diena, {{VARDAS}}!";
const userHi = template.replace("{{VARDAS}}", "Ona");

console.log(template);
console.log(userHi);

const song = "na na na na";
const song2 = song.replace("na", "la").replace("na", "la");
const song3 = song.replaceAll("na", "la");
const song4 = song.replace(/na/g, "la"); //Regex, regexp

console.log(song);
console.log(song2);
console.log(song3);
console.log(song4);

console.log(" ");
console.log("# REPEAT");
console.log("------");

const superSong = "La" + " la".repeat(5) + "!";
console.log(superSong);
