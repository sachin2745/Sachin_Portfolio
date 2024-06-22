import React from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Education from './components/Education';
import Skills from './components/Skills';
import Project from './components/Project';
import Experience from './components/Experience';
import Experiences from './components/Experiences';
import HireMe from './components/HireMe';
import Aboutme from './components/Aboutme';

function App() {

  return (
    <>
      <Navbar />
      <Aboutme />
      <HireMe />
      <Experiences />
      {/* <Experience /> */}
      <Project />
      <Skills />
      <Education />
      <Contact />
      {/* <div className='flex flex-col justify-center  '>
        <h1 className='  mt-5 font-Quicksand text-charcol_black  text-3xl '>Sachin</h1>
        <h1 className=' a mt-5  text-primary  text-3xl '>Sachin</h1>
        <h1 className=' b mt-5 font-bold text-secondary  text-3xl '>Sachin</h1>
        <h1 className=' c mt-5 font-bold text-red-600  text-3xl '>Sachin</h1>
        <h1 className=' d mt-5 font-bold text-red-600  text-6xl '>Sachin</h1>
        <h1 className=' mt-5 font-LavishlyYours text-red-600  text-6xl '>Sachin</h1>
        <h1 className='  mt-5 font-RumRaisin text-red-600  text-6xl '>Sachin</h1>
        <h1 className='  mt-5 font-Nosifer text-red-600  text-6xl '>Sachin</h1>

      </div> */}

      <Footer />
    </>
  )
}

export default App
