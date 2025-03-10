import React, { lazy, Suspense } from 'react'
const Contact = lazy(() => import('./Contact'))
import Loader from '../errorpage/Loader'

function ContactPage() {
    return (
        <>
            <Suspense fallback={<Loader />}>
                <Contact />
            </Suspense>
        </>
    )
}

export default ContactPage
