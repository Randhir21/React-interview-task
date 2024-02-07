import React from 'react'
import "../../App.css";
import image from '../../assets/image1.png'
const Blog = () => {
  return (
    <>
       <h2 style={{textAlign:"center"}}>Blog Page</h2>
      <img className='homeImages' src={image} alt="images" />
    </>
  )
}

export default Blog
