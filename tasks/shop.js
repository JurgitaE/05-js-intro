console.clear();

const valiuta = "EUR";
const prekes = [
    {
        name: "Bananas",
        price: 2,
        inStock: 10,
    },
    {
        name: "Agurkas",
        price: 3,
        inStock: 10,
    },
    {
        name: "Pomidoras",
        price: 1.57,
        inStock: 30,
    },
    {
        name: "Arbuzas",
        price: 1,
        inStock: 0,
    },
];

function shop(prekes, valiuta) {
    console.log("MUSU PARDUOTUVE:");
    console.log(" ----------------");
    let kaina = 0;
    for (let i = 0; i < prekes.length; i++) {
        console.log(
            `${prekes[i].name} kainuoja ${prekes[i].price.toFixed(
                2
            )} ${valiuta} ir ju turime ${prekes[i].inStock} vienetu.`
        );
        kaina += prekes[i].price * prekes[i].inStock;
    }
    console.log("----------------");
    console.log(`Viso asortimento kaina: ${kaina.toFixed(2)} ${valiuta}.`);
}

shop(prekes, valiuta);
// MUSU PARDUOTUVE:
// ----------------
// 1) Bananas kainuoja 2.00 EUR ir turime ju 10 vienetu.
// 2) Agurkas kainuoja 3.00 EUR ir turime ju 10 vienetu.
// 3) Pomidoras kainuoja 1.57 EUR ir turime ju 30 vienetu.
// ----------------
// Viso asortimento kaina: 97.10 EUR.
function shop2(prekes, valiuta) {
    console.log("MUSU PARDUOTUVE:");
    console.log(" ----------------");
    let kaina = 0;
    for (let i = 0; i < prekes.length; i++) {
        if (prekes[i].inStock === 0) {
            console.log(
                `${prekes[i].name} kainuoja ${prekes[i].price.toFixed(
                    2
                )} ${valiuta}. Prekes neturime sandelyje.`
            );
            kaina += prekes[i].price * prekes[i].inStock;
        } else {
            console.log(
                `${prekes[i].name} kainuoja ${prekes[i].price.toFixed(
                    2
                )} ${valiuta} ir ju turime ${prekes[i].inStock} vienetu.`
            );
            kaina += prekes[i].price * prekes[i].inStock;
        }
    }
    console.log("----------------");
    console.log(`Viso asortimento kaina: ${kaina.toFixed(2)} ${valiuta}.`);
}

shop2(prekes, valiuta);
