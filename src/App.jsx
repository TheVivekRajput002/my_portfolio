

import Home from './pages/Home'
import Projects from './pages/Projects'
import Navbar from '../src/components/Navbar'
import { Routes, Route } from 'react-router-dom'




function App() {

  return (
    <>

      < div className='bg-[var(--color-bg)] '>

        <div className="bg-[var(--color-innerbg)] h-auto border-t-0 border-b-0 max-md:w-[95%] max-xl:w-[80%] w-[55%] pr-[1%] pl-[1%] pt-[9%] max-md:pt-[1%] m-auto border-[1.5px] border-r-[var(--color-lightgray)] border-l-[var(--color-lightgray)] overflow-hidden" >

          <Navbar />

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/projects' element={<Projects />} />
          </Routes>

        </div>
      </div>


    </>

  )
}

export default App
