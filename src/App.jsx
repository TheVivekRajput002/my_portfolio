import vivek_rajput_pfp from './assets/vr_professional_pfp.png'
import img from './assets/dummy.png'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { motion } from 'motion/react';
import InfiniteScroll from './components/InfiniteScroll';
import Location from './components/Location';

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
        className='absolute top-90'>
        <InfiniteScroll />
      </motion.div>

      <div className="h-auto w-[55%] pr-[10%] pl-[10%] pt-[12%] m-auto border-[1.5px] border-r-[#e1e1e1] border-l-[#e1e1e1]">
        
        <Navbar />

        <main>

          <motion.img
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 1 }}
            src={vivek_rajput_pfp}
            className='h-[120px] mb-[20px]'
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
            className='font-[600] text-[40px] fontt'

          >
            I'm Vivek Rajput.
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
            className='font-[600] text-[40px] mt-[-12px] fontt'>
            Dreamer & Designer
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
            className='text-[#656565] text-lg mt-5 mb-8 leading-relaxed'>
            Crafting seamless experiences and bold visuals. College student by day, creative thinker, and aspiring innovator by night.
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
            className='bg-green-100 px-7 py-4 rounded-full text-center'>
            <span className='h-auto text-lg font-medium text-green-700' >Available for new project</span>
          </motion.span>

        </main>



        {/* Sec 2 : About section  */}

        <motion.div
        initial={{
          y:20,
          opacity:0
        }}
        animate={{
          y:0,
          opacity:1
        }}
        transition={{
          delay:0.6,
          duration:0.5
        }}
        >
        <h2 className='font-[650] text-2xl mt-[50vh]'>About</h2>
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

 <Location />


    </>
  )
}

export default App
