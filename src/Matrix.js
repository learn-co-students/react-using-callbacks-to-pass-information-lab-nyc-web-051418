import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {
  
  constructor() {
    super()
    this.state = {
      selectedColor: ''
    }
  }

  getCurrentColor() {
    debugger; 
    return this.state.selectedColor;
  }

  setColor(currentColor) {
    this.setState( {
      selectedColor: currentColor
    });
  }
  
  genRow = (vals) => (
    vals.map(val => <Cell matrixColorGetter={this.getCurrentColor.bind(this)} color={val} />)
  )
  
  genMatrix = () => (
    this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  )

  
  render() {
    return (
      <div id="app">
        <ColorSelector colorSetter={this.setColor.bind(this)} />
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
