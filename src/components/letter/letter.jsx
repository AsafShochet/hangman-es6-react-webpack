import React, { Component } from 'react';
import style from './letter.css';

class Letter extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div className={style['letter']}> {this.props.show ? this.props.char : ''}</div>;
  };

}

export default Letter;
