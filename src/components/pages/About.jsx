import React from 'react'
import "../../App.css";
import image from '../../assets/image1.png'
const About = () => {
  return (
    <>
       <h2 style={{textAlign:"center"}}>About Page</h2>
      <img className='homeImages' src={image} alt="images" />
    </>
  )
}

export default About
