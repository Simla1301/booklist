import React, { useRef } from 'react'

const UseREf = () => {
    const InputRef = useRef()
    const handleClick =() => {
        InputRef.current.focus()
    }
  return (
    <div>
      <input type='file' ref={InputRef} />
      <button onClick={handleClick}>focus</button>
    </div>
  )
}

export default UseREf
