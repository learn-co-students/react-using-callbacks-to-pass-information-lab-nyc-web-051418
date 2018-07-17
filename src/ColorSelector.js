import React, { Component } from 'react';

export default class ColorSelector extends Component {
  checkColorClicked(event) {
    this.props.colorSetter(event.target.dataset.color)
    debugger;
  }
  makeColorSwatches = () => (
    ["#F00", "#F80", "#FF0", "#0F0", "#00F", "#508", "#90D", "#FFF", "#000"].map((str, idx) => {
      return <div key={idx} className="color-swatch" data-color={str} onClick={this.checkColorClicked.bind(this)} style={{backgroundColor: str}}/>
    })
  )
  
  render() {
    return (
      <div id="colorSelector">
        {this.makeColorSwatches()}
      </div>
    )
  }
  
}
