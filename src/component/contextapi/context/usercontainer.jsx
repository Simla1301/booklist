import { useAppContext } from './navbar'

const UserContainer = () => {
  const { user, logout } = useAppContext()
  console.log('hello user', user)
  console.log('logout', logout)
  return (
    <div className='user-container'>
      {user ? (
        <>
          <p>Hello There, {user.name.toUpperCase()}</p>
          <button type='button' className='btn' onClick={logout}>
            logout
          </button>
        </>
      ) : (
        <p>Please Login</p>
      )}
    </div>
  );
};
export default UserContainer;