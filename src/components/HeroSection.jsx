import React from 'react'
import Data from '../assets/Data.json'
import { motion } from 'motion/react';
import vivek_rajput_pfp from '../assets/vr_professional_pfp.png'

const HeroSection = ({Name, Role , Description}) => {
    return (
        <>

            <main >

                <motion.img
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 1 }}
                    src={vivek_rajput_pfp}
                    className='h-[120px] mb-[20px] max-md:h-[85px]'
                />


                {/* <h2 className='font-[600] mb-[5px] text-5xl'>Hey, I’m Vivek Rajput.</h2> */}
                {/* <h2 className='font-[600] text-5xl'>Dreamer & Designer</h2> */}

                <motion.p
                    initial={{
                        opacity: 0,
                        y: 20
                    }}
                    animate={{
                        opacity: 1,
                        y: 0
                    }}
                    transition={{
                        duration: 0.5,
                        ease: "easeOut",
                        delay: 1.9
                    }}
                    className='font-[650] text-[var(--color-maintext)] max-md:text-[35px] text-[40px] clash'

                >
                    {Name}
                </motion.p>

                <motion.p
                    initial={{
                        opacity: 0,
                        y: 20
                    }}
                    animate={{
                        opacity: 1,
                        y: 0
                    }}
                    transition={{
                        duration: 0.5,
                        ease: "easeOut",
                        delay: 1.8
                    }}
                    className='font-[650] text-[var(--color-maintext)] text-[40px] max-md:text-[35px] mt-[-12px] clash'>
                    {Role}
                </motion.p>



                <motion.p
                    initial={{
                        opacity: 0,
                        y: 20
                    }}
                    animate={{
                        opacity: 1,
                        y: 0
                    }}
                    transition={{
                        duration: 0.5,
                        ease: "easeOut",
                        delay: 1.5
                    }}
                    className='text-[var(--color-sidetext)] text-md max-lg:text-sm mt-2 max-md:mt-2 mb-10 leading-relaxed poppins'>
                    {Description}
                </motion.p>

                <motion.span
                    initial={{
                        opacity: 0,
                        y: 40
                    }}
                    animate={{
                        opacity: 1,
                        y: 0
                    }}
                    transition={{
                        duration: 0.5,
                        ease: "easeIn",
                        delay: 1.3
                    }}
                    className='bg-[#E1F9DC] px-7 py-4 rounded-full text-center max-md:px-5 max-md:py-3'>
                    <span className='text-md font-medium text-[#178D00] max-md:text-sm poppins' >
                        <span className="pulse-container">
                            <span className="pulse-dot"></span>
                            <span className="pulse-ring"></span>
                        </span>
                        Available for new project</span>
                </motion.span>



            </main>

            <style jsx>{`


 @import url('https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@800&display=swap');
 @import url('https://api.fontshare.com/v2/css?f[]=clash-grotesk@500,600&display=swap');

 .clash{
 font-family: 'Clash Grotesk', sans-serif;
font-weight: 500; /* or 600 */

 }

 .cabinet{
 font-family: 'Cabinet Grotesk', sans-serif;
 }



                   .pulse-container {
            position: relative;
            display: inline-block;
            width: 12px;
            height: 12px;
            vertical-align: middle;
            margin-right: 20px;
        }

        .pulse-dot {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgb(23, 141, 0);
            border-radius: 50%;
            z-index: 2;
        }

        .pulse-ring {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgb(23, 140, 0);
            border-radius: 50%;
            animation: pulse 2s ease-out infinite;
            z-index: 1;
        }

        @keyframes pulse {
            0% {
                transform: scale(1);
                opacity: 0.7;
            }
            100% {
                transform: scale(2.5);
                opacity: 0;
            }
        }
            `}</style>

        </>
    )
}

export default HeroSection