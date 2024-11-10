import { createContext,useEffect,useState } from "react";
import ProductAPI from "./api/ProductAPI";
import axios from 'axios'
import UserAPI from "./api/UserAPI";

export const GlobalState=createContext();

export const DataProvider=({children})=>{
    const [token, setToken] = useState(false);

    const refreshToken=async()=>{
        let res=await axios.get('https://rivora-server.onrender.com/user/refresh_token',{
            withCredentials:true
        });
        
        setToken(res.data.accesstoken);
    }

    useEffect(()=>{
        const firstLogin=localStorage.getItem('firstLogin');
        setToken(localStorage.getItem('token'));
        if(firstLogin){
            console.log('function called')
            refreshToken();
        }
        

    },[])

    const state={
        token:[token,setToken],
        productAPI:ProductAPI(),
        userAPI:UserAPI(token)
    }

    return(
        <GlobalState.Provider value={state}>
            {children}
        </GlobalState.Provider>
    )
}
