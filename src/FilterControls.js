import React, { Component } from 'react';
import './FilterControls.css';

class FilterControls extends Component {
  constructor() {
    super()
  }

  render(){
    return (
      <div className="button-container">
        <button className="people-button button">People</button>
        <button className="planets-button button">Planets</button>
        <button className="vehicles-button button">Vehicles</button>
      </div>
    )
  }
}


export default FilterControls; 