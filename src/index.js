import React from 'react'
import ReactDOM from 'react-dom'

function App() {
  return React.createElement('div', null, [
    React.createElement('h1', { style: { color: 'red' }}, 'My Profile.'),
    React.createElement('p', null, 'My name is Mike Huang.'),
    React.createElement('button', null, 'Check my profile.')
  ])
}

ReactDOM.render(App(), document.querySelector('#root'))