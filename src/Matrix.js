import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'
import uuid from 'uuid'

export default class Matrix extends Component {

  constructor() {
    super()
    this.state = {
      currColor: "#FFF"
    }
  }

  genRow = (vals, rowIdx) => (
    vals.map((val,colIdx) => <Cell key={`${rowIdx}-${colIdx}`} color={val} currColor={this.state.currColor}/>)
  )

  genMatrix = () => (
    this.props.values.map((rowVals,rowIdx) => <div className="row">{this.genRow(rowVals, rowIdx)}</div>)
  )

  currentColor = (color) => {
    this.setState({
      currColor: color
    })
  }

  // shouldComponentUpdate(){
  //   return false
  // }


  render() {
    console.log(this.state.currColor)
    return (
      <div id="app">
        <ColorSelector currentColor={this.currentColor}/>
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
