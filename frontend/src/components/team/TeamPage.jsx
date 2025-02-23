import React, { lazy, Suspense } from 'react'
import Team from './Team'
import Loader from '../errorpage/Loader'
const TeamPage = lazy(()=>import("./Team"))

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
