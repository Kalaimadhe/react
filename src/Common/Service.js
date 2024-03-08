import React from 'react'
import './Service.css'
import micon1 from '../Assets/micon1.jpg'
import micon2 from '../Assets/micon2.jpg'
import micon3 from '../Assets/micon3.jpg'
import micon4 from '../Assets/micon4.jpg'

function Service() {
  return (
    <div className='service'>
    <div className='lft'>
      <h2 className='lft1'>Helping a local</h2>
      <h2 className='lft2'>business  reinvent itself</h2>
      <p>We reached here with our hard work and dedication</p>
    </div>

    <div className='rght'>
    <ul className='micon1'>
      <li>
      <img src={micon1}/><br/>
        <h4 className='mtext1'>2,245,341</h4>
        <p>Members</p>
      </li>

    <li>
      <img src={micon2}/><br/>
      <h4 className='mtext2'>46,328</h4>
      <p>Clubs</p>
    </li>
    </ul>
    
    <ul className='micon3'>
      <li>
      <img src={micon3}/><br/>
      <h4 className='mtext3'>828,867</h4>
      <p>Event Bookings</p>
      </li>
    
      <li>
      <img src={micon4}/><br/>
      <h4 className='mtext4'>1,926,436</h4>
      <p>Payments</p>
      </li>
    </ul>
    </div>
    </div>
  )
}

export default Service