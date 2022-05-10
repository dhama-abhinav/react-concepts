import React, { useEffect, useState } from 'react'

export const FetchUrlAndDisplay = () => {
    const [data,setData]=useState(null)

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
          .then((res) => {
          return res.json()
          })
          .then((data) => { 
              //console.log(data)
              return setData(data)});
      }, []);
  return (
    <div>
        { data && data.map( (d)=>(
            <li key={d.id}>
                {d.title}
            </li>
        ))
        }
    </div>
  )
}
