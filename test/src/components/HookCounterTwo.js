import React, { useState } from 'react'

function HookCounterTwo() {
    const initialcount = 0;
    const [count,setCount] = useState(initialcount);

    const Decrement = ()=>{
        if(count <= 0){
            setCount(0);
        }
        else{
            setCount(count - 1);
        }
    }

  return (
    <div>
       Count:{count}
       <button onClick={()=>setCount(0)}>Reset</button> 
       <button onClick={()=>setCount(initialcount + 1)}>Increment</button>
       <button onClick={Decrement}>Decrement</button>
    </div>
  )
}

export default HookCounterTwo