import React from 'react';
import './About.css';
import image2 from '../Assets/image2.jpg'

const About = () => {
  const data = [
    {
      title1: "The unseen of spending three",
      title2: "years at Pixelgrade",
    },
  ];

  return (
        <section className='about-top'>
        <div className='c-flex'>
          {data.map((val) => (
            <div className='about-c'>
              <div className='l-mtop'>
                <div className='heading'>
                  <h1>{val.title1}</h1>
                  <h1>{val.title2}</h1>
                </div>

                <p>Lorem ipsum dolor sit auto complete Classes, consectetur adipiscing editable Input Types. Sed sit amet 
              justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed
              Portal. Nuliam mattis tristique get List Item Secondary Action Classes Utility Class. Nullam pulvinar sit 
              amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem . Donec
              elementum pulvinar odio.</p>
              <button className='bbb'>Learn More</button>
              </div>

            
                <div className='iimg'>
                  <img src={image2} alt=''/>
                </div>
              </div>
            
          ))}
        </div>
      </section>
  );
};

export default About
