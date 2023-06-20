import React ,{useState,useEffect}from 'react'
const url = 'https://jsonplaceholder.typicode.com/users'

const Fetchdata = () => {
    const [users , setUsers] = useState([])

    const fetchData = async() => {
        try{
          const response = await fetch(url)
          const users = await response.json()
          console.log('users',users)
          setUsers(users)
        }
        catch (err) {
         console.log(err)
        }
    }
    useEffect(() => {
        fetchData()
    },[])
    const handleDelete = () => {

    }

  return (
    <div>
      {/* <button onClick={() => handleDelete}>delete</button> */}
    </div>
  )
}

export default Fetchdata 
