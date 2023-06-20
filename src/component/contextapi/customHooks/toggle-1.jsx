import React from 'react'
import UseToggle from './useToggle'

const Toggle = () => {
    // const [show, setShow] = useState(false)
    const {show ,toggle} = UseToggle(true)

    // const handleToggle = () => {
    //     setShow(!show)
    // }
  return (
    <div>
      <h3>Toggle custom Hook</h3>
      <button onClick={toggle}>Toggle</button>
      {show && <h3>You are logged in</h3>}
    </div>
  )
}

export default Toggle
