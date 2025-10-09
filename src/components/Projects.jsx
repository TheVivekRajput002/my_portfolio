import React from 'react'
import img from '../assets/dummy.png'


const Projects = ({ projects }) => {

    return (

        <>
            <h2 className='font-[600] text-4xl mt-20 mb-10 text-center'>Here’s What I’ve Been Up To.</h2>

            <div className='flex flex-col '>

                {projects.map((projects, i) => (
                    <div key={i} className='border-[#bbbbbb] border-solid border-1 rounded-3xl p-4 pb-6 flex flex-col gap-4 m-5'>
                        <img className='rounded-2xl border-[#e3e3e3bb] border-solid border-1' src={projects.project_img} alt="" />
                        <div className='flex flex-col gap-5 mx-auto w-[90%]'>
                            <p className='font-[600] text-2xl '>{projects.project_name}</p>
                            <p className=' text-sm text-[#656565] mt-[-10px]'>{projects.project_description}</p>
                            <span>
                                <button className='bg-[#f2f2f2] rounded-2xl px-6 py-3 h-full font-[500] text-md'>View Project &gt;</button>

                            </span>
                        </div>
                    </div>
                ))}

            </div>
        </>
    )
}

export default Projects