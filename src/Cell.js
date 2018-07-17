import React, { Component } from 'react';

export default class Cell extends Component {

  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }

  onClick = (event) => {
    this.setState({
      color: this.props.currColor
    })
  }



  render() {
    return (
      <div className="cell" style={{backgroundColor: this.state.color}} onClick={this.onClick}>
      </div>
    )
  }

}
