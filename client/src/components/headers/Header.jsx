import React, { useContext, useState } from 'react'
import { IoMenu,IoClose,IoCartSharp} from "react-icons/io5";
import {Link} from 'react-router-dom'
import './Header.css'
import { GlobalState } from '../../GlobalState';
import logo from '../../assets/Logo.png'
import axios from 'axios'
import { FaCircleUser } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

const Header = () => {
    const state=useContext(GlobalState)
    const [isLogged,setIsLogged]=state.userAPI.isLogged;
    const [isAdmin,setIsAdmin]=state.userAPI.isAdmin;
    const [cart]=state.userAPI.cart;
    const [userInfo,setUserInfo]=state.userAPI.userInfo;

    const [menuClick,setMenuClick]=useState(false);
    console.log(userInfo);
    

    const logoutUser=async()=>{
        await axios.get('/user/logout');
        localStorage.clear();
        setIsAdmin(false);
        setIsLogged(false);
        window.location.href='/';

    }

    const administrator=()=>{
        return(
            <>
             <li><Link to='/create_product'>Create Product</Link></li>
             <li><Link to='/category'>Categories</Link></li>
            </>
        )
    }

    const loggedRouter=()=>{
        return(
            <>
             <li><Link to='/history'>History</Link></li>
            </>
        )
    }

    const Menu = ({ menuClick, setMenuClick }) => {
        //console.log(menuClick);
        return (
          <>
          <div className={`showMenu ${menuClick ? 'active' : ''}`}>
            

            <div className='userContainer'> 
            <div className="userlogo">
                <FaCircleUser size={70} />
            </div> 

            <div className="info">
            <p>{userInfo.name}</p>
            <p>{userInfo.email}</p>
            </div>

            <div className="options">
                <ul>
                    <li><Link to='/cart'>Your Cart</Link></li>
                    <li><Link to='/casual'>Categories</Link></li>
                    <li><Link to='/history'>Orders</Link></li>
                </ul>

                <button onClick={logoutUser}>Log Out</button>
            </div>
            
            </div>

            


            <div className="crossBtn">
            <RxCross2 size={30} onClick={() => setMenuClick(false) } />
            </div>

          </div>
          </>
        );
    };

    


  return (
    <header>

    

        <div className="logo">
        {isLogged && <div className="menu">
      <IoMenu size={30} onClick={() => setMenuClick(true)} />
      
      {menuClick && <Menu menuClick={menuClick} setMenuClick={setMenuClick} />}
    </div>}
        
        

            <img src={logo} alt="img" />
            <h1>
                <Link to='/'>{isAdmin?"Admin":"Rivora"}</Link>
            </h1>
        </div>
        

        <ul>
            <li><Link to='/'>{isAdmin?"Products":"Shop"}</Link></li>
            {isAdmin && administrator()}

            {isLogged?loggedRouter():<li><Link to='/login'>Login or Register</Link></li>}
            
        </ul>

        <div className='icons'>

        {
            isAdmin?"":<div className='cart-icon'>
                        <span>{cart.length}</span>
                        <Link to='/cart'><IoCartSharp size={30}/></Link>
                       </div>
        }

        {
            isLogged?<div className='userinfo'><FaCircleUser size={28}/> <p>{userInfo.name}</p></div>:""
        }

        </div>

    </header>
  )
}

export default Header