import React, {Component} from 'react';
import style from './letter.css';

class Letter extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div className={style['letter']}>L</div>;
    // if (!this.props.shown) {
    //   return <div className={style['empty-letter']} />
    // }
    // return <div className={style["existing-letter"]}>{this.props.char}</div>
  };
  
}

export default Letter;
