class Artist {
    constructor(name, currency) {
        this.name = name;
        this.currency = currency;
        this.songs = [];
        this.price = 0;
    }
    intro() {
        const hey = `Hi, my name is ${this.name} and I am a musician!`;
        return hey;
    }
    songPrice(p) {
        this.price = p;
        this.songs.forEach((a) => a.history.push([p, 0]));
        return `${this.name}'s price per song is ${(p / 100).toFixed(2)} ${this.currency}`;
    }
    addSong(s) {
        // History is needed to save [price, quantity ]at that price
        this.songs.push({ song: s, history: [[this.price, 0]] });
    }
    playlist() {
        let start = `${this.name}'s playlist: \n====================`;
        let songs = "";
        this.songs.forEach((s, index) => (songs += `\n${index + 1}. ${s.song} (${s.history.reduce((t, i) => t + i[1], 0)})`));
        return start + songs + `\n====================`;
    }
    playSong(s) {
        this.songs[s].history.at(-1)[1]++;
        return `Playing song: ${this.songs[s].song}.`;
    }
    fortune() {
        const total = this.songs.reduce((t, s) => t + s.history.reduce((t, pq) => t + pq[0] * pq[1], 0), 0);

        return `Total lifetime wealth of ${this.name} is ${(total / 100).toFixed(2)} ${this.currency} right now!`;
    }
}

export { Artist };
