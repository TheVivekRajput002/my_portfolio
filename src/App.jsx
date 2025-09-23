import vivek_rajput_pfp from './assets/vr_professional_pfp.png'

function App() {

  return (
    <>
      <div className="h-auto w-[55%] pr-[10%] pl-[10%] pt-[12%] m-auto border-[1.5px] border-r-[#e1e1e1] border-l-[#e1e1e1]">

        <img className='h-[120px] mb-[20px]' src={vivek_rajput_pfp} alt="" />
        <h2 className='font-[600] mb-[5px] text-5xl'>Hey, I’m Vivek Rajput.</h2>
        <h2 className='font-[600] text-5xl'>Dreamer & Designer</h2>
        <p className='text-[#656565] text-lg mt-[20px] mb-[30px]'>Crafting seamless experiences and bold visuals. College student by day, creative thinker, and aspiring innovator by night.</p>
        <span className='bg-green-100 px-7 py-4 rounded-full text-center' ><span className=' text-lg font-medium text-green-700' >Available for new project</span> </span>

        <h2 className='font-[650] text-2xl mt-[50vh]'>About</h2>
        <p className='text-[#656565] text-lg mt-[15px]'>I’m Mia Carter, a curious designer, coder, and storyteller. Currently a student at Springfield High School, but always exploring the limitless possibilities of creativity and technology.</p>
        <p className='text-[#656565] text-lg mt-[15px] '>I thrive on transforming ideas into reality, whether it's crafting digital interfaces, designing immersive visuals, or building websites that feel effortless to use.</p>

      </div>

    </>
  )
}

export default App
