class Kitchen {
    constructor(name) {
        this.name = name;
        this.bought = [];
    }
    intro() {
        console.log(`Sveiki atvyke i ${this.name} virtuve!`);
    }
    nupirkta(pr, quant) {
        this.bought.push({ product: pr, units: quant });
    }
    turimiProduktai() {
        for (let i = 0; i < this.bought.length; i++) {
            let { product, units } = this.bought[i];
            console.log(`${i + 1}) ${product[0].toUpperCase() + product.slice(1)}: ${units}`);
        }
    }
    sunaudota(pr, quant) {
        const product = this.bought.find((a) => a.product === pr);
        product.units -= quant;
    }
    sugedesProduktas(pr) {
        const product = this.bought.find((a) => a.product === pr);
        this.bought.splice(this.bought.indexOf(product), 1);
    }
}

export default Kitchen;
