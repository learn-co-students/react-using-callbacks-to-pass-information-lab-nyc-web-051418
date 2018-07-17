import React, { Component } from 'react';

export default class ColorSelector extends Component {

  makeColorSwatches = () => (
    ["#F00", "#F80", "#FF0", "#0F0", "#00F", "#508", "#90D", "#FFF", "#000"].map((str, idx) => {
      let updateParent = () => {
        this.props.assignSelectedColor(str) }

      return <div key={idx} className="color-swatch" style={{backgroundColor: str}} onClick={updateParent}/>
    })
  )

/*  onClick = (updatedColorHex) => {
    this.props.assignSelectedColor(updatedColorHex)
  }


  //calling the method directly inside of html attributes.
  //could also create and call a "real" callback, but that seems redundant given the function has little functionality.

  //nevermind:" Render methods should be a pure function of props and state; constructor side-effects are an anti-pattern, but can be moved to `componentWillMount`."

  //Why does this matter if I have to access to this? Or do I not?

   */



  render() {
    return (
      <div id="colorSelector">
        {this.makeColorSwatches()}
      </div>
    )
  }

}
