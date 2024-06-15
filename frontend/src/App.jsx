'use client';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Carousel } from "flowbite-react";
import { Accordion } from "flowbite-react";

function App() {

  return (
    <>
      <div className='flex flex-col justify-center  '>
        <h1 className='  mt-5 font-Quicksand text-charcol_black  text-3xl '>Sachin</h1>
        <h1 className=' a mt-5  text-primary  text-3xl '>Sachin</h1>
        <h1 className=' b mt-5 font-bold text-secondary  text-3xl '>Sachin</h1>
        <h1 className=' c mt-5 font-bold text-red-600  text-3xl '>Sachin</h1>
        <h1 className=' d mt-5 font-bold text-red-600  text-6xl '>Sachin</h1>
        <h1 className=' mt-5 font-LavishlyYours text-red-600  text-6xl '>Sachin</h1>
        <h1 className='  mt-5 font-RumRaisin text-red-600  text-6xl '>Sachin</h1>
        <h1 className='  mt-5 font-Nosifer text-red-600  text-6xl '>Sachin</h1>

      </div>
      <Accordion>
        <Accordion.Panel >
          <Accordion.Title className='bg-charcol_black text-primary'>What is Flowbite?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-primary dark:text-gray-400">
              Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons,
              dropdowns, modals, navbars, and more.
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Check out this guide to learn how to&nbsp;
              <a
                href="https://flowbite.com/docs/getting-started/introduction/"
                className="text-cyan-600 hover:underline dark:text-cyan-500"
              >
                get started&nbsp;
              </a>
              and start developing websites even faster with components on top of Tailwind CSS.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>Is there a Figma file available?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Flowbite is first conceptualized and designed using the Figma software so everything you see in the library
              has a design equivalent in our Figma file.
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Check out the
              <a href="https://flowbite.com/figma/" className="text-cyan-600 hover:underline dark:text-cyan-500">
                Figma design system
              </a>
              based on the utility classes from Tailwind CSS and components from Flowbite.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>What are the differences between Flowbite and Tailwind UI?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              The main difference is that the core components from Flowbite are open source under the MIT license, whereas
              Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone
              components, whereas Tailwind UI offers sections of pages.
            </p>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no
              technical reason stopping you from using the best of two worlds.
            </p>
            <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
            <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
              <li>
                <a href="https://flowbite.com/pro/" className="text-cyan-600 hover:underline dark:text-cyan-500">
                  Flowbite Pro
                </a>
              </li>
              <li>
                <a
                  href="https://tailwindui.com/"
                  rel="nofollow"
                  className="text-cyan-600 hover:underline dark:text-cyan-500"
                >
                  Tailwind UI
                </a>
              </li>
            </ul>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </>
  )
}

export default App
