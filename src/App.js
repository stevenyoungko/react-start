import React, { useState } from 'react'
import './styles/style.css'
import Friend from './Friend'

const App = () => {
  let friends = [
    { name: 'Steven', age: 17, desc: 'Steven is a good guy.' },
    { name: 'Apple', age: 17, desc: 'Apple is a good guy.'}
  ]

  const buttonHandler = e => {
    e.preventDefault()
    let date = new Date().toLocaleDateString()
    alert(date)
  }

  const buttonHandler2 = msg => {
    alert(msg)
  }

  let [patName, setName] = useState('Dog')
  const changePatNameHandler = () => {
    setName('Cat')
  }

  return (
    <div>
      <h1 style={{ fontSize: '20px', backgroundColor: 'black' }}>
        { Math.random() * 100 }
      </h1>
      <p>My friends are:</p>
      { friends.map(friend => (
        <Friend name={friend.name} age={friend.age} desc={friend.desc} />
      ))}
      <hr />

      <div>
        <from action="">
          <input type="text" />
          <button onClick={buttonHandler}>Submit</button>
        </from>
        
        {/* 一般button要包 arrow func 不然會先被觸發 */}
        <button onClick={() => {buttonHandler2('123')}}>Submit2</button>
      </div>

      <hr />
      <div>
        <h1>{patName}</h1>
        <button onClick={changePatNameHandler}>Change Name</button>
      </div>
    </div>
  )
}

export default App