import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BiLogoGoLang } from 'react-icons/bi'
import Home from './pages/Home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './pages/About/About'
import Blog from './pages/Blog/Blog'
import Portfolio from './pages/Portfolio/Portfolio'
import Services from './pages/Services/Services'
import Contact from './pages/Contact/Contact'
import SingleBlog from './pages/SingleBlog/SingleBlog'

function App() {
 

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<SingleBlog />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
