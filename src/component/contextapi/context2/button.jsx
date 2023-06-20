import { ImgAppContext } from "./image"

const Button = () => {
  const {btn ,setToggleBtn} = ImgAppContext()
  console.log('hello user' ,btn)
  // console.log('hi',setBtn)
  return (
    <div>
      {btn ? (
        <>
        <p>hello there </p>
        
        </>
      ) : (
        <p>please login</p>
      )}
      <button type='button' onClick ={setToggleBtn}>logout</button>
    </div>
  )
}

export default Button
