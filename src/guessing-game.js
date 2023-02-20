class GuessingGame {
    constructor() {
        this.min = 0
        this.max = 0
        this.mid = 0
    }
    setRange(min, max) {
        // this method accepts min and max value of range of number to guess
        this.min = min;
        this.max = max;
    }

    guess() {
        // this method returns solution candidate
        // (you make an assumption based on range and previous assumptions)

        return Math.ceil((this.min + this.max) / 2);
    }

    greater() {
        // this method is called if prev call of guess()
        // returned number which is greater than answer
        this.setRange(this.guess(), this.max)
    }

    lower() {
        // this method is called if prev call of guess()
        // returned number which is lower than answer
        this.setRange(this.min, this.guess())
    }
}

module.exports = GuessingGame;
// const game = new GuessingGame();
// console.log(game)