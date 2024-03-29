import React, { useEffect, useState } from 'react'

function HookMouse() {
  const [x,setX] = useState();
  const [y,setY] = useState();

  const logMousepos = (e)=>{
    setX(e.clientX);
    setY(e.clientY);
  }

  useEffect(()=>{
    window.addEventListener('mousemove',logMousepos) 
  },[])
  return (
    <div>
        hooks - {x} - {y};
    </div>
  )
}

export default HookMouse