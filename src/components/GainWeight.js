import React from "react";
import "../styling/excercise.css";
import One from "../images/GainWeightYoga/chakrasana.jpg";
import Two from "../images/GainWeightYoga/pavanamuktasana.jpg";
import Three from "../images/GainWeightYoga/sarvangasana.jpg";
import Four from "../images/GainWeightYoga/vajrasana.jpg";
import Five from "../images/GainWeightYoga/utkatasana.jpg";

const data=[
  {
    name:"1. Chakrasana (Wheel Pose)",
    image:`${One}`,
    desc:"You can start by lying down on your back and placing your hands behind your shoulders. Then, taking support from your palms and feet, slowly raise your body doing an arch. Hold the position and concentrate on breathing. Gently lower your body once you are unable to stay in the pose. This asana is good for blood circulation while enhancing the flexibility of your spine. It also strengthens your body parts and balances the hormones.",
   },
   {
    name:"2. Pavanamuktasana (Wind Relieving Pose)",
    image:`${Two}`,
    desc:"For this pose, lie down on your back and start lifting your legs and bending your knees. First, lift your upper body till your thighs touch the stomach. Next, hug your knees and hold this pose for 20-30 seconds. It is considered an effective yoga asana for females’ to gain weight because it addresses menstrual problems. It also strengthens lower back muscles and reduces digestion issues such as acidity, indigestion, constipation and flatulence."
  },
   {
    name:"3. Utkatasana (Chair Pose)",
    image:`${Five}`,
    desc:"For this yoga asana, start in a standing position with feet together and your arms to your sides. Next, start lifting your arms above your head, pointing your finger to the sky, and keeping them close to your ears. Start bending your knees to get into a partial squat position, keeping knees and thighs parallel. Next, move your hips back like you are sitting in a chair. Now, slightly lean your upper body forward and reach through your fingers. It is one of the effective yoga poses for gaining weight if you plan to boost muscle strength and size in the areas of thighs, hamstrings, and glutes."
  },
   {
    name:"4. Sarvangasana (Shoulder Stand)",
    image:`${Three}`,
    desc:"For this asana, lie down with your legs together, keeping hands by the side. Then, while inhaling a deep breath, start lifting your hips first and then the legs. Keep your legs initially in a 30° angle and then a 90° angle while taking support from the hands-on lower back. Hold this position for at least 30-60 seconds. Apart from contributing to blood circulation, this asana also removes indigestion and constipation issues while improving spine flexibility."
  },
   {
    name:"5. Vajrasana (Diamond/ Thunderbolt Pose)",
    image:`${Four}`,
    desc:"You will need a yoga mat for this yoga asana. Start by placing your thighs on your calf muscle while keeping your toes pointing out behind you. Next, concentrate on deep breathing while placing your hands on the thighs, and make sure that your back and neck are erect. Hold this position for about 5-10 minutes before stretching out and relaxing. This yoga pose for weight gain improves metabolism by removing constipation and increasing appetite."
  },
]

const GainWeight = () => {

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
      <h1 className="title">Yoga Asanas for Gaining Weight</h1>
      <p className="about">
      Yoga is such an excellent workout that it may help with practically any health issue. In this article, we have listed some effective yoga exercises to gain weight. While most people across the globe are obsessed with reducing weight, a select few may struggle with increasing weight. They may binge eat and lounge around like couch potatoes, but they never seem to gain weight. People who are underweight face similar risks as those who are obese. Yoga is a powerful mindfulness tool for relaxation, balance, flexibility, and alignment of mind, body, and spirit. It can help in many ways, including losing excess fat and gaining healthy weight.
      </p>
      <h2 className="title">What Are the Best Yoga Poses for Weight Gain?</h2>
     <div className="Gain-container">
        {listItems}
  </div>
     </div>
     );
};
  

export default GainWeight;
