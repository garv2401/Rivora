import React from 'react'
import axios from 'axios'
import { useState,useContext,useEffect} from 'react';
import { GlobalState } from '../GlobalState';

const UserAPI = (token) => {
    const [isLogged,setIsLogged]=useState(false);
    const [isAdmin,setIsAdmin]=useState(false);
    const [cart,setCart]=useState([]);
    const [userInfo,setUserInfo]=useState([]);

    useEffect(()=>{
        
        if(token){
            const getUser=async()=>{
                try{
                    const res=await axios.get('http://localhost:5000/user/info',{
                        headers:{Authorization:token}
                    })

                    setIsLogged(true);
                    setUserInfo(res.data);
                    
                    res.data.role===1?setIsAdmin(true):setIsAdmin(false);

                }catch(err){
                    alert(err.response.data.msg)

                }
            }
            getUser();
        }
    },[token])
    
    const addCart=async(product)=>{
        if(!isLogged){
            window.location.href='/login'
        }

        const check=cart.every(item=>{
           if(product._id===item._id){
            return false;
           }
           else{
            return true;
           }
        })
    
        if(check){
            setCart([...cart,{...product,quantity:1}]);
            console.log(cart);
        }else{
            alert('This product has already been added to the cart')
        }
        

    }

    

    return {
        isLogged:[isLogged,setIsLogged],
        isAdmin:[isAdmin,setIsAdmin],
        addCart:addCart,
        cart:[cart,setCart],
        userInfo:[userInfo,setUserInfo]

    }
    
  
}

export default UserAPI