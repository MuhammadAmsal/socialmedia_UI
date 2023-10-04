import './login.css'
import { useRef } from 'react'
export default function Login() {


  const email = useRef("")
  const password = useRef("")

  const handleClick = (e) =>{

    
     e.preventDefault()
     console.log(email.current.value)
  };
  return (
    <div className='login' >
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">Social Media</h3>
                <span className="loginDesc">Connect with friend and the world around you on social media. </span>
            </div>
            <div className="loginRight">
                <form className="loginBox" onSubmit={handleClick}>
                  <input placeholder="Email" type="email" required className="loginInput"  ref={email} />
                  <input placeholder="Password" type="password" minLength={6} required className="loginInput"  ref={password}  />
                  <button className='loginButton' >Log In</button>
                  <span className="loginForgot">Forgot Password</span>
                  <button className="loginRegisterButton">Create a New Account</button>
                </form>
            </div>
        </div>
      
    </div>
  )
}
