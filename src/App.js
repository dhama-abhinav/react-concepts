import { useEffect, useState } from 'react';
import './App.css';
import AppClass from './components/AppClass';
import { FetchUrlAndDisplay } from './components/FetchUrlAndDisplay';
import { useFetchUrl } from './components/useFetchUrl';
import { UseReducerHook } from './components/UseReducerHook';
import { UseRefComponent } from './components/UseRefComponent';
import { UseStateComponent } from './components/UseStateComponent';
import { JokeGenerator } from './JokeGenerator';

function App() {

  const [input ,setInput] = useState('')
  const [updatedWidth,setUpdatedWidth]=useState(window.innerWidth)

  const data = useFetchUrl("https://jsonplaceholder.typicode.com/todos");
  const handleChange = (e)=>{
    setInput(e.target.value)
  }

 
  //on every render
  // useEffect( ()=>{
  //   console.log('I will render everytime page loads or user interacts')
  // })

  //on first render  ::: componentWillMount alternative
  // useEffect( ()=>{
  //   console.log('I rendered for first time')
  // },[])

  //on first render + whenever any dependency changes 
  // useEffect(()=>{
  //   console.log('I rendered on dependency changes')
  // },[input])


  //componentWillUnmount() alternative
  // useEffect(()=>{
  //   console.log('attach event listener')
  //   window.addEventListener('resize',updateWindowWidth)

  //   return ()=>{
  //     //when component unmounts, this piece of code will run
  //     console.log('Detach listener')
  //     window.removeEventListener('resize',updateWindowWidth)
  //   }
  // },[updatedWidth] )

  const updateWindowWidth = ()=>{
    setUpdatedWidth(window.innerWidth)
  }

  return (
    <div className="app">
      <h1>Hello world</h1>
      <input type="text" value={input} onChange={handleChange} />
      <UseStateComponent />
    
      <br />
      <h1>
        Counter in class component
      </h1>
      <AppClass />
      <br />
      <UseReducerHook />
      <br />
      <h1>
        USEREF HOOK
      </h1>
      <UseRefComponent />

      <br /><br />
      <JokeGenerator />

      <br />
      <br />
      {/* <FetchUrlAndDisplay /> */}
      {
        data && data.map( (d)=>(
          <li key={d.id}>
            {d.title}
          </li>
        ))
      }


      <br /> <br /> <br />
    </div>
  );
}

export default App;


// currying in JS
// const multiply = (x)=>{
// 	return (y)=>{
//    console.log(x*y)
//   }
// }
// multiply(2)(3)