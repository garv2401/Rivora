import React from 'react'
import { GlobalState } from '../../../GlobalState'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

const Cart = () => {
  const state=useContext(GlobalState);
  const [cart,setCart]=state.userAPI.cart;
  //console.log(cart);
  if(cart.length===0){
    return <h2 style={{textAlign:"center",fontSize:"2rem"}}>Cart Empty!</h2>
  }

  const handleRemove=(product)=>{
    let newCart=cart.filter(item=>{
      return item._id!=product._id;
    })
    //console.log(newCart);
    setCart(newCart);

  }
  return (
    <div>
      {
      cart.map((product)=>(
        <div className='detail'>
        
        <img src={product.images.publicUrl} alt="productImage"/>
        <div className="box-detail">
            <div className="row">
                <h2>{product.title}</h2>
                <h4>{product.product_id}</h4>
            </div>
            <span>${product.price}</span>
            <p>{product.description}</p>
            <p>{product.content}</p>
            <p>Sold:{product.sold}</p>
            <Link to='/cart' className='cart'>Buy Now</Link>
            <Link onClick={()=>handleRemove(product)} className='cart'>Remove</Link>


        </div>

        </div>
      ))
      }
    </div>
  )
}

export default Cart