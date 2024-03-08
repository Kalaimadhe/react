import React from 'react'
import './Branding.css'
import logo from '../Assets/logo1.jpg'
import logo2 from '../Assets/logo2.jpg'
import logo3 from '../Assets/logo3.jpg'
import logo4 from '../Assets/logo4.jpg'
import logo5 from '../Assets/logo5.jpg'
import logo6 from '../Assets/logo6.jpg'
import logo7 from '../Assets/logo7.jpg'
import icon1 from '../Assets/icon1.jpg'
import icon2 from '../Assets/icon2.jpg'
import icon3 from '../Assets/icon3.jpg'

const Branding=()=> {
    
  return (
    <div>
        <section className='branding'>
            <div className='grid'>
                <h1 className='t1'>Our Clients</h1>
                <br/>
                <p className='t2'>We have been working with some fortune 500+ clients</p>
            </div>
            <div className='logo'>
                <ul className='logoss'>
                    <li><img src={logo}></img></li>
                    <li><img src={logo2}></img></li>
                    <li><img src={logo3}></img></li>
                    <li><img src={logo4}></img></li>
                    <li><img src={logo5}></img></li>
                    <li><img src={logo6}></img></li>
                    <li><img src={logo7}></img></li>
                </ul>
            </div>

            <h1 className='under-logo'>Manage your entire community in a</h1>
            <br/>
            <h1 className='under-logo'>single system</h1>
            <br/>
            <p>Who is nexcent suitable for ?</p>

            <ul className='lower-logo'>
              <li>
                <img src={icon1}/>
                <h2>Membership
                <br/>Organisations 
                </h2>
                <p>Our membership management software 
                <br/>provides full automation of membership
                <br/>renewals and payments.
                </p>
             </li>
            

             <li>
                <img src={icon2}/>
                <h2>National
                <br/>Associations
                </h2>
                <p>Our membership management software
                <br/>provides full automation of membership
                <br/>renewals and payments.</p>
            </li>

            <li>
                <img src={icon3}/>
                <h2>Clubs And Groups</h2>
                <p>Our membership management software
                <br/>provides full automation of membership
                <br/>renewals and payments.</p>
            </li>
         </ul>
        </section>
    </div>
  )
}

export default Branding
  