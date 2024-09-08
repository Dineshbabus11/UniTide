import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <nav>
      <div className='header-main'>
        <div className='header-name'>
          <p>UniTide</p>
        </div>
        <div className='header-login'>
          <p>Login</p>
          <p>Sign Up</p>
        </div>
      </div>
      <div className='divtwo'>
        <p><Link to='/' className='direct-link'>Home</Link></p>
        <p><Link to='/about' className='direct-link'>About</Link></p>
        <p><Link to='/donate' className='direct-link'>Donate</Link></p>
        <p><Link to='/network' className='direct-link'>Network</Link></p>
        <p>Jobs</p>
        <p>Alumni</p>
        <p>Success</p>
        <p>Reunion</p>
        <p>Feedback</p>
        <p>Contact</p>
      </div>
    </nav>
  )
}
