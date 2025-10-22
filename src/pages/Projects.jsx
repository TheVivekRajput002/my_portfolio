import React from 'react'
import ProjectCard from '../components/ProjectCard'
import JlugSummerSS2 from '../assets/JlugSummerSS2.webp'

const Projects = () => {
  return (
    <div >

      <ProjectCard Url={`http://Summerschooljlug.netlify.app`} Head="JEC Linux Users Group Summer School Website" SS={JlugSummerSS2} content="Developed a web platform as part of a team that enables users to register for workshops, access detailed information about them, and submit feedback or reviews."/>
      <ProjectCard Url={`http://Summerschooljlug.netlify.app`} Head="JEC Linux Users Group Summer School Website" SS={JlugSummerSS2} content="Developed a web platform as part of a team that enables users to register for workshops, access detailed information about them, and submit feedback or reviews."/>

    </div>
  )
}

export default Projects