import React from 'react'
import lunges from '../images/GainWeightYoga/lunges.avif'
import crunches from '../images/GainWeightYoga/Crunches.avif'
import squates from '../images/GainWeightYoga/squates.avif'
import overhead from '../images/GainWeightYoga/overhead.avif'
import "../styling/excercise.css";
const Excercise=[
    {
        name:"1. Lunges",
        image:`${lunges}`,
        desc:"Flex your abdominal muscles while standing up straight. Make a big step forward. Lower your body until your shin is vertical and your thigh is parallel to the floor. Return to your original position by pressing back on your heel. Repeat with the opposite leg."
    },
    {

        name:"2. Crunches",
        image:`${crunches}`,
        desc:"With your knees bent and your feet flat on the floor, lie flat on a carpet or your yoga mat. Inhale while crossing your arms over your chest and contracting your abs. Exhale and elevate your upper body while maintaining a relaxed head and neck. Return to the starting position by inhaling. Repeat. "
    },
    {
        name:"3. Squates",
        image:`${squates}`,
        desc:"Stand up straight so that your feet are hips-width distance apart. Put your hands on your hips and flex your abdominal muscles. Begin lowering yourself down using only your legs, as if you’re about to sit down, and get into a seated position until your thighs are parallel to the ground. Keep your upper body as still as possible. Raise yourself back up to your original position. Repeat as many times as you want. "
    },
    {
      name:"4. Overhead Press",
      image:`${overhead}`,
      desc:"Keep your shoulders and hands wide apart, squat, and hold the bar. Pull up the bar slowly near your chest or shoulder. Breathe deeply and pull the bar over your head until your arms are completely stretched. Keep your elbows firm. Now, lower the bar slowly to your shoulder. Repeat this at your convenience."
    }
]
const ExcerciseGain = () => {
  const listItems=Excercise.map((list)=>{
    return(
      <div className="looseWeight">
      <h3 className="yoga-name">{list.name}</h3>
      <div className="ex-img">
        <img src={list.image}  alt="Yoga-pose"/>
      </div>
      <p className="poses">
       {list.desc}
      </p>
    </div>
  )})
  return(
    <div className="bg">
    <h1 className="title">Exercise To Gain Weight</h1>
    <p className="about">
    Exercising is commonly known to help burn fat but exercising also leads to an increase in your muscle size. The larger muscles are more prone to the same. This is a good form of weight gain. Regularly exercising will ensure weight gain and lead you to your desired healthy body weight.
    </p>
    <h2 className="title">What Are the Best Exercises for Weight Gain?</h2>
   <div className="Gain-container">
      {listItems}
</div>
   </div>
  )
    }

export default ExcerciseGain
