import React, { Component } from 'react';
import './App.css';
import FilterControls from './FilterControls'
import Splash from './Splash'

class App extends Component {
  constructor() {
    super()
    this.state = {
      pageStatus: 'splash'
    }
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
          <div>
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
