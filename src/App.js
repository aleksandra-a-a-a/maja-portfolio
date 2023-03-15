
import './App.css';
import Fade from 'react-reveal/Fade';
import About from './components/About.jsx'
import Contact from './components/Contact';
import Experience from './components/Experience';
import Skills from './components/Skills';
import skillsData from './skillsData';
import React, { useState } from 'react'
import Typewriter from 'typewriter-effect';

function App() {
  const skillSet = skillsData.map((skillSet) => {
    return <Skills key={skillSet.id} skillSet={skillSet}/>;
  });

  const [contact, showContact] = useState()
  function setShowContact() {
    showAboutMe(false)
    showExperience(false)
    showSkills(false)
    showContact(true)
  }

  const [aboutMe, showAboutMe] = useState(true)
  function setShowAboutMe() {
    showContact(false)
    showExperience(false)
    showSkills(false)
    showAboutMe(true)
  }

  const [experience, showExperience] = useState()
  function setShowExp() {
    showAboutMe(false)
    showContact(false)
    showSkills(false)
    showExperience(true)
  }
  const [skills, showSkills] = useState()
  function setShowSkills() {
    showAboutMe(false)
    showContact(false)
    showExperience(false)
    showSkills(true)
  }
  return (
    <Fade duration={1800}>
    <div className="App">
<div className='navbar'>
        <ul>
            <li onClick={setShowAboutMe}>about me</li>
            <li onClick={setShowExp}>experience</li>
            <li onClick={setShowSkills}>skills</li>
            <li onClick={setShowContact}> contact</li>
        </ul>
    </div>

   { (() => {
    if (skills) 
    return <Fade>
      <Typewriter
        options={{
        strings: ["what's in it for you?"],
        autoStart: true,
        loop: true,
        wrapperClassName: "exp--title",
        delay: 80
      }}/>
      <div className='skills--cont'>{skillSet}</div>
      </Fade>
    if (experience) 
      return <Fade><Experience /></Fade>
    if (contact) {
      return <Fade><Contact /></Fade>
    }
    if (aboutMe) 
    return <Fade><About /></Fade>
   })()
  }
    
    </div>
    </Fade>
  )
  
}

export default App;
