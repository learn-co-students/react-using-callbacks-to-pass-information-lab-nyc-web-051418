import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()
    this.state = {selectedColor: '#fff'}
  }

  passSelectedColor = () => {
    debugger;
    console.log(this.state.selectedColor)
    return this.state.selectedColor
  }

  setSelectedColor = (hexColor) =>
      this.setState({selectedColor: hexColor})

  genRow = (vals) => (
    vals.map(val => <Cell color={val} passSelectedColor={this.passSelectedColor} />)
  )

  genMatrix = () => (
    this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  )


  render() {
    console.log("MATRIXselectedColor", this.state.selectedColor)
    return (
      <div id="app">
        <ColorSelector setSelectedColor={this.setSelectedColor}/>
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }

}

Matrix.defaultProps = {
  values: chromeBoi
}
