import React, { useEffect, useState } from 'react'
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
import Hero from './components/Hero';
import Preloader from './components/Preloader';
import Mobile from './components/Mobile';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust the timeout duration as needed

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />;
  }
  return (
    <>
      <Navbar />
      <Mobile />
      <Hero />
      <section id="about" className="sticky top-0">
        <Aboutme />
      </section>
      <HireMe />
      <section id="experiences" className="sticky top-0">
        <Experiences />
      </section>
      {/* <Experience /> */}
      <section id="project" className="sticky top-0 ">
        <Project />
      </section>
      <Skills />
      <Education />
      <section id="contact" className="sticky top-0 hidden md:block">
        <Contact />
      </section>
      <Footer />
    </>
  )
}

export default App
