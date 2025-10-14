import React from 'react'

const WorkExperience = ({ experience }) => {
    return (
        <>
            <h2 className='font-[500] text-3xl mb-8 mt-12 text-[var(--color-maintext)]'>Work Experience</h2>

            <div className='flex flex-col gap-4'>

                {experience.map((experience, i) => (<div key={i} className='flex w-[70%] max-md:w-[100%] justify-between justify-content items-center'>
                    <p className='font-[450] text-md opacity-40 text-[var(--color-maintext)] '>{experience.time_period}</p>
                    <p className='font-[500] text-lg text-[var(--color-maintext)]'>{experience.role}</p>
                </div>

                ))}

            </div>

        </>
    )
}

export default WorkExperience