import React from 'react'
import './About2.css'
import image3 from '../Assets/image3.jpg'

const About2 =()=> {
    const data = [
     {
      title1:"How to design your site footer",
      title2:"like we did",
     },
    ]
  return (
    <section className='about-margin'>
    <div className='conta-flex'>
      {data.map((val) => (
        <div className='a-container'>
          <div className='left-mt'>
            <div className='hear'>
              <h1>{val.title1}</h1>
              <h1>{val.title2}</h1>
            </div>

            <p>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt
             molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat
             at libero ultrices millis. In hac habitasse platea dictumst. Vivamus vihicula leo dui
             at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet
             urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa.
             Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec at tjae
             consectetur faucibus ipsum id gravida.</p>
            <div className='l-bt'>Learn More</div>
          </div>

          <div className='righht'>
            <div className='imgs'>
              <img src={image3} alt=''/>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);
};

export default About2

