import React, { Component } from 'react';

class FilterControls extends Component {
  constructor() {
    super()
  }

  render(){
    return (
      <div>
        <button>People</button>
        <button>Planets</button>
        <button>Vehicles</button>
      </div>
    )
  }

}


export default FilterControls; 