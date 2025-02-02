import { lazy, StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contact from './components/contact/Contact.jsx'
import Team from './components/team/Team.jsx'
import Gallery from './components/gallery/Gallery.jsx'
import Loader from './components/errorpage/Loader.jsx'
const Donate = lazy(() => import("./components/donate/Donate.jsx"))
const Notfound = lazy(() => import("./components/errorpage/Notfound.jsx"))


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Suspense fallback={<Loader/>}>
        <Routes>
          <Route path='/' element={<App />}>  {/* homepage route */}
            <Route path='contact' element={<Contact />} /> {/* contact route */}
            <Route path='team' element={<Team />} /> {/* team route */}
            <Route path='gallery' element={<Gallery />} /> {/* gallery route */}
            <Route path='donate' element={<Donate />} /> {/*  donate */}
            <Route path='*' element={<Notfound />} />{/* 404 */}
          </Route>
        </Routes>
      </Suspense>

    </BrowserRouter>
  </StrictMode>,
)
