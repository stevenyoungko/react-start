import React from 'react'
import './styles/style.css'

const App = () => {
  let friends = ['steven', 'mary', 'sean']
  return (
    <div>
      <h1 style={{ fontSize: '20px', backgroundColor: 'black' }}>{ Math.random() * 100 }</h1>
      <p>My friends are:</p>
      { friends.map(firend => (
        <p>{ firend }</p>) 
      )}
    </div>
  )
}

export default App