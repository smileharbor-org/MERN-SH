import React from 'react'
import Loader1 from "./Images/Loader1.gif"

function Loader() {
  return (
    <>
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <h1 className="text-lg font-bold mb-4">Loading...</h1>
        <img src={Loader1} width={400} height={400} />
      </div>
    </>
  )
}

export default Loader
