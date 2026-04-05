import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ScrollToTop from './components/scrollTop';
import Home from './pages/home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/ServicesPage';
import Plumbing from './pages/plumbing';
import Footer from './components/footer';


import Navbar from './components/Navbar';
import ServicesPage from './pages/ServicesPage';



function App(){
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      
      
     



      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/service/:serviceName' element={<ServicesPage />} />
      </Routes>

      
    </div>
  )
}
export default App;