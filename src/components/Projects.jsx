import React from 'react'
import JlugSummerSS2 from '../assets/JlugSummerSS2.webp'
import KrishiMitraSS from '../assets/KrishiMitraSS.webp'
import NoteBlocSS from '../assets/NoteBlocSS.webp'
import TheZenWebsiteSS from '../assets/TheZenWebsiteSS.webp'


const Projects = ({ projects }) => {

    const projectsData = [
        {
            "project_img": "/src/assets/JlugSummerSS2.webp",
            "project_name": "JEC Linux Users Group Summer School Website",
            "project_description": "Developed a web platform as part of a team that enables users to register for workshops, access detailed information about them, and submit feedback or reviews. "
        },
        {
            "project_img": "/src/assets/KrishiMitraSS.webp",
            "project_name": "Krishi Mitra",
            "project_description": "Collaborated in developing an AI-powered Smart Crop Advisory Platform that offers real-time farming insights, image-based crop analysis, and weather or market alerts. Integrated multilingual chatbot and voice support to assist small and marginal farmers with accessible, data-driven guidance."
        },
        {
            "project_img": "/src/assets/NoteBlocSS.webp",
            "project_name": "NoteBloc Landing Page",
            "project_description": "Its a Landing Page with minimalistitc designa and animations providing the users all the necesaary information about the product"
        }
    ]

}

return (

    <>
        <h2 className='font-[600] text-[var(--color-maintext)] text-4xl mt-20 mb-10 text-center'>Here’s What I’ve Been Up To.</h2>

        <div className='flex flex-col '>

            {projects.map((projectsData, i) => (
                <div key={i} className='border-[var(--color-darkgray)] border-solid border rounded-3xl p-4 max-md:p-2 pb-6 flex flex-col gap-4 m-5 max-md:m-0 max-md:mb-2'>
                    <img className='rounded-2xl w-full h-auto border-[var(--color-gray)] border-solid border' src={projectsData.project_img} alt="" />
                    <div className='flex flex-col gap-5 mx-auto w-[90%]'>
                        <p className='font-[600] text-[var(--color-maintext)] text-2xl '>{projectsData.project_name}</p>
                        <p className=' text-sm text-[var(--color-sidetext)] mt-[-10px]'>{projectsData.project_description}</p>
                        <span>
                            <button className='bg-[var(--color-darkgray)] text-[var(--color-maintext)] rounded-2xl px-6 py-3 h-full font-[500] text-md'>View Project &gt;</button>
                        </span>
                    </div>
                </div>
            ))}

        </div>
    </>
)
}

export default Projects