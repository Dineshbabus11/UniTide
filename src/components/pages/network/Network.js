import React from 'react'
import './Network.css'
import Profile from './img/user.png'

export const Network = () => {
  return (
    <div className='network-portal'>
        <div className='network-title'>
            <h2>Let's Connect</h2>
        </div>

        <div className='connect-box'>
            <div className='profile-box'>
                <img src={Profile}/>
                <div className='profile-detail'>
                    <h3>Profile name</h3>
                    <h4>Designation</h4>
                    <h4>Company name</h4>
                    <h5>(2020-2024)</h5>
                </div>
                <div className='connect-btn'>
                    <button>Connect</button>
                </div>
            </div>

            <div className='profile-box'>
                <img src={Profile}/>
                <div className='profile-detail'>
                    <h3>Profile name</h3>
                    <h4>Designation</h4>
                    <h4>Company name</h4>
                    <h5>(2020-2024)</h5>
                </div>
                <div className='connect-btn'>
                    <button>Connect</button>
                </div>
            </div>

            <div className='profile-box'>
                <img src={Profile}/>
                <div className='profile-detail'>
                    <h3>Profile name</h3>
                    <h4>Designation</h4>
                    <h4>Company name</h4>
                    <h5>(2020-2024)</h5>
                </div>
                <div className='connect-btn'>
                    <button>Connect</button>
                </div>
            </div>

            <div className='profile-box'>
                <img src={Profile}/>
                <div className='profile-detail'>
                    <h3>Profile name</h3>
                    <h4>Designation</h4>
                    <h4>Company name</h4>
                    <h5>(2020-2024)</h5>
                </div>
                <div className='connect-btn'>
                    <button>Connect</button>
                </div>
            </div>

            <div className='profile-box'>
                <img src={Profile}/>
                <div className='profile-detail'>
                    <h3>Profile name</h3>
                    <h4>Designation</h4>
                    <h4>Company name</h4>
                    <h5>(2020-2024)</h5>
                </div>
                <div className='connect-btn'>
                    <button>Connect</button>
                </div>
            </div>
        </div>
    </div>
  )
}
