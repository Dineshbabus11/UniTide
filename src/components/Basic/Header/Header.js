import React from 'react'
import './Header.css'

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
        <p>Home</p>
        <p>About</p>
        <p>Donate</p>
        <p>Network</p>
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
