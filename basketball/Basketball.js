class Basketball {
    constructor(name, players) {
        this.league = name;
        this.players = players;
        this.list = [];
    }
    wannaBePlayer(name, cost) {
        this.list.push({ player: name, price: cost });
    }
}

export default Basketball;
