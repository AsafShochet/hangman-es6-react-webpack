import React, { Component } from 'react';
import phase0 from '../../resources/images/0.jpg';
import phase1 from '../../resources/images/1.jpg';
import phase2 from '../../resources/images/2.jpg';
import phase3 from '../../resources/images/3.jpg';
import phase4 from '../../resources/images/4.jpg';
import phase5 from '../../resources/images/5.jpg';
import phase6 from '../../resources/images/6.jpg';
import phase7 from '../../resources/images/7.jpg';
import phase8 from '../../resources/images/8.jpg';
import phase9 from '../../resources/images/9.jpg';
import phase10 from '../../resources/images/10.jpg';
import winningImage from '../../resources/images/winning.jpg';
import './painted-status.css';

class PaintedStatus extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  _getImageByErrorCount(count) {
    switch (count) {
      case 0:
        return phase0;
      case 1:
        return phase1;
      case 2:
        return phase2;
      case 3:
        return phase3;
      case 4:
        return phase4;
      case 5:
        return phase5;
      case 6:
        return phase6;
      case 7:
        return phase7;
      case 8:
        return phase8;
      case 9:
        return phase9;
      case 10:
        return phase10;
      default:
        return phase10;
    }
  }

  _getWinningImage() {
    return winningImage;
  }
  render() {
    let errors = this.props.errorCount;
    return <div className='painted-status'>
      <img src={this.props.didUserWin ? this._getWinningImage() : this._getImageByErrorCount(errors)} />
    </div>;
  };

}

export default PaintedStatus;
