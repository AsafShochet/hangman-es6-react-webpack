export default class UserStateService {
  constructor() {
    this.errorCount = 0;
    this.attemptsCount = 0;
    this.guessedLetters = [];
    this.gameOver = false;
    this.userWon = false;
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

  addGuessedLetter(letter) {
    if (this.guessedLetters.indexOf(letter) === -1) {
      this.guessedLetters.push(letter);
    }
  }

  addErrorToCounter() {
    this.errorCount += 1;
  }

  addAttemptToCount() {
    this.attemptsCount += 1;
  }

  getUserWon() {
    return this.userWon;
  }

  setUserWon(didTheUserWin) {
    this.userWon = didTheUserWin;
  }

  setGameOver(gameOver) {
    this.gameOver = gameOver;
  }

  isGameOver() {
    return this.gameOver;
  }
}
