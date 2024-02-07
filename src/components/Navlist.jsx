import React,{useState} from 'react'
import DoneIcon from "@mui/icons-material/Done";
import { useNavigate } from "react-router-dom";
import { Link as ScrollLink } from 'react-scroll';
import "../App.css";
const Navlist = () => {
    const navigate = useNavigate();
    // const [isClick,setIsClick] =useState(true)
    // const menuOpen=()=>{
    //   setIsClick(false)
    // }
    // const menuClose=()=>{
    //   setIsClick(true)
    // }
  return (
    <>
      <ul >
          <ScrollLink to="section1" smooth={true} duration={500}>
            <li onClick={() => navigate("/")}>
              Home <DoneIcon />
            </li>
            </ScrollLink>
            <ScrollLink to="section1" smooth={true} duration={500}>

            <li onClick={() => navigate("/about")}>
              About Us <DoneIcon />
            </li>
            </ScrollLink>
            <ScrollLink to="section1" smooth={true} duration={500}>

            <li onClick={() => navigate("/service")}>
              Service <DoneIcon />
            </li>
            </ScrollLink>
            <ScrollLink to="section1" smooth={true} duration={500}>

            <li onClick={() => navigate("/casestudy")}>
              Case Study <DoneIcon />{" "}
            </li>
            </ScrollLink>
            <ScrollLink to="section1" smooth={true} duration={500}>

            <li onClick={() => navigate("/blog")}>
              Blog <DoneIcon />
            </li>
            </ScrollLink>
            <ScrollLink to="section1" smooth={true} duration={500}>

            <li onClick={() => navigate("/career")}>
              Career <DoneIcon />
            </li>
            </ScrollLink>
            <ScrollLink to="section1" smooth={true} duration={500}>

            <li onClick={() => navigate("/contactus")}>
              Contact Us <DoneIcon />
            </li>
            </ScrollLink>
          </ul>
    </>
  )
}

export default Navlist
