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

export default Title
