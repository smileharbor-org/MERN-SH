import React, { lazy, Suspense } from 'react'
import Loader from '../errorpage/Loader'

const Home = lazy(()=>import("./Home"))

function MainPage() {
  return (
    <>
    <Suspense fallback = {<Loader/>}>
        <Home/>
    </Suspense>
    </>
  )
}

export default MainPage
