import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()
    this.state = {
      color: null
    }
  }

  genRow = (vals) => (
    vals.map(val => <Cell color={val} currentColor={this.getSelectedColor}/>)
  )

  genMatrix = () => (
    this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  )

  setSelectedColor = (newColor) => {
    this.setState({
      color: newColor
    })
  }

  getSelectedColor = () => {
    return this.state.color
  }

  render() {
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
