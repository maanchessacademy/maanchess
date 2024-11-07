import React from 'react'
import "./Home.css"
import kids from "./images/chess-kids.png"
import Callus from '../../components/Button/btnb/Callusa'
import Carda from '../../components/Cards/Carda'
import a from "./images/1.png"
import b from "./images/2.png"
import c from "./images/3.png"
import d from "./images/4.png"
import Whychess from '../Whychess/Whychess'
import Courses from "../Courses/Courses"
import Contact from "../Contact/Contact"
import Whyus from "../Whyus/Whyus"

const Home = () => {
 
  return (
    <>
      <div className='home_main'>
        <div className="home-head">
          <div className="home-head-left animate__animated animate__bounceInLeft">
            <p className="home-heading">Welcome to Maan Chess Academy,<br></br> Join us for India's top chess program <br></br> for kids, <br></br>  designed by experts.</p>
            <div className="home-heading-deco"></div>
            <p className="home-para">Let your child learn chess and watch it become your best decision ever!</p>
            <br></br>
            <div className="home-button">
              <Callus />
            </div>
          </div>
          <div className="home-head-right animate__animated animate__bounceInRight">
            <img className="home-right-img" alt="car" src={kids} />
          </div>
        </div>
        <div className="home-cards">
          <Carda img={b} msg="Why us?" />
          <Carda img={d} msg="Why Chess for kids?" />
          <Carda img={a} msg="Courses" />
          <Carda img={c} msg="Testimonials" />
        </div>
      </div>
      <Whychess />
      <Courses />
      <Contact />
      <Whyus />
    </>
  )
}

export default Home