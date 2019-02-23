export default class UserStateService {

    constructor() {
        this.errorCount = 0;
        this.attemptsCount = 0;
        this.guessedLetters = [];
    }

    getErrorCount() {
        return this.errorCount;
    }

    getAttemptsCount() {
        return this.attemptsCount;
    }

    getGuessedLetters() {
        return this.guessedLetters;
    }   
}