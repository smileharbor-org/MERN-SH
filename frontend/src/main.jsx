import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contact from './components/contact/Contact.jsx'
import Team from './components/team/Team.jsx'
import Gallery from './components/gallery/Gallery.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}>  {/* homepage route */}
          <Route path='contact' element={<Contact/>}/> {/* contact route */}
          <Route path='team' element={<Team/>}/> {/* team route */}
          <Route path='gallery' element={<Gallery/>}/> {/* gallery route */}
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
