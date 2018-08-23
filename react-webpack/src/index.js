'use strict'

// var ComponentDoReact = require('./app')
import App from './app'

// var React = require('react')
import React from 'react'
// var ReactDOM = require('react-dom')
// import ReactDOM from 'react-dom'
import {render} from 'react-dom'
import {AppContainer} from 'react-hot-loader'

// var sum = require('./app')

const renderApp = (NextApp) => {
  render(
    <AppContainer>
      <NextApp />
    </AppContainer>,
    document.querySelector('[data-js="app"]')
    // React.createElement(ComponentDoReact), document.querySelector('[data-js="app"]')
  )
}

renderApp(App)

if (module.hot) {
  module.hot.accept('./app', () => {
    const NextApp = require('./app').default
    renderApp(NextApp)
  })
}

console.log('webpack esta funcionando!!')
/* console.log('função pega de outro arquivo:', sum(20,5))
console.log('função pega de outro arquivo: '+ sum(14,7)) */
