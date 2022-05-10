import  { useEffect, useState } from 'react'

export const useFetchUrl = (url) => {
    const [data,setData]=useState(null)

    useEffect(()=>{
        fetch(url)
        .then( res=> res.json())
        .then( data =>setData(data))
    })
  return data
    
}
