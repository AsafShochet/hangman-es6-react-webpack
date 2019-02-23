import React, { Component } from 'react';
import style from './user-interaction.css';

class UserInteraction extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={style["user-interaction"]}>
        <div className="instruction">
          Enter a letter
        </div>
        <div className="input-letter">
          <input type="text" name="input-letter" maxLength={1}/>
        </div>
        <div className="submit-button">
          <button text="submit">submit</button>
        </div>
      </div>
    )
  };

}

export default UserInteraction;
