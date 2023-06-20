import {useState} from 'react'
import Navlinks from './navlinks'

const Navbar = () => {
    const [user , setUser] = useState({name: 'bob'});
    const logout =() => {
        setUser(null);
    };
  return (
    <div>
      <h4>context API</h4>
      <Navlinks user={ user} logout = {logout} />
    </div>
  )
}

export default Navbar
