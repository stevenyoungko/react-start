import React from 'react'
import './styles/style.css'
import Friend from './Friend'

const App = () => {
  let friends = [
    { name: 'Steven', age: 17, desc: 'Steven is a good guy.' },
    { name: 'Apple', age: 17, desc: 'Apple is a good guy.'}
  ]
  return (
    <div>
      <h1 style={{ fontSize: '20px', backgroundColor: 'black' }}>
        { Math.random() * 100 }
      </h1>
      <p>My friends are:</p>
      { friends.map(friend => (
        <Friend name={friend.name} age={friend.age} desc={friend.desc} />
      ))}
    </div>
  )
}

export default App