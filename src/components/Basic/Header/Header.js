import React from 'react'
import './Header.css'

export const Header = () => {
  return (
    <>
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
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Donate</li>
                <li>Network</li>
                <li>Jobs</li>
                <li>Alumni</li>
                <li>Success</li>
                <li>Reunion</li>
                <li>Feedback</li>
                <li>Contact</li>
            </ul>
        </div>
    </>
  )
}
