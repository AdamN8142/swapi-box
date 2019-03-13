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
          films: data
        })
      })
      console.log(this.state)
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
              <Splash enterApp={this.enterApp} filmScroll={this.state.films.results[this.state.randomNum]}/> 
            </div>
          )
      }
      //WHY DO I NEED TO PUT RESULTS IN THE FILMSCROLL I AM PASSING DOWN AS PROPS 
    }

  }

}


export default App;
