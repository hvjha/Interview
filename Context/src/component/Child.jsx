import React from 'react'

const Child = (props) => {
  return (
    <div>
        <h1>Your name is {props.name}</h1>
        <h1>Your count is {props.count}</h1>
    </div>
  )
}

export default Child