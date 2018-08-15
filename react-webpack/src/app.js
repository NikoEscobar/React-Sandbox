'use strict'

import React, { Component } from 'react'
import Title from './title'
import Square from './square'
import Button from './button'

class App extends Component {
  render () {
    return (
      <div className='container'>
        <h1>Titulo do Componente do React com babel e jsx</h1>
        <span>Texto do Componente do React com babel e jsx</span>
        <Title texto='texto feito por prop' name='Nikolas' lastname='Escobar' />
        <label htmlFor='input' data-label='Label'>Input</label>
        <input type='text' id='input' aria-hidden={true} />
        <div>
          <span>Array de quadrados coloridos... , Click para saber a cor!</span>
          {['blue', 'red', 'green'].map((square, index) => (
            <Square key={index} color={square} />
          ))}
        </div>
        <Button>
          <span>Texto do botão</span>
        </Button>
      </div>
    )
  }
}

export default App
