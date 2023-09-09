import React, { useEffect, useState } from "react";
import styles from "./login.module.scss";
import { useGetUserInfoQuery, useLogInMutation, useLogOutMutation } from "../../Redux/api";
import { useDispatch, useSelector } from "react-redux";
import { loginFailure, loginSuccess, setAuthorised, setEmail, setUserId, setUserName } from "../../Redux/Slices/authSlice";
import { Navigate } from "react-router-dom";

import { useFormik } from "formik";
import * as Yup from "yup";
import Loader from "../CommonComponents/Loader";






const Login = () => {

  const dispatch = useDispatch();
  const [logiInValues,{error, loading }] = useLogInMutation()
  const {data,isLoading,} = useGetUserInfoQuery()
  console.log(data)



  const {myId} = useSelector(state => state.authSlice)
  // const [emailValue , setEmailValue] = useState('')
  // const [passwordValue , setPasswordValue] = useState('')
  const [authError , setAuthError] = useState(false)
  // const [rememberMeValue , setRememberMeValue] = useState(false)


  // const handleEmailValue = (event) =>{
  //   setEmailValue(event.target.value)
  // }

  // const handlePasswordValue = (event) =>{
  //   setPasswordValue(event.target.value)
  // }

  // const handleRememberMeValue = (event) =>{
  //   setRememberMeValue(event.target.value)
  // }

  // const params = {
  //   email:emailValue,
  //   password:passwordValue,
  //   rememberMe:rememberMeValue
  // }



  // const handleLogIn = () => {
  //   logiInValues(params)
  // }


  const formik = useFormik({
    initialValues:{
      email:'',
      password:'',
      rememberMe:false,
    },
    onSubmit:values => {
      const params = {
        email:values.email,
        password:values.password,
        rememberMe:values.rememberMe,
      }
      logiInValues(params)

      if(data.resultCode){
        setAuthError(true)
      }

    },
    validationSchema:Yup.object().shape({
      email:Yup.string().required('Please Enter Email').email('Write Valid Email Address'),
      password:Yup.string().required('Please Enter Password')
    }),
  });

  
  useEffect(() => {
    if (data) {
      dispatch(loginSuccess(data.data.id));
      dispatch(setEmail(data.data.email));
      dispatch(setUserName(data.data.login));
      dispatch(setUserId(data.data.id))
    }
    
  }, [data, dispatch]);

  const handleTestAccountInfo = () =>{
    alert(` To login in Test account  use this : \n Email: free@samuraijs.com \n Password: free `)
  }

  if(myId){
    return <Navigate to="/profile"/>
  }



  
  return ( 
    <div className={styles.login}>
      <form onSubmit={formik.handleSubmit}>
        <div className={styles.decoration}>
          <svg  id="svg" viewBox="0 0 1440 590" xmlns="http://www.w3.org/2000/svg"><path d="M 0,600 C 0,600 0,200 0,200 C 105.57142857142858,158.89285714285714 211.14285714285717,117.78571428571428 329,136 C 446.85714285714283,154.21428571428572 577,231.74999999999994 720,265 C 863,298.25000000000006 1018.8571428571429,287.21428571428567 1141,269 C 1263.142857142857,250.7857142857143 1351.5714285714284,225.39285714285717 1440,200 C 1440,200 1440,600 1440,600 Z" stroke="none"  fill="#1d75dd" fillOpacity="0.53"  transform="rotate(-180 720 300)"></path><path d="M 0,600 C 0,600 0,400 0,400 C 117.21428571428572,386.7857142857143 234.42857142857144,373.57142857142856 362,394 C 489.57142857142856,414.42857142857144 627.5,468.49999999999994 762,452 C 896.5,435.50000000000006 1027.5714285714287,348.42857142857144 1140,328 C 1252.4285714285713,307.57142857142856 1346.2142857142858,353.7857142857143 1440,400 C 1440,400 1440,600 1440,600 Z" stroke="none"  fill="#1d75dd" fillOpacity="1"  transform="rotate(-180 720 300)"></path></svg>
        </div>
        <div className={styles.title}>
          Hello there , <br />
          Welcome back
        </div>
        <div className={styles.email}>
          <label htmlFor="email">Email</label>
          <input id="email" name="email" placeholder='Enter email' onChange={formik.handleChange} value={formik.values.email} className={formik.errors.email && formik.touched.email && styles.errorInput}></input>
          {formik.errors.email && formik.touched.email && (
            <div className={styles.error} >{formik.errors.email}</div>
          )}
        </div>
        <div className={styles.password}>
          <label htmlFor="password" >Password</label>
          <input id="password" name="password" type='password' placeholder='Enter password' onChange={formik.handleChange} value={formik.values.password} className={formik.errors.password && formik.touched.password && styles.errorInput}></input>
          {formik.errors.password && formik.touched.password && (
            <div className={styles.error}>{formik.errors.password}</div>
          )}
        </div>
        <div className={styles.rememberMe}>
          <label htmlFor="rememberMe" >Remember me </label>
          <input id="rememberMe" name="rememberMe" type="checkbox"  onChange={formik.handleChange} value={formik.values.rememberMe}></input>
        </div>
        <div className={styles.buttonWrapper}>
          <button type="submit" >Log In</button>
        </div>
        {authError && (
          <div className={styles.authError}>
            Incorrect email or password. Please try again.
          </div>
        )}
        <div className={styles.registration}>
          Do not have account yet ? Click <a href="https://social-network.samuraijs.com/signUp"> here </a> to Register 
        </div>
        <div className={styles.testAccount}>
          or <a onClick={handleTestAccountInfo}>use</a> Test Email and Password
        </div>
      </form>
    </div>
  );
}

export default Login;