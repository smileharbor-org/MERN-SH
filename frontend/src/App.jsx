import React from 'react'
import { Outlet, useLocation } from "react-router-dom" // outlet -> router dom
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Home from './components/home/Home'
import CookieConsent from "react-cookie-consent"; // cookie consent
function App() {
  const location = useLocation()
  return (
    <>
      <Navbar />
      {location.pathname === "/" && <Home />}
      <Outlet />
      <Footer />
      <CookieConsent
        location="bottom"
        buttonText="Accept"
        cookieName="SmileHarbor"
        style={{ background: "#fff" ,color:"#000"}}
        buttonStyle={{ color: "#4e503b", fontSize: "13px",borderRadius:"5px" }}
        expires={12}
        declineButtonText="Reject"
        declineButtonStyle={{
        color: "#ffffff",
        fontSize: "13px",
        backgroundColor: "#ff4d4d",
        borderRadius: "5px",
        padding: "5px 10px",
        marginLeft: "10px",
      }}
      enableDeclineButton
      >
        This website uses cookies.
      </CookieConsent>
    </>
  )
}

export default App
