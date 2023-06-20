import React ,{useState}from 'react'


const UseEffect1 = () => {
  const [count,setCount] = useState(0)

  return (
    <>
    <div>
      <h2>value: {count}</h2>
    </div>

    <div>
      <button onClick={() => setCount(count + 1)}>Add</button>
    </div>
    </>
  )
}

export default UseEffect1 
