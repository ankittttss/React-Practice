// userReducer is a hoook that maintains our state
// useReducer is related to reducer functions
// useReducer(reducer,initialState);
//reducer(currentState,action)

import React,{ useReducer } from "react"

const initialState = {
 firstCounter:0
}

const reducer = (state,action)=>{
    switch(action.type){
      case 'increment': return {firstCounter:state.firstCounter + 1};
      case 'decrement': return {firstCounter:state.firstCounter - 1};
      case 'reset': return initialState;
      default: return state
    }
}


const Reducer2 = () => {
   const [count,dispatch] = useReducer(reducer,initialState)

  return (
    <div>
        <div>
            {count.firstCounter}
        </div>
        <button onClick={()=>dispatch({type:'increment',})}>Increment</button>
        <button onClick={()=>dispatch({type:'decrement'})}>Decrement</button>   
        <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
    </div>
  )
}

export default Reducer2;