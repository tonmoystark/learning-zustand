import { useLogInOut } from "../store/useLogInOut"
 

const UserLogInOut = () => {
    const {name, email, isLoggedIn , logIn, logOut} = useLogInOut()
  return (
    <div>
        <h1>user is logged in or not</h1>
        <h1>user name: <span>{name}</span></h1>
        <h1>user email: <span>{email}</span></h1>
        <button
        onClick={() => !isLoggedIn ? logIn('Tonmoy', 'tonmoy.a009@gmail.com') : logOut()}
        >{isLoggedIn ? 'Log Out' : 'Log In'}</button>
    </div>
  )
}

export default UserLogInOut