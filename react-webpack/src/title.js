'use strict'

import React from 'react'

const Title = ({ name, lastname, texto }) => (
  <div>
    <h1>Texto do componente titulo.js</h1>
    <h1>{texto}</h1>
    <h1>Texto fixo {`${name} ${lastname}`}!</h1>
    <h1>Texto com dados não strings {15}</h1>
  </div>
)

Title.defaultProps = {
  name: 'Desconhecido',
  lastname: 'Sem sobrenome'
}

/* const Title = React.createClass({
  getDefaultProps: function () {
    return {
      name: 'desconhecido',
      lastname: 'Sem sobrenome'
    }
  },

  render: function () {
    return (
      <div>
        <h1>Texto do componente titulo.js</h1>
        <h1>{this.props.texto}</h1>
        <h1>Texto fixo {this.props.name + ' ' + this.props.lastname}!!!!</h1>
        <h1>Texto com dados não strings {15}</h1>
      </div>
    )
  }
}) */

export default Title
