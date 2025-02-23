import React, { lazy, Suspense } from 'react'

const Home = lazy(()=>import("./Home"))

function MainPage() {
  return (
    <>
    <Suspense fallback = {<div>Loading...</div>}>
        <Home/>
    </Suspense>
    </>
  )
}

export default MainPage
