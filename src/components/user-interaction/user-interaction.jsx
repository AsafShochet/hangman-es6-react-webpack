import React, { Component } from 'react';
import style from './user-interaction.css';

class UserInteraction extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value : ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange() {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.handleLetterSubmit(this.state.value);
    this.setState({value: ''});
  }

  render() {
    return (
      <div className={style["user-interaction"]}>
        <div className="instruction">
          Enter a letter
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="input-letter">
            <input type="text" value={this.state.value} onChange={this.handleChange} maxLength={1} />
          </div>
          <div className="submit-button">
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div >
    )
  };

}

export default UserInteraction;
