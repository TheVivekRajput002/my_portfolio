import React from 'react'

const WorkExperience = ({ experience }) => {
    return (
        <>
            <h2 className='font-[500] text-3xl max-md:text-2xl mb-8 mt-6 text-[var(--color-maintext)]'>Work Experience</h2>

            <div className='flex flex-col gap-4'>

                {experience.map((experience, i) => (<div key={i} className='flex justify-content items-center '>
                    <div className='flex md:items-center w-[100%] max-md:w-[100%] max-md:flex-col'>
                        <p className='w-[35%] max-md:w-[50%] font-[450] max-md:text-sm text-sm opacity-40 text-[var(--color-maintext)] '>{experience.time_period}</p>
                        <div className='flex items-center max-md:mt-1'>
                            <p className='font-[500] max-md:text-sm text-md text-[var(--color-maintext)] '>{experience.role}</p>
                            <div className='mx-3 bg-[var(--color-infiniteimgbg)] border-solid border border-[var(--color-darkgray)] rounded-2xl flex items-center px-1 py-[4.5px] gap-2'>
                                <img className='h-4' src={`${experience.companylogo}`} alt="" />
                                <p className='text-xs mr-2'>{experience.companyname}</p>
                            </div>

                        </div>
                    </div>
                </div>

                ))}

            </div>

        </>
    )
}

export default WorkExperience