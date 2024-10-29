import React from 'react'
import { useContext,useState } from 'react'
import { GlobalState } from '../../../GlobalState'
import axios from 'axios'
import './CreateProduct.css'

const CreateProduct = () => {
    const state=useContext(GlobalState);
    const [isAdmin,setIsAdmin]=state.userAPI.isAdmin;
    
    console.log(isAdmin);


    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDesc] = useState("");
    const [image, setImage] = useState("");
    const [content, setContent] = useState("");
    const [product_id, setProdID] = useState("");
    const [category, setCategory] = useState("");

    const handleProdID=(e)=>{
        setProdID(e.target.value);

    }

    const handleTitle=(e)=>{
        setTitle(e.target.value);

    }

    const handlePrice=(e)=>{
        setPrice(e.target.value);

    }

    const handleDesc=(e)=>{
        setDesc(e.target.value);
    }

    const handleImage=(e)=>{
        setImage(e.target.value);
    }

    const handleContent=(e)=>{
        setContent(e.target.value);
    }

    const handleCategory=(e)=>{
        setCategory(e.target.value);
    }

    const handleSubmit=async(e)=>{
        e.preventDefault();
        const data={product_id,title,price,description,images:{"publicUrl":image,"imageUrl":""},content,category};
        console.log(data);
        try{
            await axios.post('/api/products',data);
            console.log('Product created');
            window.location.href='/';

        }catch(err){
            console.log(err.data.msg);

        }

    }


  return (
    <>
    <div className="cont">
    <form action="" onSubmit={handleSubmit} className='form_data'>
        

    <label id='Label' htmlFor="prodID">Product ID:</label>
    <input
      type="text"
      placeholder="enter ID"
      value={product_id} // Controlled input value
      required
      id='prodID'
      onChange={handleProdID}
    />
  
        <label id='Label' htmlFor="title">Title of the product:</label>
        <input type="text" placeholder="enter title" value={title} required id='title' onChange={(e)=>handleTitle(e)}/>
        
        <div className="price">
        <label id='Label' htmlFor="price">Price of the product:</label>
        <input type="number" placeholder="price" value={price} required id='price' onChange={(e)=>handlePrice(e)}/>
        </div>


        <label id='Label' htmlFor="desc">Product description:</label>
        <input type="text" placeholder="enter description" value={description} required id='desc' onChange={(e)=>handleDesc(e)}/>

        <label id='Label' htmlFor="image">Provide image url:</label>
        <input type="text" value={image} placeholder="enter url" required id='image' onChange={(e)=>handleImage(e)}/>
        
        <label id='Label' htmlFor="content">Product content:</label>
        <input type="text" placeholder="enter content" value={content} required id='content' onChange={(e)=>handleContent(e)}/>
        

        <div className="categ">
        <label id='Label' htmlFor="category">Product category:</label>
        <input type="text" value={category} placeholder="category" required id='category' onChange={(e)=>handleCategory(e)}/>
        </div>

        <input id="submit_btn" type="submit" value="Add Product"/>



    </form>
    </div>
    </>
  )
}

export default CreateProduct