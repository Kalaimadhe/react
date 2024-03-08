import React from 'react'
import './Home.css'
import logo from '../Assets/image1.jpg'

const Home =()=> {
  return(
    <div >
      <div class="home">
        <div class="wrapper">
          <div class="text">
            <h1 class="title">
              Lessons and insights  <span>from 8 years</span>
            </h1>
            <p class="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
              id.
            </p>
            <a href="#" class="a_btn">Register</a>
          </div>
          <div class="img">
            <img src={logo} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home