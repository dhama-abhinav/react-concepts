import { useEffect, useState } from 'react';
import './App.css';
import { UseStateComponent } from './components/UseStateComponent';

function App() {

  const [input ,setInput] = useState('')
  const [updatedWidth,setUpdatedWidth]=useState(window.innerWidth)
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
  useEffect(()=>{
    console.log('I rendered on dependency changes')
  },[input])


  //componentWillUnmount() alternative
  useEffect(()=>{
    console.log('attach event listener')
    window.addEventListener('resize',updateWindowWidth)

    return ()=>{
      //when component unmounts, this piece of code will run
      console.log('Detach listener')
      window.removeEventListener('resize',updateWindowWidth)
    }
  },[updatedWidth] )

  const updateWindowWidth = ()=>{
    setUpdatedWidth(window.innerWidth)
  }

  return (
    <div className="app">
      <h1>Hello world</h1>
      <input type="text" value={input} onChange={handleChange} />
      <UseStateComponent />
    </div>
  );
}

export default App;
