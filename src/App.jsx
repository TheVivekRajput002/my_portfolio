
import img from './assets/dummy.png'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { motion } from 'motion/react';
import HeroSection from './components/HeroSection';
import InfiniteScroll from './components/InfiniteScroll';
import GetInTouch from './components/GetInTouch';
import './App.css'
import InfiniteFlow from './components/InfiniteFlow';
import About from './components/About';
import Projects from './components/Projects';
import Data from './assets/Data.json'
import WorkExperience from './components/WorkExperience';


function App() {

  return (
    <>

      <div className='bg-[var(--color-primary)] text-[var(--color-maintext)] max-md:pt-[100px] pt-45 border-t-0 border-b-0 pb-20 max-md:w-[95%] max-xl:w-[80%] w-[55%] pr-[9%] pl-[9%] m-auto border-[1.5px] border-r-[var(--color-lightgray)] border-l-[var(--color-lightgray)]'>
        <HeroSection Name={Data[0].Name} Role={Data[0].Role} Description={Data[0].Description} />
      </div>

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
        className='absolute left-0 right-0'>
        {/* <InfiniteScroll /> */}
        <InfiniteFlow />
      </motion.div>

      <div className=" bg-[--color-bg] h-auto border-t-0 border-b-0 max-md:w-[95%] max-xl:w-[80%] w-[55%] pr-[9%] pl-[9%] pt-[15%] m-auto border-[1.5px] border-r-[#e1e1e1] border-l-[#e1e1e1]" >

        <Navbar />

        <About Para1={Data[1].AboutPara1} Para2={Data[1].AboutPara2} />

        <Projects projects={Data[2]} />

        <WorkExperience experience={Data[3]} />

        {/* section : how can I help - skipped  */}

        {/* section : testimonials - skipped  */}

        <GetInTouch conclusion={Data[4]} />

        <div className='pt-30 pb-10'>
          <Footer footer={Data[5]} />
        </div>





      </div>



      <style jsx>{`
 @import url('https://fonts.googleapis.com/css2?family=Oxanium:wght@200..800&family=Roboto:ital,wght@0,100..900;1,100..900&family=Rubik:ital,wght@0,300..900;1,300..900&display=swap');



 .rubik{
 
//  font-family: "Rubik", sans-serif;
font-family: "Rubik", sans-serif;
font-weight: 450;
 }
 `}</style>


    </>
  )
}

export default App
