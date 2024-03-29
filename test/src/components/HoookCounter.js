import React, { useState,useEffect } from 'react'

function HoookCounter() {
const [count,setCount] = useState(0);
const [name,setName] = useState('');
useEffect(()=>{
    document.title = `you clicked ${count} times`
},[count])

  return (
    <div>
        <input type="text" value={name} onChange={e=>setName(e.target.value)}/>
        <button onClick={()=>setCount(count+1)}>Clicked {count} Times</button>
    </div>
  )
}

export default HoookCounter