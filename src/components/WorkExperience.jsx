import React from 'react'

const WorkExperience = ({ experience }) => {
    return (
        <>
            <h2 className='font-[500]  text-3xl mb-6 mt-12'>Work Experience</h2>

            <div className='flex flex-col gap-3'>

                {experience.map((experience, i) => (<div key={i} className='flex w-[70%] justify-between '>
                    <p className='font-[400] text-lg text-[#a7a7a7]'>{experience.time_period}</p>
                    <p className='font-[500] text-lg text-[#575656]'>{experience.role}</p>
                </div>

                ))}

            </div>

        </>
    )
}

export default WorkExperience