import React, { Component } from 'react';
import './letter.css';

class Letter extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div className='letter'> {this.props.show ? this.props.char : '_'}</div>;
  };

}

export default Letter;
