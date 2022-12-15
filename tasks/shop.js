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
    for (let i = 0; i < goods.length - 1; i++) {
        console.log(`${i + 1}) ${goods[i].name} kainuoja ${goods[i].price.toFixed(2)} ${currency} ir turime ju ${goods[i].inStock} vienetu.`);
        totalPrice += goods[i].price * goods[i].inStock;
    }
    console.log("----------------");
    console.log(`Viso asortimento kaina: ${totalPrice.toFixed(2)} ${currency}.`);
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
        if (goods[i].inStock === 0) {
            console.log(`${i + 1}) ${goods[i].name} kainuoja ${goods[i].price.toFixed(2)} ${currency}. Prekes neturime sandelyje.`);
            totalPrice += goods[i].price * goods[i].inStock;
        } else {
            console.log(`${i + 1}) ${goods[i].name} kainuoja ${goods[i].price.toFixed(2)} ${currency} ir turime ju ${goods[i].inStock} vienetu.`);
            totalPrice += goods[i].price * goods[i].inStock;
        }
    }
    console.log("----------------");
    console.log(`Viso asortimento kaina: ${totalPrice.toFixed(2)} ${currency}.`);
}

shop2(prekes, valiuta);
