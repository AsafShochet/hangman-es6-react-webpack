import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import GameWrapper from './components/game-wrapper/game-wrapper';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="app">
        <GameWrapper />
      </div>
    );
  }
}

export default hot(module)(App);
