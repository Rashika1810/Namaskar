import { Routes, Route, Link } from "react-router-dom";

import Home from "./components/Home";
import Bmi from "./components/Bmi";
import Fitness from "./components/Fitness";
import GainWeight from "./components/GainWeight";
import LooseWeight from "./components/LooseWeight";
import ExcerciseLoose from "./components/ExcerciseLoose";
import Profile from "./components/Profile";
import logo from "./images/logo.avif"
import ExcerciseGain from "./components/ExcerciseGain";

function App() {
  return (
    <div className="App">
      <div className="nav-cont">
        <div className="web-name">
          <img src={logo} className="logo"/>
          <h3>Namaskar</h3>
        </div>

        <div className="nav">
          <Link to="/" className="menu">HOME</Link>

          <Link to="/fitness" className="menu">FITNESS</Link>
          <Link to="/bmi" className="menu">BMI</Link>

          <div className="item">
            YOGA
            <table className="dropdown">
              <tbody>

              <tr>
                <td>
                  <Link to="/looseW">Yoga to loose weight</Link>
                </td>
              </tr>
                <tr>
                  <td>
                    <Link to="/looseWExc">Exercise to loose weight</Link>
                  </td>
                </tr>
              <tr>
                <td>
                  <Link to="/gainWExc">Exercise to gain weight</Link>
                </td>
              </tr>
              <tr>
                <td>
                  <Link to="/gainW">Yoga to gain weight </Link>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div >
          
          <Link to="/profile" className="pro">Profile</Link>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fitness" element={<Fitness />} />
        <Route path="/bmi" element={<Bmi />} />
        <Route path="/gainW" element={<GainWeight />} />
        <Route path="/looseW" element={<LooseWeight />} />
        <Route path="/looseWExc" element={<ExcerciseLoose />} />
        <Route path="/gainWExc" element={<ExcerciseGain/>} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
