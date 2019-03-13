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
        <h1>{this.props.filmScroll.title}</h1>
        <p>{this.props.filmScroll.opening_crawl}</p>
        <p>{this.props.filmScroll.release_date}</p>
      </div> 
    )
  }
}

export default Splash; 

