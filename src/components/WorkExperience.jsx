import React from 'react'

const WorkExperience = ({ experience }) => {
    return (
        <>
            <h2 className='font-[500] text-3xl max-md:text-2xl mb-8 mt-6 text-[var(--color-maintext)]'>Work Experience</h2>

            <div className='flex flex-col gap-4'>

                {experience.map((experience, i) => (<div key={i} className='flex justify-content items-center '>
                    <div className='flex  w-[100%] max-md:w-[100%] max-md:flex-col'>
                        <p className='w-[35%] font-[450] max-md:text-sm text-md opacity-40 text-[var(--color-maintext)] '>{experience.time_period}</p>
                        <p className='font-[500] max-md:text-sm text-lg text-[var(--color-maintext)] '>{experience.role}</p>
                    </div>
                </div>

                ))}

            </div>

        </>
    )
}

export default WorkExperience