import React, { lazy, Suspense } from 'react'
const Donate = lazy(()=>import("./Donate"))
import Loader from '../errorpage/Loader'


function DonatePage() {
  return (
    <>
    <Suspense fallback={<Loader/>}>
        <Donate/>
    </Suspense>
    </>
  )
}

export default DonatePage
