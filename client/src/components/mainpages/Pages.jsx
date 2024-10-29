import React from 'react'
import Product from './Products/Product'
import Login from './login/Login'
import Register from './login/Register'
import Cart from './cart/Cart'
import {Route,Routes} from 'react-router-dom'
import DetailProduct from './utils/DetailProduct'
import CreateProduct from './utils/CreateProduct'
import Formal from '../categories/Formal'
import Casual from '../categories/Casual'
import Ethnic from '../categories/Ethnic'
import History from './history/History'


const Pages = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Product/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/details/:id' element={<DetailProduct/>}/>
        <Route path='casual/details/:id' element={<DetailProduct/>}/>
        <Route path='ethnic/details/:id' element={<DetailProduct/>}/>
        <Route path='formal/details/:id' element={<DetailProduct/>}/>
        <Route path='/create_product' element={<CreateProduct/>}/>
        <Route path='/formal' element={<Formal/>}/>
        <Route path='/casual' element={<Casual/>}/>
        <Route path='/ethnic' element={<Ethnic/>}/>
        <Route path='/history' element={<History/>}/>
        
        

      </Routes>

    </div>
  )
}

export default Pages