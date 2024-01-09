import React, { useState } from 'react'
import './App.css'

function App() {
  const [name,setName] = useState(0)
  return (
    <div>
      <center>
        <h1>Counter App</h1>
        <h1 className='number'>{name}</h1>
        <button onClick={() => setName(name + 1)} className='buttons'>+</button>
        <button className='buttons' onClick={() => setName(name - 1)}>-</button>
        <button className='buttons'onClick={() => setName(0)}>Reset</button>
      </center>
    </div>
  )
}

export default App
