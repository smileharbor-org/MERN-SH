import React from 'react'
import { Outlet } from "react-router-dom" // outlet -> router dom
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Home from './components/home/Home'
function App() {
  return (
    <>
    
      <Home />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
