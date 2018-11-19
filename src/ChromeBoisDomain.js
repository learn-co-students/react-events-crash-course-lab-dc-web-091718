import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'
const keyDownEffects = {a: "+", s: "-"}

export default class ChromeBoisDomain extends Component {
  handleMouseMove = (event) => {drawChromeBoiAtCoords(event.clientX, event.clientY)}


  // handleClick = (event) => {toggleCycling()}
  handleKeyDown = (event) => { resize(keyDownEffects[event.key])}

  render() {
    return (
      <canvas
        onMouseMove={this.handleMouseMove}
        onClick={toggleCycling()}
        onKeyDown={this.handleKeyDown}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
