import React, { Component } from 'react';
import style from './game-wrapper.css';
import GameStatus from '../game-status/game-status';
import UserInteraction from '../user-interaction/user-interaction';

class GameWrapper extends Component {

  constructor(props) {
    super(props);
    console.log(this.props.word, this.props.userStateService);
    console.log('*********** this.props.UserStateService', this.props.userStateService);
    this.state = {};
    this.errorCount = this.props.userStateService.getErrorCount();
    this.guessedLetters = this.props.userStateService.getGuessedLetters();
    this.word = this.props.word;
    
  }

  render() {
    return (
      <div className={style["game-wrapper"]}>
        <GameStatus errorCount={this.errorCount} word={this.word} guessedLetters={this.guessedLetters}/>
        <UserInteraction />
      </div>
    );
  };
}

export default GameWrapper;