import { useLogInOut } from "../store/useLogInOut"
 

const UserLogInOut = () => {
    const {name, email, isLoggedIn , logIn, logOut} = useLogInOut()
  return (
    <div className="border flex flex-col justify-center items-center">
        <h1 className="text-xl">user name: <span>{name}</span></h1>
        <h1 className="text-xl">user email: <span>{email}</span></h1>
        <button
        className="border px-4 py-2 my-2"
        onClick={() => !isLoggedIn ? logIn('Tonmoy', 'tonmoy.a009@gmail.com') : logOut()}
        >{isLoggedIn ? 'Log Out' : 'Log In'}</button>
    </div>
  )
}

export default UserLogInOut