class Basketball {
    constructor(name, players) {
        this.league = name;
        this.playerList = [];
        this.teams = [];
    }
    wannaBePlayer(name, cost) {
        this.playerList.push({ player: name, price: cost });
    }
    createTeam(name) {
        this.teams.push({ team: name, players: [] });
        console.log(`A "${name}" just entered a game!`);
    }
    buyPlayer(teamNo, playerNo) {
        if (this.teams[teamNo - 1].players.includes(this.playerList[playerNo - 1])) {
            console.log(`"${this.teams.team}" team can't add the same player twice!`);
        } else if (this.teams[teamNo - 1].players.length === 3) {
            console.log(`"${this.teams[teamNo - 1].team}" team can't add extra players to it's team.\nMaximum players per team is 3.`);
        } else {
            this.teams[teamNo - 1].players.push(this.playerList[playerNo - 1]);
            console.log(
                `"${this.teams[teamNo - 1].team}" team just acquired new player ${this.playerList[playerNo - 1].player} for ${this.playerList[playerNo - 1].price} cash/year!`
            );
        }
    }
    teamValue(teamNo) {
        const total = this.teams[teamNo - 1].players.reduce((acc, cur) => acc + cur.price, 0);
        console.log(`"${this.teams[teamNo - 1].team}" team is paying ${total} cash/year for it's players.`);
    }
}

export default Basketball;
