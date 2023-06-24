import React from "react";
import "../styling/section.css";
import diet from "../images/excercise-loose.jpg";
import excercise from "../images/excersise-loose.jpeg";
import { useNavigate } from "react-router-dom";
import yoga1 from "../images/yogaBackground.avif"


/*loose weight */
const items1 = [
  {
    image: `${yoga1}`,
    name: "YOGA",
    forward:"/looseW"
  },
  // {
  //   image: `${diet}`,
  //   name: "DIET",
  //   forward:"/",
  // },
  {
    image: `${excercise}`,
    name: "EXERCISE",
    forward:"/looseWExc"
  },
];

/*gain weight */
const items2 = [
  {
    image: `${yoga1}`,
    name: "YOGA",
    forward:"/gainW"
  },
  // {
  //   image: `${diet}`,
  //   name: "DIET",
  //   forward:"/",
  // },
  {
    image: `${excercise}`,
    name: "EXERCISE",
    forward:"/gainWExc"
  },
];


/*Loose weight */
const Section1 = () => {
  const navigate =useNavigate();

  const list = items1.map((data) => {
    return (

      <div className="section-parts">
        <div className="img-section">
          <img src={data.image} alt={data.name} />
        </div>
        <div>
          <p className="section-head">{data.name}</p>
        </div>
        <div>
          <button className="section-btn" onClick={()=>navigate(`${data.forward}`)}>Click here</button>
        </div>
      </div>
     
    );
  });
  return (
    <div>

    <div className="section-start">
      <h2 className="section-title">
        Want to loose weight? Here's the ways you can
      </h2>
      <div className="section">{list}</div>
    </div>
    </div>
  );
};



/* Gain weight */
const Section2 = () => {
  const navigate =useNavigate();

  const list1 = items2.map((data1) => {
    return (

      <div className="section-parts">
        <div className="img-section">
          <img src={data1.image} alt={data1.name} />
        </div>
        <div>
          <p className="section-head">{data1.name}</p>
        </div>
        <div>
          <button className="section-btn" onClick={()=>navigate(`${data1.forward}`)}>Click here</button>
        </div>
      </div>
     
    );
  });
  return (
    <div>

    <div className="section-start">
      <h2 className="section-title">
        Want to Gain weight? Here's the ways you can
      </h2>
      <div className="section">{list1}</div>
    </div>
    </div>
  );
};

export { Section1, Section2 };
