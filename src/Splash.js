import React, { Component } from 'react';

class Splash extends Component {
  constructor() {
    super()
}

  handleClick = (event) => {
    event.preventDefault();
    this.props.enterApp();
  }

  render() {
    return(
      <div>
        <button onClick={this.handleClick}>ENTER</button>
      </div> 
    )
  }
}

export default Splash; 