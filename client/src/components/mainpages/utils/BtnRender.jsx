import React from 'react'
import axios from 'axios'
import { GlobalState } from '../../../GlobalState';
import { useContext,useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const BtnRender = ({product}) => {

    const state=useContext(GlobalState);
    const [products]=state.productAPI.products;
    const [isAdmin]=state.userAPI.isAdmin;
    const addCart=state.userAPI.addCart;

    const [clicked,setClicked]=useState(false);

    const handleDelete=async(id)=>{
      console.log(id);
      try{
        axios.delete(`https://rivora-server.onrender.com/api/products/${id}`)
        console.log('deleted');
        window.location.href='/';
        
        
      }catch(err){
        console.log(err);
      }

    }

    const addToCart=(product)=>{
      setClicked(true);
      addCart(product);

    }

  return (
    <>
      <div className="row_btn">
        {isAdmin ? (
          <div>
            <Link to="/" id="btn_del" onClick={() => handleDelete(product._id)}>
              Delete
            </Link>

            <Link id="btn_edit" to={`details/${product._id}`}>
              Edit
            </Link>
          </div>
        ) : (
          <div style={{height:'50px'}}>

            <Link id="btn_buy" to="#!" onClick={() => addToCart(product)}>
              Buy Now
            </Link>

            <Link id="btn_view" to={`details/${product._id}`}>
              View Now
            </Link>

            </div>
        )}


{clicked && (

              
              
<lord-icon
  src="https://cdn.lordicon.com/hmzvkifi.json"
  trigger="in"
  delay="500"
  style={{ width: '30px', height: '30px',marginRight:'7px',marginTop:'-10px' }}
></lord-icon>




)}

      </div>
    </>
  );
}

export default BtnRender
