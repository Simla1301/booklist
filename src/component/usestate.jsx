
import React, { useState } from 'react'

function Colors() {
    const [color,setColor] = useState("blue")
  return (
    <div>
      <h2>hello there {color}</h2>
      <button onClick={() => setColor("red")}>red</button>
    </div>
  )
}

export default Colors

