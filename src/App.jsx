import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import GameWrapper from './components/game-wrapper/game-wrapper';
import WordGenerator from './services/word-generator';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};  

  }

  // getting the word from the "server"
  // this is the place to get the user state from the server once it will be saved
  componentDidMount() {
    WordGenerator.getRandomWord()
      .then((word) => {
        this.setState({ 'word': word });
      })
      .catch((err) => {
        console.error('that is weird.. no error should happen here', err);
      });
  }

  render() {
    if (!this.state || !this.state.word) {
      return <div></div>;
    }

    return (
      <div className="app">
        <GameWrapper word={this.state.word}  />
      </div>
    );
  }
}

export default hot(module)(App);
