import React from 'react'


const Projects = ({ projects }) => {

    return (

        <>
            <h2 className='font-[600] text-[var(--color-maintext)] text-4xl mt-20 mb-10 text-center'>Here’s What I’ve Been Up To.</h2>

            <div className='flex flex-col '>

                {projects.map((projects, i) => (
                    <div key={i} className='border-[var(--color-darkgray)] border-solid border rounded-3xl p-4 max-md:p-2 pb-6 flex flex-col gap-4 m-5 max-md:m-0 max-md:mb-2'>
                        <img className='rounded-2xl w-full h-auto border-[var(--color-gray)] border-solid border' src={projects.project_img} alt="" />
                        <div className='flex flex-col gap-5 mx-auto w-[90%]'>
                            <p className='font-[600] text-[var(--color-maintext)] text-2xl '>{projects.project_name}</p>
                            <p className=' text-sm text-[var(--color-sidetext)] mt-[-10px]'>{projects.project_description}</p>
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