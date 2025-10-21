import React from 'react'
import Navbar from '../components/Navbar'
import dummyphone from '../assets/dummyphone.png'
import JlugSummerSS2 from '../assets/JlugSummerSS2.webp'

const Projects = () => {
  return (
    <div className=" bg-[var(--color-primary)] h-auto border-t-0 border-b-0 max-md:w-[95%] max-xl:w-[80%] w-[55%] pr-[1%] pl-[1%] pt-[10%] max-md:pt-[1%] m-auto border-[1.5px] border-r-[var(--color-lightgray)] border-l-[var(--color-lightgray)] overflow-hidden" >

      <Navbar />

      <div className='flex gap-2'>

        <div>
          <div className='p-4 bg-[#000] rounded-xl mb-1'>
            <p className='font-[600] text-[var(--color-maintext)] text-4xl max-md:text-xl'>JEC Linux Users Group Summer School Website</p>
          </div>
          <img src={JlugSummerSS2} alt="" className='w-[100%] mb-1' />
          <div className='p-5 bg-[#000] rounded-xl'>
            <p className=' text-sm text-[var(--color-sidetext)] max-md:text-xs'>Developed a web platform as part of a team that enables users to register for workshops, access detailed information about them, and submit feedback or reviews.</p>
          </div>

        </div>

        <img src={dummyphone} alt="" className='h-140 w-[50%]' />

      </div>
          {/* <div className='p-4 bg-[#000] rounded-xl mb-1'>
            <p className='font-[600] text-[var(--color-maintext)] text-2xl max-md:text-xl'>JEC Linux Users Group Summer School Website</p>
          </div>
      <div className='flex gap-2'>

        <div>
          <img src={JlugSummerSS2} alt="" className='w-[100%] my-1 rounded-xl' />
          <div className='p-5 bg-[#000] rounded-xl'>
            <p className=' text-sm text-[var(--color-sidetext)] max-md:text-xs'>Developed a web platform as part of a team that enables users to register for workshops, access detailed information about them, and submit feedback or reviews.</p>
          </div>

        </div>

        <img src={dummyphone} alt="" className='h-140 w-[50%]' />

      </div> */}

    </div>
  )
}

export default Projects