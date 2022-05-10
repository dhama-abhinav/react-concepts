import { useEffect, useState } from 'react'

const useRandomJoke = (fname,lname) => {
    const [joke,setJoke]=useState('')
    useEffect(()=>{

        const fetchJoke = async ()=> {
          await fetch(`https://api.icndb.com/jokes/random/?firstName=${fname}&lastName=${lname}`)
          .then( res => res.json())
          .then( data => {
            //console.log(data.value.joke)
             setJoke(data.value.joke)
          })
        }
        fetchJoke()
      },[fname,lname])
  return joke
}

export default useRandomJoke