import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import './Login.css'
import logo from '../../../assets/Logo.png'
const Login = () => {
  const [user,setUser]=useState({
    email:"",
    password:"" 
  });


  const onChangeInput=(e)=>{
    setUser({...user,[e.target.name]:e.target.value})
  }

  const loginSubmit=async (e)=>{
    e.preventDefault();
    try{
      let res=await axios.post('https://rivora-server.onrender.com/user/login',{...user},{withCredentials:true})
      console.log('Login Success');
      localStorage.setItem('firstLogin',true);
      localStorage.setItem('token',res.data.accessToken);
      window.location.href='/'


    }catch(err){
      alert("Invalid Credentials!");
      

    }
  }

  return (
    <div className='login-page'>
      <div className="login_content">
        <img src={logo} alt="" />
      <form action="" onSubmit={loginSubmit}>
        <div className="input">
        <input type="email" name='email' required placeholder='Email' value={user.email} onChange={onChangeInput}/>
        <input type="password" name="password" required placeholder='Password' value={user.password} onChange={onChangeInput}/>
        </div>
        <div className="row">
          <button type="submit">Login</button>
          <Link className='link' to='/register'>Register</Link>
        </div>
      </form>
      </div>
    </div>
  )
}

export default Login
