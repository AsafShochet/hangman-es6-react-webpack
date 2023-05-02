import React, { Component } from 'react';
import './user-interaction.css';

class UserInteraction extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange() {
    // eslint-disable-next-line no-restricted-globals
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.handleLetterSubmit(this.state.value);
    this.setState({ value: '' });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className='user-interaction'>

        <label className="instruction">
          Enter a letter
        </label>
        <div className="input-letter">
          <input type="text" value={this.state.value} onChange={this.handleChange} maxLength={1} disabled={!this.props.enableAnswering}/>
        </div>
        <div className="submit-button">
          <input type="submit" value="Submit" />
        </div>
      </form>
    )
  };

}

export default UserInteraction;
