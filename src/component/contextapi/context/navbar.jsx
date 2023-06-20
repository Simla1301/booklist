import {createContext, useContext, useState} from 'react'
import Navlinks from './navlinks'


const NavbarContext = createContext()
export const useAppContext = () => useContext(NavbarContext)

const Navbar = () => {
    const [user , setUser] = useState({name: 'bob'});
    const logout =() => {
        setUser(null);
    };
  return (
    <NavbarContext.Provider value={{user,logout}}>
    <nav>
      <h4>context API</h4>
      <Navlinks/>
    </nav>
    </NavbarContext.Provider>
  )
}

export default Navbar
