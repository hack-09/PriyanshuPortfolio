import React from 'react'
import HomeFirstSec from './HomeFirstSec.js'
import HomeSecondSec from './HomeSecondSec.js'
import ProjectSec from './ProjectSec.js'
import ContactSec from './ContactSec.js'

function Home() {
  return (
    <div className="bg-primary text-white">
        <HomeFirstSec/>
        <div className="bg-light w-50" style={{height:"2px"}}></div>
        <HomeSecondSec/>
        <div className="bg-light w-50" style={{height:"2px"}}></div>
        <ProjectSec/>
        <ContactSec/>
    </div>
  )
}

export default Home