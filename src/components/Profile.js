import React, { useState } from "react";
import  '../styling/Report.css'
const Profile = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const[gen,setGen]=useState(false);
  const[status,setStatus]=useState(false);
  let generate=(e)=>{
    e.preventDefault();
    setGen(true);
  }
 
  let handleSubmit=()=>{
   
    console.log("hello")
        localStorage.setItem("NAME",name)
        localStorage.setItem("AGE",age)
        setName("");
        setAge("");
        
       
  }
  let visible=(e)=>{
    e.preventDefault();
   
    handleSubmit()
    setStatus(true)
  }
  return (
    <div className="cont">

    <div className="form">
      <h2>Enter Your Details</h2>
      <div className="report-form">
        <form>
          <label>Name: </label>
          <input type="text" onChange={(e1) => setName(e1.target.value)} />
          <label>Age: </label>
          <input type="text" onChange={(e2) => setAge(e2.target.value)} />
       
          <button type="submit" className="generate" disabled={!name} onClick={visible}>Submit</button>
        </form>
      </div>
    </div>
    <div className="disclaimer">
      <h3>ITS REQUESTED TO CHECK YOUR BMI AND HAVE A FITNESS TEST
        <br/> BEFORE GENERATING THE REPORT. THANK YOU</h3> </div>
   
    <button onClick={generate} className="generate2" style={{'display':status?'inline-block':'none'}}>Generate Your Report</button>
    { gen && <Report/>}
    </div>
  );
};

export default Profile;
const Report=()=>{
let P_bmi=localStorage.getItem("BMI");
let P_name=localStorage.getItem("NAME").toLocaleUpperCase();
let P_age=localStorage.getItem("AGE");
let P_height=localStorage.getItem("HEIGHT")
let P_weight=localStorage.getItem("WEIGHT")

let P_fit_calc=localStorage.getItem("FIT_RES")



  return(

  <div className="report">
    <div>
      <h1 style={{textAlign:'center', marginBottom:'2rem', textDecoration: 'underline'}}>FITNESS REPORT</h1>
      <div className="info" style={{color:"black"}}>
        <h2 style={{textAlign:'center',marginBottom:'0.7rem'}}>This report belongs to {P_name} of age {P_age} for informing about his/her fitness and health related details. </h2>
        <div className="rep-details" style={{marginLeft:'10rem'}}>

            <h3 style={{marginBottom:'4px'}}>1.WEIGHT :  {P_weight} lbs</h3>
            <h3 style={{marginBottom:'4px'}}>2.HEIGHT :  {P_height} inch</h3>
            <h3 style={{marginBottom:'4px'}}>3.BMI :  {P_bmi} %</h3>
            <h3 style={{marginBottom:'4px'}}>4.FITNESS :  {P_fit_calc} %</h3>
            {P_fit_calc<"85"?<h3 style={{marginTop:'1.2rem', textAlign:'center'}}> REMARKS: You have to work more to improve your health</h3>:<h3 style={{marginTop:'1.2rem', textAlign:'center'}}>REMARKS: You have a good health.</h3>}

        </div>
        
      </div>
    </div>
  </div>
  )
}


const Disclaimer=()=>{
  return<h1>hello rashika here</h1>
}