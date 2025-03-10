import React, { lazy, Suspense } from 'react'
import Loader from '../errorpage/Loader'
const Team = lazy(()=>import("./Team"))

function TeamPage() {
  return (
    <>
        <Suspense fallback={<Loader/>}>
            <Team/>
        </Suspense>
    </>

  )
}

export default TeamPage
