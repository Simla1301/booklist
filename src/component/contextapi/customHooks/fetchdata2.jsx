import React from 'react'

import UseFetch from './useFetch'
const url = 'https://api.github.com/users/QuincyLarson'
const Fetchdata2 = () => {
    // const [users, setUsers] = useState([])
    // const [loading , setLoading] = useState(true)
    const {users ,loading} = UseFetch(url)

    // const fetchData = async() => {
    //   try{
    //     const response = await fetch(url)
    //     const users = await response.json()
    //     console.log('users', users)
    //     setUsers(users)
    //     setLoading(false)
    //   }
    //   catch (err){
    //    console.log(err)
       
    //   }
    //   setLoading(false)
    // }
    // useEffect(() => {
    //     fetchData()
    // },[])
    if(loading){
        return <h4>loading</h4>
    }
    
  return (
    
    <div>
     <h2>{users.name}</h2>
     <img src={users.avatar_url}/>
     <p>company : {users.company}</p>
     <p> Bio : {users.bio}</p>
    </div>
 
   
  )
}

export default Fetchdata2
