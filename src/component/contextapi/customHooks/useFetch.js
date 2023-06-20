import { useState,useEffect } from "react";

const UseFetch = (url) => {
    const [users, setUsers] = useState([])
    const [loading , setLoading] = useState(true)

    const fetchData = async() => {
        try{
          const response = await fetch(url)
          const users = await response.json()
          console.log('users', users)
          setUsers(users)
          setLoading(false)
        }
        catch (err){
         console.log(err)
         
        }
        setLoading(false)
      }
      useEffect(() => {
          fetchData()
      },[])
    //   if(loading){
    //     return <h4>loading</h4>
    // }

      return{users,loading}
}
export default UseFetch