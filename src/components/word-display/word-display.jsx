import React, { Component } from 'react';
import Letter from '../letter/letter';
import style from './word-display.css'
class WordDisplay extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return <div className={style['word-display']}>
      {/* {this.renderWord()}  */}
      <Letter />
      <Letter />
      <Letter />
    </div>
  };

  renderWord() {
    let word = this.props.word;
    let guessed = this.props.guessedLetters;
    return word.split('').map((letter) => {
      return <Letter char={letter} shown={guessed.indexOf(letter) > -1 ? true : false} />
    })
  }

}

export default WordDisplay;
