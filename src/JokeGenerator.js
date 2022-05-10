
import React, { useRef, useState } from 'react'
import useRandomJoke from './components/useRandomJoke'

export const JokeGenerator = () => {
    const firstnameRef= useRef(null)
    const lastnameRef= useRef(null)

    const [fname,setFname]=useState('')
    const [lname,setLname]=useState('')

    const joke = useRandomJoke(fname,lname)

    const handleClick = (e)=>{
        e.preventDefault()
        setFname(firstnameRef.current.value)
        setLname(lastnameRef.current.value)

    }

  return (
    <div>
        <h1>The Joke Generator</h1>
        <h2>{joke}</h2>

        <form>
            {/* <input placeholder='first name' value={fname} onChange={(e)=> setFname(e.target.value)} />
            <input placeholder='last name' value={lname} onChange={(e)=> setLname(e.target.value)} /> */}
            <input placeholder='first name'ref={firstnameRef} />
            <input placeholder='last name' ref={lastnameRef} />
            <button onClick={handleClick}>Generate joke</button>
        </form>
    </div>
  )
}
