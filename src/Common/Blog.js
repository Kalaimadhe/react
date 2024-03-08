import React from 'react'
import './Blog.css'
import image18 from '../Assets/image18.png'
import image19 from '../Assets/image19.png'
import image20 from '../Assets/image20.png'

const Blog =()=> {

  const Blogs = [
    { id: 1, title: "Creating Streamlined Safeguarding Processes With Oneran", image :image18},
    { id: 2, title: "What are your safeguarding responsibilities and how can you manage them?", image :image19},
    { id: 3, title: "Revamping the Membership Model with Triathlon Australia", image :image20},
  ];
  return (
    <section className='bbllog-top'>
      <div className='connta'>
        <div className='heaadd'>
          <h2>Caring is the new marketing</h2>
          <p>The nexcent blog is the best place to read about the latest membership insights,<br/>
            trends and more. See who joining in the community, read about how our <br/>
            community are increasing their membership income and lot's more.
          </p>
        </div>

        <div className='contain-ggggr'>
          {Blogs.map((val) => {
            return (
            <div className='bx'>
            <div className='kalai'>
              <img src={val.image}/><br/>
            </div>
            <div className='texttaa'>
              <p>{val.title}</p>
            </div>
            </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Blog