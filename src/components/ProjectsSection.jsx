import React, { useState, useEffect } from 'react'
import JlugSummerSS2 from '../assets/JlugSummerSS2.webp'
import KrishiMitraSS from '../assets/KrishiMitraSS.webp'
import NoteBlocSS from '../assets/NoteBlocSS.webp'
import TheZenWebsiteSS from '../assets/TheZenWebsiteSS.webp'
import { AnimatePresence, motion } from 'motion/react';


const ProjectsSection = ({ projects }) => {

    const [isExpanded, setIsExpanded] = useState(false)

    useEffect(() => {
        if (isExpanded) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isExpanded]);

    return (

        <>
            <h2 className=' font-[600] text-[var(--color-maintext)] text-4xl max-md:text-2xl mt-20 max-md:mt-[8vh] mb-10 max-md:mb-[6vh] text-center'>Here’s What I’ve <br />Been Up To.</h2>

            <div className='flex flex-col'>


                <div className='border-[var(--color-gray)] border-solid border rounded-3xl p-4 max-md:p-3 pb-6 flex flex-col max-md:pb-5 gap-4 m-3 max-md:m-0 max-md:mb-4 hover:shadow-md hover:scale-101 transition-all ease-in-out duration-120'>
                    <img className='rounded-2xl w-full h-auto border-[var(--color-darkgray)] border-solid border' src={JlugSummerSS2} alt="" />
                    <div className='flex flex-col gap-5 mx-auto w-[90%]'>
                        <p className='font-[600] text-[var(--color-maintext)] text-2xl max-md:text-xl'>JEC Linux Users Group Summer School Website</p>
                        <p className=' text-sm text-[var(--color-sidetext)] mt-[-10px] max-md:text-xs'>Collaborated on an AI-powered Crop Advisory Platform providing real-time insights, image-based crop analysis, and multilingual chatbot with voice support for farmer assistance.</p>
                        <span>
                            <button className='bg-[var(--color-lightgray)] text-[var(--color-maintext)] rounded-2xl px-6 py-3 h-full font-[500] text-md max-md:text-sm'>View Project &gt;</button>
                        </span>
                    </div>
                </div>


                <div className='border-[var(--color-gray)] border-solid border rounded-3xl p-4 max-md:p-3 pb-6 flex flex-col max-md:pb-5 gap-4 m-3 max-md:m-0 max-md:mb-4 hover:shadow-md hover:scale-101 transition-all ease-in-out duration-120'>
                    <img className='rounded-2xl w-full h-auto border-[var(--color-darkgray)] border-solid border' src={KrishiMitraSS} alt="" />
                    <div className='flex flex-col gap-5 mx-auto w-[90%]'>
                        <p className='font-[600] text-[var(--color-maintext)] text-2xl max-md:text-xl'>Krishi Mitra</p>
                        <p className=' text-sm text-[var(--color-sidetext)] mt-[-10px] max-md:text-xs'>Collaborated on an AI-powered Crop Advisory Platform providing real-time insights, image-based crop analysis, and multilingual chatbot with voice support for farmer assistance.</p>
                        <span>
                            <button className='bg-[var(--color-lightgray)] text-[var(--color-maintext)] rounded-2xl px-6 py-3 h-full font-[500] text-md max-md:text-sm'>View Project &gt;</button>
                        </span>
                    </div>
                </div>

                <div className='border-[var(--color-gray)] border-solid border rounded-3xl p-4 max-md:p-3 pb-6 flex flex-col max-md:pb-5 gap-4 m-3 max-md:m-0 max-md:mb-4 hover:shadow-md hover:scale-101 transition-all ease-in-out duration-120'>
                    <img className='rounded-2xl w-full h-auto border-[var(--color-darkgray)] border-solid border' src={NoteBlocSS} alt="" />
                    <div className='flex flex-col gap-5 mx-auto w-[90%]'>
                        <p className='font-[600] text-[var(--color-maintext)] text-2xl max-md:text-xl'>NoteBloc Landing Page</p>
                        <p className=' text-sm text-[var(--color-sidetext)] mt-[-10px] max-md:text-xs'>Its a Landing Page with minimalistitc designa and animations providing the users all the necesaary information about the product</p>
                        <span>
                            <button className='bg-[var(--color-lightgray)] text-[var(--color-maintext)] rounded-2xl px-6 py-3 h-full font-[500] text-md max-md:text-sm'>View Project &gt;</button>
                        </span>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ProjectsSection