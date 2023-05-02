export default class WordGenerator {
  static _getPossibleWords() {
    return [
      'dog',
      'cat',
      'cow',
      'clown',
      'lion',
      'twice',
      'random',
      'javascript',
    ];
  }

  static getRandomWord() {
    // choosing a random word from all possible words
    let possibleWords = this._getPossibleWords();
    let index = Math.floor(Math.random() * possibleWords.length);
    let chosenWord = possibleWords[index];
    console.log('************* chosen word is ', chosenWord);
    // resolving a promise with the selected word
    return new Promise((resolve, reject) => {
      resolve(chosenWord);
    });
  }
}
