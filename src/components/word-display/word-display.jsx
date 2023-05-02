import React, { Component } from 'react';
import Letter from '../letter/letter';
import './word-display.css'
class WordDisplay extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return <div className='word-display'>
      {this.renderWord()}
    </div>
  };

  renderWord() {
    let word = this.props.word;
    let guessed = this.props.guessedLetters;
    console.log('********* guessed ***********', guessed);
    return word.split('').map((letter) => {
      return <Letter char={letter} key={Math.random()} show={guessed.indexOf(letter) > -1 ? true : false} />
    })
  }

}

export default WordDisplay;
