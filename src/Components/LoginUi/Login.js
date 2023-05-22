import React, { useEffect, useState } from "react";
import { useGetUserInfoQuery, useLogInMutation, useLogOutMutation } from "../../Redux/api";
import { useDispatch, useSelector } from "react-redux";
import { loginFailure, loginSuccess, setEmail, setUserId, setUserName } from "../../Redux/Slices/authSlice";
import { Navigate } from "react-router-dom";





const Login = () => {

  const dispatch = useDispatch();
  const [logiInValues,{error, loading }] = useLogInMutation()
  const {data,isLoading} = useGetUserInfoQuery()

  data && console.log(data)


  const {myId} = useSelector(state => state.authSlice)
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


  
  useEffect(() => {
    if (data) {
      dispatch(loginSuccess(data.data.id));
      dispatch(setEmail(data.data.email));
      dispatch(setUserName(data.data.login));
      dispatch(setUserId(data.data.id))
    }
    
  }, [data, dispatch]);


  if(myId){
    return <Navigate to="/profile"/>
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