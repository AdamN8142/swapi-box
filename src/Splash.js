import React, { Component } from 'react';
import "./Splash.css"

class Splash extends Component {

  handleClick = (event) => {
    event.preventDefault();
    this.props.enterApp();
  }

  render() {
    return (
      <div>
        <button className="enter-button" onClick={this.handleClick}>ENTER</button>
        <div className="fade">
          <div className="star-wars">
            <div className="crawl">
              <div className="name-and-date">
                <h1>{this.props.filmScroll.title}</h1>
                <p>{this.props.filmScroll.release_date}</p>
              </div>
              <p>{this.props.filmScroll.opening_crawl}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Splash;

