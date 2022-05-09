import React, {  useState } from 'react'

export const UseStateComponent = () => {
    
    const [count,setCount]=useState(0)

    const handleAdd = ()=> {
        setCount(count+1)
    }
    const handleSub = ()=> {
        setCount(count-1)
    }
    const handleReset = ()=> {
        setCount(0)
    }
    
  return (
    <div>
        <h1>Use state hook goes here... </h1>
        <p>
            Click bellow and count is : {count}
        </p>
        <button onClick={handleAdd}>
            ADD +  
        </button>
        <button onClick={handleSub}>
            SUB - 
        </button>
        <button onClick={handleReset}>
            RESET
        </button>
    </div>
  )
}

