
import Usercontainer from './usercontainer'

const Navlinks = ({user , logout}) => {
  return (
    <div>
      <ul>
        <li>
            <a href='#'>home</a>
        </li>
        
        <li>
            <a href='#'>about</a>
        </li>
      </ul>
      <Usercontainer user = {user} logout = {logout}/>
    </div>
  )
}

export default Navlinks
