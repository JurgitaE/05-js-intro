class Shop {
    constructor(name, currency) {
        this.name = name;
        this.currency = currency;
        this.products = [];
        this.prices = [];
        this.availability = [];
        this.carts = [{ owner: "John", items: [] }];
    }
    intro() {
        console.log(`Hi, we are "${this.name}".\nUse .items() method to get list of items to purchase.\nUse .order() method to get your order details.`);
    }
    addItem(product, price) {
        this.products.push(product);
        this.prices.push(price);
        this.availability.push(true);
        console.log(`"${this.name}" sells ${product} for ${(price / 100).toFixed(2)} ${this.currency} now!`);
    }

    items() {
        let counter = 1;
        console.log(`Items for sale at "${this.name}":`);
        console.log(`====================`);
        for (let i = 0; i < this.products.length; i++) {
            if (this.availability[i]) {
                console.log(`${counter}) ${this.products[i][0].toUpperCase() + this.products[i].slice(1)} - ${(this.prices[i] / 100).toFixed(2)} ${this.currency};`);
                counter++;
            }
        }
        console.log(`====================`);
    }
    updatePrice(product, price) {
        this.prices[this.products.indexOf(product)] = price;
    }
    createCart(buyer) {
        const cartOwned = this.carts.find((a) => a.owner === buyer);
        if (!cartOwned) {
            this.carts.push({ owner: buyer, items: [] });
            console.log(`${buyer} have an open cart at "${this.name}"!`);
        } else {
            console.log(`${buyer} have an open cart at "${this.name}"!`);
        }
    }
    addItemToCart(buyer, productNo, quantity) {
        const cartOwned = this.carts.find((a) => a.owner === buyer);
        if (!cartOwned.payment) {
            if (this.availability[productNo - 1]) {
                cartOwned.items.push({ id: productNo, count: quantity });
            } else {
                console.log(`Item is out of stock!`);
            }
        } else {
            console.log(` You can not add items to already paid cart!`);
        }
    }
    order(buyer) {
        console.log(this.carts.find((a) => a.owner === buyer));
    }
    orderPrice(buyer) {
        const cartOwned = this.carts.find((a) => a.owner === buyer);

        const total = cartOwned.items.reduce((acc, cur) => acc + this.prices[cur.id - 1] * cur.count, 0);
        console.log(`${buyer} order: ${(total / 100).toFixed(2)} ${this.currency}.`);
        return total;
    }
    removeItem(item) {
        const itemIndex = this.products.indexOf(item);
        this.availability[itemIndex] = false;
        console.log(`No more ${item} at "${this.name}"!`);
    }
    pay(buyer, money) {
        const cartOwned = this.carts.find((a) => a.owner === buyer);
        const total = this.orderPrice(buyer);
        if (total > money) {
            console.log("Need more money!");
        } else if (money > total) {
            console.log(`Here is your ${((money - total) / 100).toFixed(2)} EUR change!\nThank you for purchasing at "${this.name}"!`);
            cartOwned.payment = true;
        } else {
            console.log(`Thank you for purchasing at "${this.name}"!`);
            cartOwned.payment = true;
        }
    }
    shopSummary() {
        const closedOrders = this.carts.filter((a) => a.payment === true);
        const countSold = closedOrders.reduce((t, q) => t + q.items.reduce((t2, q2) => t2 + q2.count, 0), 0);

        // console.log(`Summary for the "${this.name}"`);
        console.log("====================");
        console.log(`Items sold: ${countSold}`);
        console.log("====================");
    }
}

export { Shop };
