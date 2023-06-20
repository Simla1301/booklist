import {createContext, useContext, useState} from 'react'
import Content from './content'
import logo from '../context2/book-1 (1).jpg'

const ImageContext = createContext()
export const ImgAppContext = () => useContext(ImageContext)


const Image = () => {
    const[btn ,setBtn] = useState(false)
    const setToggleBtn =() => {
       setBtn(!btn)
    }
  return (
    <ImageContext.Provider value={{btn,setToggleBtn}}>
    <div>
      <h2>Example</h2>
      <img src={logo} alt='logo' style={{width:'450px', height: '300px'}}/>
      <Content />
    </div>
    </ImageContext.Provider>
  )
}

export default Image 
