import { useState } from 'react'
import './App.css'
import Header from './components/headers/Header'
import Pages from './components/mainpages/Pages'
import { BrowserRouter as Router } from 'react-router-dom'
import { DataProvider } from './GlobalState'
import Footer from './components/footer/Footer'
import Category from './components/categories/Category'

function App() {
  
  return (
    <DataProvider>

    <Router>
      <div className="App">
      
      <Header/>
      <Category/>
      <Pages/>
      
      
      </div>
      <Footer/>
      

    </Router>
    </DataProvider>


    
  )
}

export default App
