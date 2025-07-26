import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './input.css'
import Header from './components/header.jsx'
import About from './components/aboutme.jsx'
import Projects from './components/projects.jsx'
import Skills from './components/skill.jsx'
import Education from './components/Education.jsx'
import Hobbies from './components/hobbies.jsx'
import Extracurricular from './components/extracurricular.jsx'
import Contact from './components/contact.jsx'


export default function App() {
  return (
   <div className = "bg-white-500 p-4 hover:bg-gray-600 transition duration-300">
    <div className = "bg-gray-100 max-w-4xl mx-auto rounded-xl hover:shadow-lg shadow-gray-300">
      <Header />
      <About />
      <Projects/>
      <Skills/>
      <Education/>
      <Hobbies/>
      <Extracurricular/>
      <Contact />
    </div>
     
   </div>
  );
}
