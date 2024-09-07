import React from 'react';
import './Home.css';
import campaign from './img/campaign.png'

export const Home = () => {
  return (
    <main>
      <div className='quotes'>
        <p>Let's make a campaign<br />
          that makes a family!</p>
        <img src={campaign} />
      </div>

      <div className='features'>
        <h1>Key Features</h1>
          <p>Built and maintain an updated Alumni Database</p>
          <p>Plan and organize successful Alumni meets</p>
          <p>Involve Alumni in student development</p>
          <p>Raise funds from Alumni with online payment</p>
          <p>Identify and showcase Alumni achievers</p>
          <p>Mentoring and special interest groups</p>
      </div>
    </main>
  )
}
