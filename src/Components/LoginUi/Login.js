import React, { useState } from "react";
import { useLogInMutation } from "../../Redux/api";




const Login = () => {

  const [logiInValues] = useLogInMutation()

  const [emailValue , setEmailValue] = useState('')
  const [passwordValue , setPasswordValue] = useState('')
  const [rememberMeValue , setRememberMeValue] = useState(false)



  const handleEmailValue = (event) =>{
    setEmailValue(event.target.value)
  }

  const handlePasswordValue = (event) =>{
    setPasswordValue(event.target.value)
  }

  const handleRememberMeValue = (event) =>{
    setRememberMeValue(event.target.value)
  }

  const params = {
    email:emailValue,
    password:passwordValue,
    rememberMe:rememberMeValue
  }

  const handleLogIn = () => {
    logiInValues(params)
  }
  

  return (
    <div>
      <form>
        <div>
          <label htmlFor="userName">userName</label>
          <input id="userName" onChange={handleEmailValue} value={emailValue}></input>
        </div>
        <div>
          <label htmlFor="password" >password</label>
          <input id="password" onChange={handlePasswordValue} value={passwordValue}></input>
        </div>
        <div>
          <label htmlFor="rememberMe" >remember Me</label>
          <input id="rememberMe" type="checkbox" onChange={handleRememberMeValue}></input>
        </div>
        <div>
          <button type="button" onClick={handleLogIn}>Log In</button>
        </div>
      </form>
    </div>
  );
}

export default Login;