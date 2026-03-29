import React, { useState } from 'react'
import Child from './Child'
import Form from './Form'

const Test = () => {
    const name = "Harsh"
    const[count,setCount]=useState(0)
  return (
    <div>
        <h1>Welcome to React Interview {name}</h1>
        <p>Counter:{count}</p>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <Child name={name} count={count}/>
        <Form/>
    </div>
  )
}

export default Test