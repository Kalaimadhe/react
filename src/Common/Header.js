import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import logo from '../Assets/nexcent-logo.png'

const Header =()=> {
  const [sidebar,setSidebar]=useState(false)

return (
      <div>
        <div className='hea'>
        <div className='contai-flex'>
         <img src={logo} alt="Nexcent Logo" />
        </div>

        <div className='nav'>
          <ul className={sidebar ? "nav-links-sidebar" : "nav-links"} onClick={()=>setSidebar(false)}>
            <li><button className='navv'><Link to='/'>Home</Link></button></li>
            <li><button className='navv'><Link to='/features'>Features</Link></button></li>
            <li><button className='navv'><Link to='/community'>Community</Link></button></li>
            <li><button className='navv'><Link to='/blog'>Blog</Link></button></li>
            <li><button className='navv'><Link to='/pricing'>Pricing</Link></button></li>
          </ul>
        </div>

        <div className='regian-btn'>Register</div>
      </div>
      </div>
  )
}

export default Header