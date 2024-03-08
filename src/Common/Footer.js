import React from 'react'
import './Footer.css'
import logo from '../Assets/nexcent-logo.png'

const Footer =()=> {
  return (
    <div className='last'>
      <div>
        <div className='text-center'>
          <h1>Pellentesque suscipit <br/>fringilla libero eu.</h1>
        </div>
        <div>
          <button className='btnnss'>Get a Demo</button>
        </div>
        </div>      

    <footer className='footer'>
        <div className='containedd'>
            <div className='rowwss'>
                <div className='footer-column'>
                    <img src={logo}></img>
                    <h3 className='kkk'>Copyright 2020 Nexcent ltd.</h3>
                    <h3 className='kkk'>All rights reserved</h3>
                </div>
                <div className='footer-column'>
                    <h4 className='aaa'>COMPANY</h4>
                    <ul className='lll'>
                        <li><a href='#'>About us</a></li>
                        <li><a href='#'>Blog</a></li> 
                        <li><a href='#'>Contact us</a></li>
                        <li><a href='#'>Pricing</a></li>
                        <li><a href='#'>Testimonials</a></li>
                    </ul>
                </div>
                <div className='footer-column'>
                    <h4 className='aaa'>SUPPORT</h4>
                    <ul className='lll'>
                        <li><a href='#'>Help Center</a></li>
                        <li><a href='#'>Terms of service</a></li>
                        <li><a href='#'>Legal</a></li>
                        <li><a href='#'>Privacy policy</a></li>
                        <li><a href='#'>Status</a></li>
                    </ul>
                </div>
                <div className='footer-column'>
                    <h4 className='aaa'>STAY UP TO DATE</h4>
                    <form>
                    <input type='name@flowbite.com' placeholder='name@flowbite.com'/>
                    </form>
                </div>
                </div>
            </div>
    </footer>
    </div>
  )
}

export default Footer