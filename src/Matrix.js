import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()
    this.state = {
      selectedColor: "#f76565"
    }
  }

  assignSelectedColor = (updatedColorHex) => {
    this.setState({
      selectedColor: updatedColorHex
    })
  }

  findNewColor = () => (this.state.selectedColor)

  genRow = (vals) => (
    vals.map(val => <Cell color={val} findNewColor={this.findNewColor} />)
  )

  genMatrix = () => (
    this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  )


  render() {
    return (
      <div id="app">
        <ColorSelector assignSelectedColor={this.assignSelectedColor} />
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
