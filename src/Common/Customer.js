import React from 'react'
import './Customer.css'
import download from '../Assets/download.jpeg'

const Customer =()=> {
   
return (
    <div className='testimonial'>
      <div className='testimonial-con'>
            <div className='about-con'>
                <div className='llll-top'>
                <div className='txtt-image'>
                  <img src={download}></img>
                </div>

                <div className='txtt-content'>
                <div className='test-p'>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A omnis inventore,
                     rerum quod nobis aperiam ipsum dolor fuga,  harum praesentium consequatur,
                     laudantium facilis! Nam, fugit architecto? Vitae voluptate quo  ut! Ipsum,
                     iste! Earum animi eligendi optio sunt minima consequuntur id neque, rem 
                     dolori numquam quisquam, architecto? Vitae voluptate quo ut! Ipsum,  Earum
                     animi eligendi optio sunt minima consequuntur id neque, rem doloribus these
                     rem doloribus numquam quisquam.</p>
                  <h5 className='txtt-name'>Tim Smith</h5>
                  <button className='lnk'>Meet all Customer</button>
                </div>
                </div>
            </div>
          </div>
        </div> 
      </div>
    
  );
};

export default Customer