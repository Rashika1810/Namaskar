import React, { useState } from "react";
import "../index.css";
import { Section1, Section2 } from "./Section";
import Fitness from "./Fitness"; 

const Bmi = () => {
  //state
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState(0);
  const [message, setMessage] = useState("");
  const [show, setShow] = useState("");


  let calc = (e) => {
    e.preventDefault();

    if (weight === 0 || height === 0) {
      alert("Please enter valid height and weight");
      setBmi(0);
    } else {
      var bmi = (weight / (height * height)) * 703;
      setBmi(bmi.toFixed(1));
      localStorage.setItem("BMI",bmi.toFixed(1))
      localStorage.setItem("HEIGHT",height)
      localStorage.setItem("WEIGHT",weight)
      
    }

    if (bmi < 18.5 && bmi>0) {
      setMessage("You are underweight");
      setShow("Under");
    } else if (bmi >= 18.5 && bmi < 24.9) {
      setMessage("You are healthy weight");
      setShow("Normal");
    } else if(bmi>=25)
      {setMessage("You are overweight");  
      setShow("Over");  }
  

    
  };
  
  let reload = () => {
    window.location.reload();
  };

  return (
    <div>

      <div className="Bmi">
        <div className="container">
          <h2 className="center">BMI Calculator</h2>
          <form onSubmit={calc}>
            <div>
              <label>Weight(lbs)</label>
              <input
                value={weight}
                onChange={(e) => {
                  setWeight(e.target.value);
                }}
              />
            </div>
            <div>
              <label>Height(in)</label>
              <input
                value={height}
                onChange={(e1) => {
                  setHeight(e1.target.value);
                }}
              />
            </div>
            <div>
              <button className="btn" type="submit">
                Submit
              </button>
              <button
                className="btn btn-outline"
                onClick={reload}
                type="submit"
              >
                Reload
              </button>
            </div>
          </form>
          <div className="center">
            <h3>Your BMI is: {bmi}</h3>
            <p className="bmi-msg">{message}</p>
          </div>
        </div>
      </div>
      {show === "Under" && <Section2 />}
      {show === "Over" && <Section1 />}
      {show === "Normal" && <Fitness />}
     
    </div>
  );
};

export default Bmi;
