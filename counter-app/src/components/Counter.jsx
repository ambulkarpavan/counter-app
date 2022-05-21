import React, { useState } from 'react'
import Styles from "./counter.module.css"

const Counter = ({initalValue}) => {

    const [count, setCount]= useState(initalValue)
  return (
     
    <div>
        <h3 className={ count%2 ? Styles.color : "green"}>Count :{count}  </h3>
        <button onClick={() => setCount(count+1)}>Increment</button>
        <button onClick={() => setCount(count-1)}>Decrement</button>
        <button onClick={() => setCount(count*2)}>Double</button>
    </div>
  )
}

export default Counter