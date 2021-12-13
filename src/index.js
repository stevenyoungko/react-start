import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Nav from './nav'

ReactDOM.render(
  <React.StrictMode>
    <Nav />
    <App />
  </React.StrictMode>, 
  document.querySelector('#root')
)