import React, { useContext } from 'react'
import { GlobalState } from '../../../GlobalState'
import ProductList from '../utils/ProductList';
import './Product.css'

const Product = () => {
  const state=useContext(GlobalState);
  const [products]=state.productAPI.products;
  
  return (
    <div className='products'> 
      {
        products.map((product)=>{
          return <ProductList key={product._id} product={product}/>

        })
      }
    </div>
  )
}

export default Product