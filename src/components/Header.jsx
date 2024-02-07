import React, { useState, useEffect } from "react";
import "../App.css";
import myImage from "../assets/logo.png";
import DoneIcon from "@mui/icons-material/Done";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link as ScrollLink } from "react-scroll";
import Navlist from "./Navlist";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const [isClick, setIsClick] = useState(true);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const handleWindowSizeChange = () => {
      setMenuOpen(window.innerWidth <= 600);
    };

    // Initial check
    handleWindowSizeChange();

    // Event listener for window resize
    window.addEventListener("resize", handleWindowSizeChange);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);
  const menuOpen = () => {
    setIsClick(false);
  };
  const menuClose = () => {
    setIsClick(true);
  };
  const handleClick = () => {
    if (isMenuOpen) {
      setIsClick(!isClick);
    }
  };
  const menuButtonStyle = {
    display: isClick ? "block" : "none",
  };

  const closeButtonStyle = {
    display: isClick ? "none" : "block",
  };

  const navListStyle = {
    display: isMenuOpen && isClick ? 'none' : 'flex',
  };

  const mobileNavListStyle = {
    display: isMenuOpen && isClick ? 'none' : 'flex',
    '@media (max-width: 600px)': {
      display: 'none !important',
    },
  };

  return (
    <>
      <div>
        <div className="header">
          <div className="logo">
            <img src={myImage} alt="logo" />
          </div>
          <div className="user">
            <p>User Name</p>
            <KeyboardArrowDownIcon className="user_icon" />
          </div>
          <div className="menuIcon">
            <MenuIcon onClick={menuOpen} style={menuButtonStyle} />
            <CloseIcon onClick={menuClose} style={closeButtonStyle} />
          </div>
        </div>

        <div className="topSection">
          <h1>Choose your favorite Cetegory</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, nobis.
          </p>
        </div>

        <div className="secSection">
          <select name="cars" id="cars" className="selectField">
            <option value="volvo">E-commerce</option>
            <option value="Marketing">Marketing</option>
            <option value="opel">Payment Gatway</option>
          </select>
          <p>Select your creative Web Page Design</p>

          <ul style={isMenuOpen ? mobileNavListStyle : navListStyle}>
            <ScrollLink to="section1" smooth={true} duration={500}>
              <li onClick={() => {handleClick(), navigate("/")}}>
                Home <DoneIcon />
              </li>
            </ScrollLink>
            <ScrollLink to="section1" smooth={true} duration={500}>
              <li onClick={() => {handleClick(), navigate("/about")}}>
                About Us <DoneIcon />
              </li>
            </ScrollLink>
            <ScrollLink to="section1" smooth={true} duration={500}>
              <li onClick={() => { handleClick(), navigate("/service")}}>
                Service <DoneIcon />
              </li>
            </ScrollLink>
            <ScrollLink to="section1" smooth={true} duration={500}>
              <li onClick={() => {handleClick(),navigate("/casestudy")}}>
                Case Study <DoneIcon />{" "}
              </li>
            </ScrollLink>
            <ScrollLink to="section1" smooth={true} duration={500}>
              <li onClick={() => {handleClick(),navigate("/blog")}}>
                Blog <DoneIcon />
              </li>
            </ScrollLink>
            <ScrollLink to="section1" smooth={true} duration={500}>
              <li onClick={() => {handleClick(),navigate("/career")}}>
                Career <DoneIcon />
              </li>
            </ScrollLink>
            <ScrollLink to="section1" smooth={true} duration={500}>
              <li onClick={() => {handleClick(),navigate("/contactus")}}>
                Contact Us <DoneIcon />
              </li>
            </ScrollLink>
          </ul>
          <ScrollLink to="section1" smooth={true} duration={500}>
            <button>
              See All <ArrowDownwardIcon />
            </button>
          </ScrollLink>
        </div>
        <div className="thirdSection"></div>
      </div>
    </>
  );
};

export default Header;
