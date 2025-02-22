import { lazy, StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Loader from './components/errorpage/Loader.jsx'
const Donate = lazy(() => import("./components/donate/Donate.jsx"))
const Notfound = lazy(() => import("./components/errorpage/Notfound.jsx"))
const Gallery = lazy(() => import('./components/gallery/Gallery.jsx'))
const Contact = lazy(() => import('./components/contact/Contact.jsx'))
const Team = lazy(() => import('./components/team/Team.jsx'))
import { HelmetProvider } from 'react-helmet-async';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <HelmetProvider>
          <Routes>
            <Route path='/' element={<App />}>  {/* homepage route */}
              <Route path='contact' element={<Contact />} /> {/* contact route */}
              <Route path='team' element={<Team />} /> {/* team route */}
              <Route path='gallery' element={<Gallery />} /> {/* gallery route */}
              <Route path='donate' element={<Donate />} /> {/*  donate */}
              <Route path='*' element={<Notfound />} />{/* 404 */}
            </Route>
          </Routes>
        </HelmetProvider>

      </Suspense>

    </BrowserRouter>
  </StrictMode>,
)
