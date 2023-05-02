import React, { Component } from 'react';
import PaintedStatus from '../painted-status/painted-status';
import WordDisplay from '../word-display/word-display';
import './game-status.css';

class GameStatus extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={"game-status"}>
        <PaintedStatus errorCount={this.props.errorCount} didUserWin={this.props.didUserWin}/>
        <WordDisplay word={this.props.word} guessedLetters={this.props.guessedLetters}/>
      </div>
    )
  };

}

export default GameStatus;
