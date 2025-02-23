import React, { lazy, Suspense } from 'react'
import Team from './Team'
const TeamPage = lazy(()=>import("./Team"))

function TeamPage() {
  return (
    <>
        <Suspense fallback={<div>...</div>}>
            <Team/>
        </Suspense>
    </>

  )
}

export default TeamPage
