import React, { useState } from "react";
import "../index.css";
import { Link } from "react-router-dom";

const Fitness = () => {
  const [one, setOne] = useState(0);
  const [two, setTwo] = useState(0);
  const [three, setThree] = useState(0);
  const [four, setFour] = useState(0);
  const [five, setFive] = useState(0);
  const [six, setSix] = useState(0);
  const [seven, setSeven] = useState(0);
  const [eight, setEight] = useState(0);
  const [fit_calc, setFit_calc] = useState(0);
  const [msg, setMsg] = useState("");
  const [status, setStatus] = useState("");

  let calcFitness = (e) => {
    e.preventDefault();

    var fit_calc =
      ((Number(one) +
        Number(two) +
        Number(10 - three) +
        Number(10 - four) +
        Number(10 - five) +
        Number(10 - six) +
        Number(seven) +
        Number(10 - eight)) /
        80) *
      100;
    setFit_calc(fit_calc.toFixed(1));
    localStorage.setItem("FIT_RES", fit_calc);

    if (fit_calc >= 85 && fit_calc <= 100) {
      setMsg("You have a healthy lifestyle");
      setStatus("Best");
    } else if (fit_calc >= 60 && fit_calc < 85) {
      setStatus("Better");

      setMsg("You have to work more to maintain a healthy lifestyle");
    } else if (fit_calc >= 40 && fit_calc < 60) {
      setStatus("Good");

      setMsg("You have a poor lifestyle. Improve your lifestyle");
    } else {
      setStatus("Bad");

      setMsg("You are high risk");
    }
  };

  let reload = () => {
    window.location.reload();
  };

  return (
    <div>
      <div className="Fitness">
        <div className="Fitness-container">
          <h2 className="center head">Check your Fitness here</h2>
          <h3 className="bottom">(Rate Yourself out of 10)</h3>
          <form onSubmit={calcFitness}>
            <div>
              <label>1. Enough sleep in a week?</label>
              <input
                min="0"
                max="10"
                value={one}
                type="number"
                onChange={(f1) => {
                  setOne(f1.target.value);
                }}
              />
            </div>
            <div>
              <label>2. Doing physical work in a week?</label>
              <input
                min="0"
                max="10"
                value={two}
                type="number"
                onChange={(f2) => {
                  setTwo(f2.target.value);
                }}
              />
            </div>
            <div>
              <label>3. Eating junk food in a week?</label>
              <input
                min="0"
                max="10"
                value={three}
                type="number"
                onChange={(f3) => {
                  setThree(f3.target.value);
                }}
              />
            </div>
            <div>
              <label>4. Consuming alcohol in a week</label>
              <input
                min="0"
                max="10"
                value={four}
                type="number"
                onChange={(f4) => {
                  setFour(f4.target.value);
                }}
              />
            </div>
            <div>
              <label>5. Skip breakfast/ lunch/ dinner in a week?</label>
              <input
                min="0"
                max="10"
                value={five}
                type="number"
                onChange={(f5) => {
                  setFive(f5.target.value);
                }}
              />
            </div>
            <div>
              <label>6. Taking any supplements in a week?</label>
              <input
                min="0"
                max="10"
                value={six}
                type="number"
                onChange={(f6) => {
                  setSix(f6.target.value);
                }}
              />
            </div>
            <div>
              <label>7. Eatting fruits in a week?</label>
              <input
                min="0"
                max="10"
                value={seven}
                type="number"
                onChange={(f7) => {
                  setSeven(f7.target.value);
                }}
              />
            </div>
            <div>
              <label>8. Getting sick in a week?</label>
              <input
                min="0"
                max="10"
                value={eight}
                type="number"
                onChange={(f8) => {
                  setEight(f8.target.value);
                }}
              />
            </div>
            <div className="center">
              <button className="fit-btn" type="submit">
                Submit
              </button>
              <button className="fit-btn" onClick={reload}>
                Reload
              </button>
            </div>
            <div className="center">
              <p
                className="fit-result"
                style={{
                  borderColor:
                    status === "Best"
                      ? "green"
                      : status === "Better"
                      ? "yellow"
                      : status === "Good"
                      ? "orange"
                      : "red",
                }}
              >
                {fit_calc}%
              </p>
              <p
                className="msg"
                style={{
                  color:
                    status === "Best"
                      ? "green"
                      : status === "Better"
                      ? "yellow"
                      : status === "Good"
                      ? "orange"
                      : "red",
                }}
              >
                {msg}
              </p>
            </div>
          </form>
        </div>
      </div>
        {fit_calc < 85 && fit_calc > 0 && <Tips />}
        
    </div>
  );
};

const Tips = () => {
  return (
    
    <div className="tips">
      <div className="Render-bmi">
          <h2>
            Want to check your BMI? <Link to="/bmi">Click Here</Link>
          </h2>
        </div>
      <h2>TIPS FOR MAINTAINING A HEALTHY LIFESTYLE AND BODY WEIGHT </h2>
      <ol>
        <li>Measure and Watch Your Weight</li>
        <li>Limit Unhealthy Foods and Eat Healthy Meals</li>
        <li>Take Multivitamin Supplements</li>
        <li>Drink Water and Stay Hydrated, and Limit Sugared Beverages</li>
        <li>Exercise Regularly and Be Physically Active</li>
        <li>Reduce Sitting and Screen Time</li>
        <li>Get Enough Good Sleep </li>
        <li>Go Easy on Alcohol and Stay Sober</li>
        <li>Find Ways to Manage Your Emotions</li>
        <li>
          Use an App to Keep Track of Your Movement, Sleep, and Heart Rate
        </li>
      </ol>
      <h4>
        For more tips you can visit{" "}
        <a
          href="https://www.orthoindy.com/guides/healthy-lifestyle"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>
      </h4>
    </div>
  );
};

export default Fitness;
