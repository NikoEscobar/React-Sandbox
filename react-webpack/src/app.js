'use strict'

// var React = require('react')
import React, { Component } from 'react'
import Title from './title'
import Square from './square'
import Button from './button'
import Timer from './timer'

class App extends Component {
  constructor () {
    console.log('constructor app')
    super()
    this.state = {
      text: 'Ainda não foi clicado',
      color: 'purple',
      showTimer: true,
      time: 0,
      value: 'Valor inicial',
      checked: false
    }
  }

  componentWillMount () {
    console.log('componentWillMount app')
  }

  componentDidMount () {
    console.log('componentDidMount app')
  }

  render () {
    console.log('render app')
    return (
      <div className='container'>
        <h1><span>Titulo do Componente do React com babel e jsx</span></h1>
        <span>Texto do Componente do React com babel e jsx</span>
        <Title texto='texto feito por prop' name='Nikolas' lastname='Escobar' />
        <label htmlFor='input' data-label='Label'>Input</label>
        <input type='text' id='input' aria-hidden />
        <div>
          <span>Array de quadrados coloridos... , Click para saber a cor!</span>
          {['blue', 'red', 'green'].map((square, index) => (
            <Square key={index} color={square} />
          ))}
        </div>
        <span>Trocando texto default do botão por click: </span>
        <Button handleClick={() => console.log('foi clicado')}>
          <span onClick={() => this.setState({
            text: 'Texto setado pelo click'
          })}>
            {this.state.text}
          </span>
        </Button>
        <div>
          <span>Trocando cor do quadrado por botão e mantendo a função de click anterior</span>
          <Square color={this.state.color} />

          {['red', 'green', 'blue'].map((color) => (
            <Button
              key={color}
              handleClick={() => this.setState({ color })}>
              {color}
            </Button>
          ))}
        </div>
        <div>
          <span>Testando um timer: Resetando e escondendo ele por botão</span>
          { this.state.showTimer && <Timer time={this.state.time} />}

          <button onClick={() => {
            this.setState({ showTimer: !this.state.showTimer, time: this.state.time + 10 })
          }}>show / hide timer and change props</button>
        </div>
        <div>
          <span>Formulario editavel com react, Controlled Component</span>
          <form>
            <input type='text' value={this.state.value} onChange={(e) => {
              console.log(e.nativeEvent)
              console.log(e.target)
              this.setState({
                value: e.target.value
              })
            }} />
            <label>
              <input
                type='checkbox'
                value='my-checkbox'
                checked={this.state.checked}
                onChange={(e) => {
                  this.setState({ checked: !this.state.checked })
                }} />
                Checkbox
            </label>

            <input type='radio' name='rd' value='1' /> Radio 1
            <input type='radio' name='rd' value='2' /> Radio 2
          </form>
        </div>
        <div>
          <span>Formulario editavel com react, Uncontrolled Component</span>
          <form>
            <input type='text' defaultValue='Valor Inicial' />
            <label>
              <input
                type='checkbox'
                value='my-checkbox'
                defaultChecked />
                Checkbox
            </label>

            <input type='radio' name='rd' value='1' defaultChecked /> Radio 1
            <input type='radio' name='rd' value='2' /> Radio 2
          </form>
        </div>
      </div>
    )
  }
}

/* const App = React.createClass({
  render: function () {
    return (
      <div className='container'>
        <h1><span>Titulo do Componente do React com babel e jsx</span></h1>
        <span>Texto do Componente do React com babel e jsx</span>
        <Title texto='texto feito por prop' name='Nikolas' lastname='Escobar' />
        <label htmlFor='input' data-label='Label'>Input</label>
        <input type='text' id='input' aria-hidden={true} />
      </div>
    )

    // React.createElement('h1', null, [
    // React.createElement('span', null, 'React.createElement no array em span '),
    // React.createElement('i', null, 'React.createElement no array em italico')
    // ])
  }

/* function sum (val1,val2){
return val1+val2
} */
// }) */
// module.exports = ComponentDoReact
export default App
