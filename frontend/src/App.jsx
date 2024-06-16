'use client';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Carousel } from "flowbite-react";
import { Accordion } from "flowbite-react";
import Navbar from './components/Navbar/page';
import Footer from './components/Footer/page';

function App() {

  return (
    <>
      <Navbar />
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
