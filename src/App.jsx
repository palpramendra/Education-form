import React from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Service from './pages/Service'
import Blog from './pages/Blog'
import Course from './pages/Course'
import Contact from './pages/Contact'

function App() {
  return (
    <>
      <Header/> 
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/service' element={<Service/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/course' element={<Course/>}/>
      <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
