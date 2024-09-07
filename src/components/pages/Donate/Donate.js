import React from 'react'
import './Donate.css'

export const Donate = () => {
  return (
    <div className='donate-portal'>
      <div className='donation-title'>
        <h2>Donate now!</h2>
      </div>

      <div className='portal-field'>
        <div className='field'>
          <label>Amount *</label>
          <input type='number' placeholder='(in rupees)'/>
        </div>

        <div className='field'>
          <label>Date</label>
          <input type='date'/>
        </div>

        <div className='field'>
          <label>Reason</label>
          <select>
            <option>Admin development</option>
            <option>College development</option>
            <option>Management development</option>
            <option>Student development</option>
            <option>Project investment</option>
            <option>Student help</option>
          </select>
        </div>

        <div className='field'>
          <label>Notes</label>
          <textarea cols={30} rows={5} />
        </div>

        <div className='donate-btn'>
          <button>Donate</button>
        </div>
      </div>
    </div>
  )
}
