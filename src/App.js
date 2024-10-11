import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import PostProductForm from './Pages/PostProductForm'
import Profile from './Pages/Profile'
import SinglePage from './Pages/SinglePage'
import EditProfile from './Pages/EditProfile'
import ProductsPage from './Pages/ProductsPage'
import CartPage from './Pages/CartPage'
import SettingsPage from './Pages/SettingPage'

const App = () => {
  return (
  <>
  <BrowserRouter>
  <Navbar />
  <Routes>
    <Route path='/' element ={ <Home />} />
    <Route path='/signup' element ={ <Signup />} />
    <Route path='/login' element ={ <Login />} />
    <Route path='/post' element ={ <PostProductForm />} />
    <Route path='/profile' element ={ <Profile />} />
    <Route path='/product-details' element ={ <SinglePage />} />
    <Route path='/profile/edit' element ={ <EditProfile />} />
    <Route path='/profile/products' element ={ <ProductsPage />} />
    <Route path='/check-out' element ={ <CartPage />} />
    <Route path='/settings' element ={ <SettingsPage />} />
  </Routes>
  </BrowserRouter>
  
  </>
  )
}

export default App