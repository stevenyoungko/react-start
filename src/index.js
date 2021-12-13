import React from 'react'
import ReactDOM from 'react-dom'

// JSX
function App() {
  return (
    <div>
      <h1>My Profile</h1>  
      <p>My name is Steven Ko</p>
      <button>Check my profile.</button>
    </div>
  )
}

ReactDOM.render(App(), document.querySelector('#root'))