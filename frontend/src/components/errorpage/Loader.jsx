import React from 'react'


function Loader() {
  return (
    <>
      <div className="flex justify-center items-center h-60">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    </>
  )
}

export default Loader
