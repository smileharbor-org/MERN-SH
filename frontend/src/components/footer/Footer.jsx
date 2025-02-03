import React from 'react'
import { FaFacebook } from "react-icons/fa"; //facebook icon
import { FaSquareXTwitter } from "react-icons/fa6"; // twitter icon
import { FaYoutube } from "react-icons/fa6"; // youtube icon
import { FaLinkedin } from "react-icons/fa6"; //linkedin icon
import { Link } from 'react-router-dom'; // link -> router
import { VITE_FACEBOOK, VITE_TWITTER, VITE_YOUTUBE, VITE_LINKEDIN } from "../../config" // imported env variables

function Footer() {
  //created array of objects for icons
  const footerIcons = [
    { id: 1, name: "facebook", icon: <FaFacebook />, to: VITE_FACEBOOK },
    { id: 2, name: "twitter", icon: <FaSquareXTwitter />, to: VITE_TWITTER },
    { id: 3, name: "youtube", icon: <FaYoutube />, to: VITE_YOUTUBE },
    { id: 4, name: "linkedin", icon: <FaLinkedin />, to: VITE_LINKEDIN },
  ]
  return (
    <>
      <div className=' h-min lg:h-[20vh] w-full bg-[#0c0c14] grid content-center gap-y-2 p-2'>
        <div className='flex justify-center items-center gap-x-9 p-2'>
          {/* mapping objects */}
          {
            footerIcons.map((el, i) => {
              return (
                <Link to={el.to} aria-label={el.name} target='_blank' key={i} className='text-3xl text-white'>
                  {el.icon}
                </Link>
              )
            })
          }
        </div>
        {/* Copyright content*/}
        <h1 className='text-center text-[12px] lg:text-[14px] text-white'>
          &#169; 2024 Smile Harbor Foundation
        </h1>
        <h1 className='text-center text-[12px]  lg:text-[14px] text-white'>
          Registered with NGO Darpan (CG/2023/0348232) Registrars of Firm & Scoieties (122202327759)
        </h1>

      </div>

    </>
  )
}

export default Footer