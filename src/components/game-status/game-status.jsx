import React, { Component } from 'react';
import style from './game-status.css';
import PaintedStatus from '../painted-status/painted-status';
import WordDisplay from '../word-display/word-display';

class GameStatus extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={style["game-status"]}>
        <PaintedStatus errorCount={this.props.errorCount} />
        <WordDisplay word={this.props.word} guessedLetters={this.props.guessedLetters}/>
      </div>
    )
  };

}

export default GameStatus;
