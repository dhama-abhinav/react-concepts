import React, { useReducer } from 'react'

export const UseReducerHook = () => {
    const initialState = 0
     const [state, dispatch] = useReducer(reducer ,initialState)
  return (
    <div>
        <p>
            {state}
        </p>
        <button onClick={()=> dispatch('INCREMENT')} >ADD</button>
        <button onClick={()=> dispatch('DECREMENT')} >SUB</button>
        <button onClick={()=> dispatch('RESETTOZERO')} >RESET</button>
    </div>
  )
}

export const actionTypes = {
    INC : 'INCREMENT',
    DEC: 'DECREMENT',
    RESET : 'RESETTOZERO'
}
export const reducer = (state ,action )=>{
    console.log(action)
    switch(action){
        case  actionTypes.INC :
            return state+1;
        case  actionTypes.DEC :
            return state-1;
        case  actionTypes.RESET :
            return 0
        default :
         throw new Error('Unexpected action')
    }

}