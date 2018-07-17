import React, { Component } from 'react';

export default class ColorSelector extends Component {

  constructor(props) {
    super(props)
    this.setSelectedColor = this.props.setSelectedColor
  }

  makeColorSwatches = () => (
    ["#F00", "#F80", "#FF0", "#0F0", "#00F", "#508", "#90D", "#FFF", "#000"].map((str, idx) => {
      return <div key={idx} className="color-swatch" style={{backgroundColor: str}}/>
    })
  )

  getSelectorColor = (e) =>
     this.setSelectedColor(e.target.style.backgroundColor)

  render() {
    return (
      <div onClick={this.getSelectorColor} id="colorSelector">
        {this.makeColorSwatches()}
      </div>
    )
  }

}
