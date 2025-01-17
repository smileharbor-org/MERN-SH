import React from 'react'
import { Outlet, useLocation } from "react-router-dom" // outlet -> router dom
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Home from './components/home/Home'
function App() {
  const location = useLocation()
  return (
    <>
    
      <Navbar />
      {location.pathname === "/" && <Home/>}
      <Outlet />
      <Footer />
    </>
  )
}

export default App
