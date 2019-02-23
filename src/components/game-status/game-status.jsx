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
        <PaintedStatus />
        <WordDisplay />
      </div>
    )
  };

}

export default GameStatus;
