import React, { Component } from 'react';
import style from './game-wrapper.css';
import GameStatus from '../game-status/game-status';
import UserInteraction from '../user-interaction/user-interaction';
import UserStateService from '../../services/UserStateService';

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
    word.split('').forEach((letter) => {
      if (guessedLetters.indexOf(letter) === -1) {
        return false;
      }
    });
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
      <div className={style["game-wrapper"]}>
        <GameStatus errorCount={this.state.errorCount} word={this.word} guessedLetters={this.state.guessedLetters} />
        <UserInteraction enableAnswering={true} handleLetterSubmit={this.onLetterSubmit} />
      </div>
    );
  };
}

export default GameWrapper;