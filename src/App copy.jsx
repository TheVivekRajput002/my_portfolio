
import img from './assets/dummy.png'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { motion } from 'motion/react';
import HeroSection from './components/HeroSection';
import InfiniteScroll from './components/InfiniteScroll';


function App() {

  return (
    <>

      <motion.div
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
        transition={{
          delay: 2
        }}
        className='absolute max-lg:top-[65vh] max-xl:top-[70vh] top-[75vh] '>
        <InfiniteScroll />
      </motion.div>

      <div className="h-auto max-md:w-[95%] max-xl:w-[80%] w-[55%] pr-[10%] pl-[10%] pt-[12%] m-auto border-[1.5px] border-r-[#e1e1e1] border-l-[#e1e1e1]" >

<div className='max-md:mt-[100px] '>
        <HeroSection />
</div>

<div className='max-md:hidden'>
        <Navbar />
</div>

        {/* Sec 2 : About section  */}

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
          <h2 className='font-[650] text-2xl mt-[390px]'>About</h2>
          <p className='text-[#656565] text-lg mt-[15px]'>I’m Mia Carter, a curious designer, coder, and storyteller. Currently a student at Springfield High School, but always exploring the limitless possibilities of creativity and technology.</p>
          <p className='text-[#656565] text-lg mt-[15px] '>I thrive on transforming ideas into reality, whether it's crafting digital interfaces, designing immersive visuals, or building websites that feel effortless to use.</p>

        </motion.div>

        <h2 className='font-[600] text-4xl mt-[50vh] mb-10 text-center'>Here’s What I’ve Been Up To.</h2>

        {/* projects section  */}
        <div className='flex flex-col gap-8'>
          <div className='border-[#bbbbbb] border-solid border-1 rounded-4xl p-4 pb-6 flex flex-col gap-5'>
            <img className='h-100 rounded-3xl' src={img} alt="" />
            <div className='flex flex-col gap-5 mx-auto w-[90%]'>
              <h3 className='font-[600] text-2xl '>Aero Landing page design</h3>
              <p className=' text-md text-[#656565] '>This project focuses on the design and development of a comprehensive AI chatbot platform, Aero.</p>
              <span>
                <button className='bg-[#f2f2f2] rounded-2xl px-6 py-3 h-full font-[500] text-lg'>View Project &gt;</button>

              </span>
            </div>
          </div>
          <div className='border-[#bbbbbb] border-solid border-1 rounded-4xl p-4 pb-6 flex flex-col gap-5'>
            <img className='h-100 rounded-3xl' src={img} alt="" />
            <div className='flex flex-col gap-5 mx-auto w-[90%]'>
              <h3 className='font-[600] text-2xl '>Aero Landing page design</h3>
              <p className=' text-md text-[#656565] '>This project focuses on the design and development of a comprehensive AI chatbot platform, Aero.</p>
              <span>
                <button className='bg-[#f2f2f2] rounded-2xl px-6 py-3 h-full font-[500] text-lg'>View Project &gt;</button>

              </span>
            </div>
          </div>
          <div className='border-[#bbbbbb] border-solid border-1 rounded-4xl p-4 pb-6 flex flex-col gap-5'>
            <img className='h-100 rounded-3xl' src={img} alt="" />
            <div className='flex flex-col gap-5 mx-auto w-[90%]'>
              <h3 className='font-[600] text-2xl '>Aero Landing page design</h3>
              <p className=' text-md text-[#656565] '>This project focuses on the design and development of a comprehensive AI chatbot platform, Aero.</p>
              <span>
                <button className='bg-[#f2f2f2] rounded-2xl px-6 py-3 h-full font-[500] text-lg'>View Project &gt;</button>

              </span>
            </div>
          </div>

        </div>

        {/* section : work experience  */}

        <div>
          <h2 className='font-[500]  text-3xl mb-6 mt-12'>Work Experience</h2>
          <div className='flex flex-col gap-3'>
            <div className='flex w-[70%] justify-between '>
              <p className='font-[400] text-lg text-[#a7a7a7]'>2024 - Present</p>
              <p className='font-[500] text-lg text-[#575656]'>Lead Designer at</p>
            </div>
            <div className='flex w-[70%] justify-between'>
              <p className='font-[400] text-lg text-[#a7a7a7]'>2024 - 2022</p>
              <p className='font-[500] text-lg text-[#575656]'>Senior UI/UX Designer at</p>
            </div>
            <div className='flex w-[70%] justify-between'>
              <p className='font-[400] text-lg text-[#a7a7a7]'>2022 - 2020</p>
              <p className='font-[500] text-lg text-[#575656]'>Product Designer at</p>
            </div>

          </div>

          {/* section : how can I help - skipped  */}

          {/* section : testimonials - skipped  */}

          {/* section : get in touch  */}

          <div>
            <h2 className='font-[500]  text-3xl mb-3 mt-12'>Get in touch</h2>
            <p className='text-[#656565] text-lg mt-[15px] mb-20'>I’m always interested in exploring new opportunities, collaborating, or exchanging ideas with like-minded individuals. Feel free to book a call or email me if you'd like to see my portfolio deck or to discuss a potential project.</p>
          </div>

          {/* section: Footer  */}

          <Footer />
        </div>




      </div>



      <style jsx>{`
 @import url('https://fonts.googleapis.com/css2?family=Oxanium:wght@200..800&family=Roboto:ital,wght@0,100..900;1,100..900&family=Rubik:ital,wght@0,300..900;1,300..900&display=swap');

 .fontt{
 
//  font-family: "Rubik", sans-serif;
font-family: "Rubik", sans-serif;
font-weight: 450;
 }
 `}</style>


    </>
  )
}

export default App
