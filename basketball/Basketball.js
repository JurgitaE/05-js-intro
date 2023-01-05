class Basketball {
    constructor(name, players) {
        this.league = name;
        this.playerList = [];
        this.teams = [];
        this.games = {};
    }
    wannaBePlayer(name, cost) {
        this.playerList.push({ player: name, price: cost });
    }
    createTeam(name) {
        this.teams.push({ team: name, players: [] });
        console.log(`A "${name}" just entered a game!`);
    }

    buyPlayer(teamNo, playerNo) {
        // atkreipt demesi, kad supushintas obj is playerList i team, todel teamse randa obj su includes metodu, kadangi same ref
        if (this.teams[teamNo - 1].players.includes(this.playerList[playerNo - 1])) {
            console.log(`"${this.teams[teamNo - 1].team}" team can't add the same player twice!`);
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
    letsPlay(team1, team2) {
        console.log(`New game everybody!\n"${this.teams[team1 - 1].team}" vs. "${this.teams[team2 - 1].team}"`);

        if (!this.games[this.teams[team1 - 1].team] && !this.games[this.teams[team2 - 1].team]) {
            this.games[this.teams[team1 - 1].team] = [];
            this.games[this.teams[team2 - 1].team] = [];
        }
        this.games.versus = [this.teams[team1 - 1].team, this.teams[team2 - 1].team];
    }
    score(score1, score2) {
        const scorerName1 = this.games.versus[0];
        const scorerName2 = this.games.versus[1];
        this.games[scorerName1].push(score1);
        this.games[scorerName2].push(score2);

        const winner = score1 > score2 ? `"${scorerName1}" wins!` : score1 < score2 ? `"${scorerName2}" wins!` : `Game is a draw!`;
        console.log(winner);
    }
    seasonSummary() {
        const teamSores1 = this.games[this.teams[0].team];
        const teamSores2 = this.games[this.teams[1].team];
        const counter = [0, 0];
        let winner;
        for (let i = 0; i < teamSores1.length; i++) {
            if (teamSores1[i] > teamSores2[i]) counter[0]++;
            if (teamSores1[i] < teamSores2[i]) counter[1]++;

        }
        if (counter[0] > counter[1]) {
            winner = this.teams[0].team;
        } else if (counter[0] < counter[1]) {
            winner = this.teams[1].team;
        } else {
            winner = `no team wins`
        }
        console.log(
            `Season summary for "${this.league}" ${this.teams[0].players.length}x${this.teams[1].players.length} league:\n####################\nTotal games played: ${this.games[this.teams[0].team].length}\nWinner team: "${winner}"\n####################
            `);
    }
}


export default Basketball;
