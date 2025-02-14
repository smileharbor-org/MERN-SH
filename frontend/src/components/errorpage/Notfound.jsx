import React from 'react'
import F1 from "./Images/F1.jpg"


function Notfound() {
  return (
    <>
      <div className='w-full h-screen flex justify-center items-center'>
        <div>
          <img src={F1} width={400} height={400} alt='Not Found' loading='lazy'/>

        </div>
      </div>
    </>
  )
}

export default Notfound
