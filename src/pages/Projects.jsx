import React from 'react'
import ProjectCard from '../components/ProjectCard'
import JlugSummerSS2 from '../assets/JlugSummerSS2.webp'
import PortfolioSS from '../assets/PortfolioSS.png'
import RoboticsLabSS from '../assets/RoboticsLabSS.png'
import KrishiMitraSS from '../assets/KrishiMitraSS.webp'

const Projects = () => {
  return (
    <div >

      <ProjectCard Url={`https://my-portfolio-ysrh.vercel.app`} Head="Vivek Rajput's Portfolio" SS={PortfolioSS} content="Developed a web platform as part of a team that enables users to register for workshops, access detailed information about them, and submit feedback or reviews."/>
      <ProjectCard Url={`http://Summerschooljlug.netlify.app`} Head="JEC Linux Users Group Summer School Website" SS={JlugSummerSS2} content="Developed a web platform as part of a team that enables users to register for workshops, access detailed information about them, and submit feedback or reviews."/>
      <ProjectCard Url={`https://golden-trifle-019de0.netlify.app`} Head="Krishi Mitra" SS={KrishiMitraSS} content="Collaborated in developing an AI-powered Smart Crop Advisory Platform that offers real-time farming insights, image-based crop analysis, and weather or market alerts. Integrated multilingual chatbot and voice support to assist small and marginal farmers with accessible, data-driven guidance."/>
      <ProjectCard Url={`https://iot-robotics-lab-jec.github.io/index.html`} Head="JEC Robotics Lab Official Website" SS={RoboticsLabSS} content="Collaborated in developing an AI-powered Smart Crop Advisory Platform that offers real-time farming insights, image-based crop analysis, and weather or market alerts. Integrated multilingual chatbot and voice support to assist small and marginal farmers with accessible, data-driven guidance."/>

    </div>
  )
}

export default Projects