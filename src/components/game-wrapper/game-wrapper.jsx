import React, { Component } from 'react';
import GameStatus from '../game-status/game-status';
import UserInteraction from '../user-interaction/user-interaction';
import UserStateService from '../../services/UserStateService';
import './game-wrapper.css';

class GameWrapper extends Component {

  constructor(props) {
    super(props);
    this.word = this.props.word;
    // a stateful service to hold the user state
    this.userState = new UserStateService();
    this.state = {
      errorCount: this.userState.getErrorCount(),
      userWon: this.userState.getUserWon(),
      isGameOver: false,
      guessedLetters: this.userState.getGuessedLetters()
    };
    this.onLetterSubmit = this.onLetterSubmit.bind(this);
  }

  isWordComplete(word, guessedLetters) {
    for (var i = 0; i < word.length; i++) {
      console.log('letter: ',word[i],', guessedLetters: ', guessedLetters);
      if (guessedLetters.indexOf(word[i]) === -1) {
        console.log('guessedLetters.indexOf(letter[i]: ', guessedLetters.indexOf(word[i]), 'letter[i]: ', word[i]);
        return false;
      }
    };
    return true;
  }

  onLetterSubmit(letter) {
    // update guessed letter
    this.userState.addGuessedLetter(letter);
    this.userState.addAttemptToCount();
    if (this.word.split('').indexOf(letter) == -1) {
      this.userState.addErrorToCounter();
      if (this.userState.getErrorCount() === 10) {
        this.userState.setUserWon(false);
        this.userState.setGameOver(true);
      }
    } else {
      // check if the user won
      if (this.isWordComplete(this.word, this.userState.getGuessedLetters())) {
        console.log('word complete!!');
        this.userState.setUserWon(true);
        this.userState.setGameOver(true);
      }
    }

    this.setState({
      errorCount: this.userState.getErrorCount(),
      userWon: this.userState.getUserWon(),
      isGameOver: this.userState.isGameOver(),
      guessedLetters: this.userState.getGuessedLetters()
    })

  }

  render() {
    return (
      <div className='game-wrapper'>
        <GameStatus errorCount={this.state.errorCount} word={this.word} guessedLetters={this.state.guessedLetters} didUserWin={this.state.userWon}/>
        <UserInteraction enableAnswering={!this.state.isGameOver} handleLetterSubmit={this.onLetterSubmit} />
      </div>
    );
  };
}

export default GameWrapper;