import React, { Component } from 'react';

class Splash extends Component {
  
  handleClick = (event) => {
    event.preventDefault();
    this.props.enterApp();
  }

  render() {
    return(
      <div>
        <button onClick={this.handleClick}>ENTER</button>
        <h1>{this.props.filmScroll.created}</h1>
      </div> 
    )
  }
}

export default Splash; 