import React, { useEffect, useState } from 'react'
import Contacts from './components/Contacts'
import Header, { HeaderPhone } from './components/Header'
import Home from './components/Home'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Experience from './components/Experience'
import Work from './components/Work'
import { Toaster } from 'react-hot-toast'
import Footer from './components/Footer'


function App() {

  const [menuOpen,setMenuOpen] = useState(false)

  const [ratio, setRatio] = useState(window.innerWidth / window.innerHeight);
  useEffect(() => {
    const resizeRatio = () => {
      setRatio(window.innerWidth / window.innerHeight);
    };

    window.addEventListener("resize", resizeRatio);

    return () => {
      window.removeEventListener("resize", resizeRatio);
    };
  }, [ratio]);

  return (
    <>
    <HeaderPhone menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <Home ratio={ratio}/>
        <Work />
        <Experience />
        <Services />
        <Testimonials />
        <Contacts />
        <Footer />
        <Toaster />
    </>
    
  )
}

export default App