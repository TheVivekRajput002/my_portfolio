import React from 'react'
import { motion } from 'motion/react';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = ({ Para1, Para2 }) => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <>
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay:0 }}
            >
                <h2 className='font-[650] text-[var(--color-maintext)] text-2xl max-lg:mt-[40vh] mt-[185px]'>About</h2>
                <p className='text-[var(--color-sidetext)] text-md mt-[15px]'>{Para1}</p>
                <p className='text-[var(--color-sidetext)] text-md mt-[15px] '>{Para2}</p>

            </motion.div>
        </>
    )
}

export default About