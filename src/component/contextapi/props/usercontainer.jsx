

const Usercontainer = ({user ,logout}) => {
  return (
    <div>
      {user ? (
        <>
        <p>hello there ,{user.name}</p>
        <button onClick ={logout}>logout</button>
        </>
      ) : (
        <p>please login</p>
      )}
      
    </div>
  )
}

export default Usercontainer
