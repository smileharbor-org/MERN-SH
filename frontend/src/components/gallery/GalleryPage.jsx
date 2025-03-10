import React, { lazy, Suspense } from 'react'
import Loader from '../errorpage/Loader'

const Gallery = lazy(() => import("./Gallery"))

function GalleryPage() {
    return (
        <>
            <Suspense fallback={<Loader />}>
                <Gallery />
            </Suspense>

        </>
    )
}

export default GalleryPage
