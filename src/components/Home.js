import React from "react";
import {FaFacebook,FaLinkedin} from "react-icons/fa";
import { MdEmail} from "react-icons/md";
import "../style.css";
import { useNavigate } from "react-router-dom";
import Hometext from "../Text/Hometext";
import Videos from "./Videos";



const Home = () => {
  
  const navigate = useNavigate();

  const navigateToBMI = () => {
    navigate("/bmi");
  };

  return (
    <div className="Home">
      <h1 className="quote">“Happiness is the highest form of health” </h1>
      <button className="start" onClick={navigateToBMI}>
        Get Started
      </button>

      <Hometext />

      {/* <Videos/>
     */}
     <footer className="footer">
      <div>
        <h4 style={{textAlign:'center', margin:'2px'}}><small>Copyright &copy; 2023 Namaskar. All Rights Reserved</small> </h4>
      </div>
      <div className="div-icon" >
    <FaFacebook  className="icons fb"/>
    <FaLinkedin className="icons ln"/>
    <MdEmail className="icons em"/>
      </div>
     </footer>
    </div>
  );
};

export default Home;

