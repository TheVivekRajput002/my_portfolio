import React from 'react'
import { motion } from 'motion/react';

const About = ({Para1, Para2}) => {
    return (
        <>
            <motion.div
                initial={{
                    y: 20,
                    opacity: 0
                }}
                animate={{
                    y: 0,
                    opacity: 1
                }}
                transition={{
                    delay: 0.6,
                    duration: 0.5
                }}
            >
                <h2 className='font-[650] text-2xl max-lg:mt-[40vh] mt-[185px]'>About</h2>
                <p className='text-[#656565] text-md mt-[15px]'>{Para1}</p>
                <p className='text-[#656565] text-md mt-[15px] '>{Para2}</p>

            </motion.div>
        </>
    )
}

export default About