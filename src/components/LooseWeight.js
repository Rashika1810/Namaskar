import React from "react";
import "../styling/excercise.css";
import One from "../images/LooseWeightYoga/Bow-pose.jpg";
import Two from "../images/LooseWeightYoga/The-Sun-Salutation.jpg";
import Three from "../images/LooseWeightYoga/Trikonasana.jpg";
import Four from "../images/LooseWeightYoga/Warrior-Pose.jpg";
import Five from "../images/LooseWeightYoga/cobra-pose.jpg";

const data=[
  {
    name:"1. The Sun Salutation( Suryanamaskar)",
    image:`${Two}`,
    desc:"Stand straight on your feet. Take a deep breath, and lift your arm above your head. Now bend forwards & exhale Now, get into the plank pose. Hold this position for 10 seconds. Now, drop down to your knees and place your lower body on the floor. Extend your legs and keep your hands under your shoulders. Now, inhale and do the cobra pose. Next, switch to doing the downward dog-facing pose and exhale. Hold this position for 10 seconds. Now, stand straight on your feet and get back to the original position. Inhale and then lift your arm above your head. Exhale and finally relax. Repeat it 10-15 times"
},
   {
    name:"2. Warrior Pose (Virabhadrasana)",
    image:`${Four}`,
    desc:"Stand straight and keep your feet together. Stretch your legs apart. Now, bend one knee forward and keep the other parallel to the floor. Now, slowly try to raise your hands over your head. Hold this pose for 15 seconds. Now, switch to the different knee & repeat the process. Try to do this 10 -15 times."
  },
   {
    name:"3. Cobra Pose ( Bhujangasana)",
    image:`${Five}`,
    desc:"Lie down facing the mat. Your feet should be on the floor and palms on their respective sides. Press on the floor with both hands. Your finger should be in proportion to your shoulder blades. Now, try to bend your back with your belly facing forward. Hold this position for about 10 seconds. With each exhalation, push yourself upwards. Repeat this 10 -15 times."
  },
   {
    name:"4. Trikonasana (Utthita Trikonasana)",
    image:`${Three}`,
    desc:"Stand straight with your hand above your head. Now, spread apart your legs. Stretch down and try to touch your feet with the same hands. Your other hand should be straight facing the ceiling. Hold this position for 10 seconds. Switch the position with the other hand and repeat the same process. Repeat this asana 10 – 15 times.    "
  },
   {
    name:"5. Bow pose (dhanurasana)",
    image:`${One}`,
    desc:"Lie on the floor on your belly.Press your toes to the floor and try to bend your knees. Now, grab your ankles with your hands. Inhale and lift your upper body from the floor. Now, exhale and stretch your back and legs. Keep holding your legs firmly. Lift your head and gaze ahead. Stay in this position for 10 seconds. Try this pose 10 – 15 times."
  },
]

const LooseWeight = () => {

  const listItems=data.map((list)=>{
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
    ) 
  })
  return (

    <div className="bg">
      <h1 className="title">Yoga Asanas for Loosing Weight</h1>
      <p className="about">
        There are many ways to combat excess weight, but there is no single
        solution. If you are trying to lose or maintain your weight, you may
        want to try yoga. There is good research that yoga may help you manage
        stress, improve your mood, curb emotional eating, and create a community
        of support, all of which can help with weight loss and maintenance.
      </p>
      <h2 className="title">What Are the Best Yoga Poses for Weight Loss?</h2>
     <div className="Gain-container">
        {listItems}
  </div>
     </div>
     );
};
  

export default LooseWeight;
