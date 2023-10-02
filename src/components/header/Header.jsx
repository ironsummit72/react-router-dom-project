import React from 'react'
import "../../style/header.css"
import { Link} from 'react-router-dom'

function header() {
  return (
    <div className='header'>
      <h1 className="brandname">QuickBite</h1>
      <Link className='links' to='/'>Home</Link>
      <Link className='links' to='/about'>About</Link>
      <Link className='links' to='/contact'>Contact</Link>
    </div>
  )
}

export default header