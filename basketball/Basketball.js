class Basketball {
    constructor(name, players) {
        this.league = name;
        this.players = players;
        this.playerList = [];
        this.teams = [];
    }
    wannaBePlayer(name, cost) {
        this.playerList.push({ player: name, price: cost });
    }
    createTeam(team) {
        this.teams.push({ name: team, team: [] });
    }
}

export default Basketball;
