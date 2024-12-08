import React from 'react'
import './Navbar.css'   
import Navbar1 from './Navbar1/Navbar1'
import Navbar2 from './Navbar2/Navbar2'
import OverallSummary from './OverallSummary/OverallSummary'
import BuildInput from './BuildInput/BuildInput'
const Navbar = () => {
  return (
    <div className='navbar'>
       <Navbar1 />
       <Navbar2 />
       <OverallSummary  />
       <BuildInput />
    </div>  
  )
}

export default Navbar
