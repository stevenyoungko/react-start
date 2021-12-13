import React from 'react'

const App = () => {
  let friends = ['steven', 'mary', 'sean']
  return (
    <div>
      <h1>{ Math.random() * 100 }</h1>
      <p>My friends are:</p>
      { friends.map(firend => <p>{ firend }</p>) }
    </div>
  )
}

export default App