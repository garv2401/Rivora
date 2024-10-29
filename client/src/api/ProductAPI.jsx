import React, { useEffect,useState} from 'react'
import axios from 'axios'

const ProductAPI = () => {
    const [products, setproducts] = useState([]);
    const getProducts=async()=>{
        const res=await axios.get('/api/products');
        setproducts(res.data.products);
    }
    useEffect(()=>{
        getProducts();
    },[])
  return {
    products:[products,setproducts]
  }
}

export default ProductAPI