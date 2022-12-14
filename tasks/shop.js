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

function shop(goods, currency) {
    console.log("MUSU PARDUOTUVE:");
    console.log(" ----------------");
    let totalPrice = 0;
    for (let i = 0; i < prekes.length - 1; i++) {
        console.log(
            `${prekes[i].name} kainuoja ${prekes[i].price.toFixed(
                2
            )} ${valiuta} ir turime ju ${prekes[i].inStock} vienetu.`
        );
        totalPrice += prekes[i].price * prekes[i].inStock;
    }
    console.log("----------------");
    console.log(`Viso asortimento kaina: ${totalPrice.toFixed(2)} ${valiuta}.`);
}

shop(prekes, valiuta);
// MUSU PARDUOTUVE:
// ----------------
// 1) Bananas kainuoja 2.00 EUR ir turime ju 10 vienetu.
// 2) Agurkas kainuoja 3.00 EUR ir turime ju 10 vienetu.
// 3) Pomidoras kainuoja 1.57 EUR ir turime ju 30 vienetu.
// ----------------
// Viso asortimento kaina: 97.10 EUR.
console.log(`

ANTRAS VARIANTAS

`);
function shop2(goods, currency) {
    console.log("MUSU PARDUOTUVE:");
    console.log(" ----------------");
    let totalPrice = 0;
    for (let i = 0; i < prekes.length; i++) {
        if (prekes[i].inStock === 0) {
            console.log(
                `${prekes[i].name} kainuoja ${prekes[i].price.toFixed(
                    2
                )} ${valiuta}. Prekes neturime sandelyje.`
            );
            totalPrice += prekes[i].price * prekes[i].inStock;
        } else {
            console.log(
                `${prekes[i].name} kainuoja ${prekes[i].price.toFixed(
                    2
                )} ${valiuta} ir turime ju ${prekes[i].inStock} vienetu.`
            );
            totalPrice += prekes[i].price * prekes[i].inStock;
        }
    }
    console.log("----------------");
    console.log(`Viso asortimento kaina: ${totalPrice.toFixed(2)} ${valiuta}.`);
}

shop2(prekes, valiuta);
