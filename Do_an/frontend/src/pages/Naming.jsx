import React from 'react'
import About from '../components/About'
import Body from '../components/Body'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Name from '../components/Name'
import Navbar from '../components/Navbar'

const Naming = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
        <Navbar />
        <div className='mt-[100px]'>
          <About />
        </div>
        <Name />
        <Body />
        <Contact />
        <Footer />
      </div>
  )
}

export default Naming