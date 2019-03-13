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
      films: {}
    }
  }


  componentDidMount() {
    const url = "https://swapi.co/api/films"
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({
        films: data.results
      })
  })
}


  enterApp = () => {
    this.setState({
      pageStatus: 'home'
    })
  }


  render() {
    switch(this.state.pageStatus) {
      case('home'):
        return (
          <div className="home-page">
            <Header />
            <FilterControls />
          </div>
        );
      default:
        return (
          <div>
            <Splash enterApp={this.enterApp}/> 
          </div>
        )   
    }
  }   

}
  

export default App;
