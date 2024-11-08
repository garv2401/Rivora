import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import './Register.css'
import logo from '../../../assets/Logo.png'

const Register = () => {

  const [user,setUser]=useState({
    name:"",
    email:"",
    password:"" 
  });


  const onChangeInput=(e)=>{
    setUser({...user,[e.target.name]:e.target.value})
  }

  const registerSubmit=async (e)=>{
    e.preventDefault();
    try{
      await axios.post('https://rivora-server.onrender.com/user/register',{...user})
      localStorage.setItem('firstRegister',true);
      window.location.href='/login'


    }catch(err){
      alert(err.res.data.msg);

    }
  }


  return (
    <div className='register-page'>
      <div className="register_content">
      <img src={logo} alt="" />
      <form action="" onSubmit={registerSubmit}>
        <div className="input">
        <input type="text" name='name' required placeholder='Full Name' value={user.name} onChange={onChangeInput}/>
        <input type="email" name='email' required placeholder='Email' value={user.email} onChange={onChangeInput}/>
        <input type="password" name="password" required placeholder='Password' value={user.password} onChange={onChangeInput}/>
        </div>
        <div className="row">
          <button type="submit">Register</button>
          <Link className="link" to='/login'>Login</Link>
        </div>
      </form>
      </div>
    </div>
  )
}

export default Register
