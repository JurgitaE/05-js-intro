class Student {
    constructor(vardas, gimimoMetai) {
        this.name = vardas;
        this.birthYear = gimimoMetai;
        this.isMarried = false;
        this.shoes = 40;
        this.marks = [];
    }

    // Metodas, itraukiant nauja pazymi
    addMark(mark) {
        if (typeof mark !== "number" || !isFinite(mark) || mark < 1 || mark > 10 || mark % 1 !== 0) {
            return "Error";
        }
        this.marks.push(mark);
        return "OK";
    }

    marksAverage() {
        const correctMarks = this.marks.filter((m) => m >= 1 && m <= 10 && m % 1 === 0);

        if (correctMarks.length === 0) {
            return "neiskaita";
        }

        return correctMarks.reduce((t, m) => t + m, 0) / correctMarks.length;
    }

    marksAverage2() {
        let sum = 0;
        let correct = 0;

        for (const mark of this.marks) {
            if (mark >= 1 && mark <= 10 && mark % 1 === 0) {
                sum += mark;
                correct++;
            }
        }

        if (correct === 0) {
            return "neiskaita";
        }

        return sum / correct;
    }
}

export { Student };
