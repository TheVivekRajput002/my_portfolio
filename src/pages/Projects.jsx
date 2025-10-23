import React from 'react'
import ProjectCard from '../components/ProjectCard'
import JlugSummerSS2 from '/assets/JlugSummerSS2.webp'
import PortfolioSS from '/assets/PortfolioSS.png'
import RoboticsLabSS from '/assets/RoboticsLabSS.png'
import KrishiMitraSS from '/assets/KrishiMitraSS.webp'
import ProjectsData from '../data/ProjectsData.json'


const Projects = () => {
  return (
    <div >

      {
        ProjectsData.map((project) => (
          <ProjectCard Head={project.head} SS={project.ss} content={project.content} Url={project.url} icons={project.icons} />
        ))
      }

    </div>
  )
}

export default Projects