import React, { Component } from 'react';
import style from './game-wrapper.css';
import GameStatus from '../game-status/game-status';
import UserInteraction from '../user-interaction/user-interaction';

class GameWrapper extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={style["game-wrapper"]}>
        <GameStatus />
        <UserInteraction />
      </div>
    );
  };
}

export default GameWrapper;
