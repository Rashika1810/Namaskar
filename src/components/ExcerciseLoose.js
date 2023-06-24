import React from 'react'
import walking from '../images/LooseWeightYoga/walking.jpg'
import cycling from '../images/LooseWeightYoga/cycling.jpg'
import pushUp from '../images/LooseWeightYoga/pushup.avif'
import pullup from '../images/LooseWeightYoga/pull.avif'
import "../styling/excercise.css";
const Excercise=[
    {
        name:"1. Walking",
        image:`${walking}`,
        desc:"Walking is consistently considered one of the best exercise options for weight loss because its a free, low-impact workout accessible across a wide range of ages and abilities.Start by simply lacing up your sneakers. Taking a walk around the block to get some air, meeting a colleague for a walking meeting and exploring your local city on foot can all effectively support your weight loss journey."
    },
    {

        name:"2. Cycling",
        image:`${cycling}`,
        desc:"Cycling at low to moderate resistance for more extended periods keeps your heart rate elevated at a fat-burning level. It helps you burn an adequate number of calories without giving you bulky muscles. Plus, as long as you are creating a calorie deficit with your diet and riding your bike consistently, you will be able to lose 500 grams in a week."
    },
    {
        name:"3. Push-Ups",
        image:`${pushUp}`,
        desc:"Push-up exercises are good as it burns calories quickly and makes you focus on the larger muscles in your upper body. Push-up workout also focuses on your chest, shoulders, back, biceps, and triceps."
    },
    {
      name:"4. Pull-Ups",
      image:`${pullup}`,
      desc:"Pull-ups focus on several muscle groups that burn more calories as multiple muscles like biceps, triceps, back and core are working together. This workout can aid you to get in shape, increasing your ability to burn fat and boosting your metabolism."
    }
]
const ExcerciseLoose = () => {
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
    <h1 className="title">Exercise To Loose Weight</h1>
    <p className="about">
    When losing weight, more physical activity increases the number of calories your body uses for energy. Using calories through physical activity, combined with reducing the calories you eat, creates a calorie deficit that results in weight loss. Most weight loss occurs from decreasing caloric intake.
    </p>
    <h2 className="title">What Are the Best Exercises for Weight Loss?</h2>
   <div className="Gain-container">
      {listItems}
</div>
   </div>
  )
    }

export default ExcerciseLoose
