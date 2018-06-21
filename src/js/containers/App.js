import React, { Component } from "react";
import url from 'url';
import Letter from '../components/Letter'

export default class App extends Component {
  constructor() {
    super()
    const word = url.parse(window.location.href, true).query.word || ""
    const wordArray = word.split('')

    this.state = { wordArray }

  }


  changeLetter(symbol, i) {
    let charCode = symbol.charCodeAt()
    const arrSymbols = [...this.state.wordArray]
    const charCodes = { A: 65, Z: 90, a: 97, z: 122 }

    if (charCode >= charCodes.a && charCode <= charCodes.z) {
      charCode = charCode === charCodes.z ? charCodes.a : charCode + 1
    } else if (charCode >= charCodes.A && charCode <= charCodes.Z) {
      charCode = charCode === charCodes.Z ? charCodes.A : charCode + 1
    }

    arrSymbols[i] = String.fromCharCode(charCode)

    this.setState({ wordArray: arrSymbols })
  }

  render() {
    /* eslint-disable */
    return this.state.wordArray.map((val, i) => <Letter key={i} symbol={val} letterClick={this.changeLetter.bind(this, val, i)} />)

  }
}