import React from 'react'
import { useContext } from 'react'
import { GlobalState } from '../../../GlobalState'
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import './DetailProduct.css'

const DetailProduct = () => {
    const params=useParams();
    const state=useContext(GlobalState);
    const [products]=state.productAPI.products;
    const [detailProduct,setDetailProduct]=useState([]);
    const [isLogged,setIsLogged]=state.userAPI.isLogged;
    console.log(isLogged);

    

    const handleBuy=()=>{
        if(!isLogged){
            window.location.href='/login'
        }
    }

    

    useEffect(()=>{
        if(params){
            products.forEach(product => {
                if(product._id===params.id){
                    setDetailProduct(product);
                    
                }
            });
        }

    },[params])

    console.log(detailProduct);

    if(detailProduct.length===0) return null;
  return (
    <div className='detail'>
        
        <img src={detailProduct.images.publicUrl} alt="productImage"/>
        <div className="box-detail">
            <div className="row">
                <h2>{detailProduct.title}</h2>
                <h4>{detailProduct.product_id}</h4>
            </div>
            <span>${detailProduct.price}</span>
            <p>{detailProduct.description}</p>
            <p>{detailProduct.content}</p>
            <p>Sold:{detailProduct.sold}</p>
            <button className='cart' onClick={()=>handleBuy()}>Buy Now</button>

        </div>

    </div>
  )
}

export default DetailProduct