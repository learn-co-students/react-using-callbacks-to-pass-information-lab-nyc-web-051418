import React, { Component } from 'react';
import chromeBoi from './data.js';
import Cell from './Cell.js';
import ColorSelector from './ColorSelector.js';

export default class Matrix extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedColor: '#FFF'
    };
  }

  changeColor = dataFromChild => {
    this.state.setState({
      selectedColor: dataFromChild
    });
  };

  getSelectedColor = () => this.state.selectedColor;

  genRow = vals =>
    vals.map(val => (
      <Cell color={val} getSelectedColor={this.getSelectedColor} />
    ));

  genMatrix = () =>
    this.props.values.map(rowVals => (
      <div className="row">{this.genRow(rowVals)}</div>
    ));

  render() {
    return (
      <div id="app">
        <ColorSelector changeColor={this.changeColor} />
        <div id="matrix">{this.genMatrix()}</div>
      </div>
    );
  }
}

Matrix.defaultProps = {
  values: chromeBoi
};
