import React from 'react'
import Phone from './Phone'
import isDark from '../components/Navbar'
import { motion } from 'motion/react'
import { Link } from 'react-router-dom'

const ProjectCard = ({ Url, Head, SS, content, icons }) => {

    return (
        <div>
            <div className='flex gap-2 my-3 max-md:flex-col-reverse'>
                {/* <img src={dummyphone} alt="" className='h-140 w-[50%]' /> */}
                <motion.div
                    initial={{
                        x: 220,
                    }}
                    animate={{
                        x: 0
                    }}
                    transition={{
                        duration: 0.6,
                        delay: 0.9
                    }}
                    className='max-md:hidden'
                >
                    <Phone PhoneWidth={`w-[345px]`} PhoneHeight={`h-[90vh]`} WebUrl={Url} />
                </motion.div>

                <motion.div
                    initial={{
                        opacity: 0
                    }}
                    animate={{
                        opacity: 1
                    }}
                    transition={{
                        delay: 1.8,
                        duration: 0.3
                    }}
                    className='space-y-2'
                >

                    <motion.div

                        className="relative z-5 py-4 px-5 bg-[var(--color-projectcardbg)] rounded-xl hover:scale-101 shadow-lg hover:shadow-xl">
                        <p className='font-[600] text-[var(--color-maintext)] text-4xl max-md:text-xl'>{Head}</p>
                        <button className='bg-[var(--color-lightgray)] mt-3 text-[var(--color-maintext)] rounded-2xl px-6 py-3 h-full font-[500] text-sm max-md:text-sm hover:shadow-md hover:scale-101'>
                            {/* <a href={Url} target='_blank'>View Project &gt;</a> */}
                            <Link to="/pagenotfound">View Project &gt;</Link>
                        </button>
                    </motion.div>

                    <motion.div
                        initial={{
                            y: -170,
                            opacity: 0
                        }}
                        animate={{
                            y: 0,
                            opacity: 1,

                        }}
                        transition={{
                            delay: 2.2,
                            duration: 0.6
                        }}
                        className='relative z-4 rounded-xl p-2 bg-[var(--color-projectcardbg)] shadow-sm hover:shadow-lg hover:scale-101'>
                        <img src={SS} alt="" className='w-[100%] mb-1 rounded-lg border-[var(--color-darkgray)] border-solid border-[0.5px]' />
                    </motion.div>

                    <motion.div
                        initial={{
                            y: -440,
                            opacity: 0
                        }}
                        animate={{
                            y: 0,
                            opacity: 1,

                        }}
                        transition={{
                            delay: 2.8,
                            duration: 0.6
                        }}
                        className='relative z-3 p-4 bg-[var(--color-projectcardbg)] rounded-xl shadow-sm hover:shadow-lg hover:scale-101'>
                        <p className=' text-sm text-[var(--color-sidetext)] max-md:text-xs'>{content}</p>
                    </motion.div>

                    <motion.div
                        initial={{
                            y: -550,
                            opacity: 0
                        }}
                        animate={{
                            y: 0,
                            opacity: 1,

                        }}
                        transition={{
                            delay: 3.4,
                            duration: 0.6
                        }}
                        className=' relative z-2 p-4 bg-[var(--color-projectcardbg)] rounded-xl shadow-sm hover:shadow-lg hover:scale-101'>
                        <p className='text-sm text-[var(--color-sidetext)] max-md:text-xs mb-3'><b>Tech Stack</b></p>
                        <div className='flex'>
                            <div className=' flex items-center gap-2'>
                                {
                                    icons.map((icon) => (
                                        <img className='h-8' key={icon.id} src={icon.img} />
                                    ))
                                }
                            </div>
                        </div>
                    </motion.div>
                </motion.div>



            </div>

            <div className=' my-10 h-[0.05px] opacity-40 w-[80%] bg-[var(--color-maintext)] mx-auto'></div>

        </div>
    )
}

export default ProjectCard