import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import FilterControls from './FilterControls'
import Splash from './Splash'

class App extends Component {
  constructor() {
    super()
    this.state = {
      pageStatus: 'splash',
      films: [],
      randomNum: 0
    }
  }



  componentDidMount() {
    const url = "https://swapi.co/api/films"
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          films: data.results
        }, this.randomNumber())
      })
  }

  randomNumber = () => {
    let randomNumber = Math.floor((Math.random() * 6))
    this.setState({
      randomNum: randomNumber
    })

  }


  enterApp = () => {
    this.setState({
      pageStatus: 'home'
    })
  }


  render() {
    if (this.state.films.length === 0) {
      return (<div>Loading</div>)
    } else {
      switch (this.state.pageStatus) {
        case ('home'):
          return (
            <div className="home-page">
              <Header />
              <FilterControls />
            </div>
          );
        default:
          return (
            <div>
              <Splash enterApp={this.enterApp}  randomNum={this.state.randomNum} filmScroll={this.state.films[this.state.randomNum]}/> 
            </div>
          )
      }
    }
  }
}


export default App;
