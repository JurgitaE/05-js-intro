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
        for (let i = 0; i < this.bought.length; i++) {}
    }
}

export default Kitchen;
