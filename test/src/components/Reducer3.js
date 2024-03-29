// userReducer is a hoook that maintains our state
// useReducer is related to reducer functions
// useReducer(reducer,initialState);
//reducer(currentState,action)

import React,{ useReducer } from "react"
const initialState = 0;

const reducer = (state,action)=>{
    switch(action){
      case 'increment': return state + 1;
      case 'decrement': return state - 1;
      case 'reset': return initialState;
      default: return state
    }
}


const Reducer3 = () => {
   const [count,dispatch] = useReducer(reducer,initialState);
   const [countTwo,dispatchTwo] = useReducer(reducer,initialState);

  return (
    <div>
        <div>
            {count}
        </div>
        <button onClick={()=>dispatch('increment')}>Increment</button>
        <button onClick={()=>dispatch('decrement')}>Decrement</button>   
        <button onClick={()=>dispatch('reset')}>Reset</button>
        <div>
            <div>
                {countTwo}
            </div>
        <button onClick={()=>dispatchTwo('increment')}>Increment2</button>
        <button onClick={()=>dispatchTwo('decrement')}>Decrement2</button>   
        <button onClick={()=>dispatchTwo('reset')}>Reset2</button>
        </div>
    </div>
  )
}

export default Reducer3;