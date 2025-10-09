
import { motion } from 'motion/react';
import { House, Instagram, FileText } from 'lucide-react'
import {useState, useEffect} from 'react'

export default function Navbar() {

  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.documentElement.style.colorScheme = isDark ? 'dark' : 'light';
  }, [isDark]);

  return (
    <motion.nav
      initial={{
        scale: 0,
        y: -50
      }}
      animate={{
        scale: 1,
        y: 0
      }}
      transition={{
        delay: 1.2,
        duration: 0.6
      }}
      className="max-md:hidden fixed top-8 left-1/2 -translate-x-1/2 flex items-center gap-4 px-2 py-2 rounded-3xl transparent-2 bg-[var(--color-navbg)] border border-[var(--color-darkgray)]">

      {/* Home */}
      <a href="./" className="h-auto flex items-center gap-2 px-3 py-1 rounded-2xl hover:bg-gray-100 hover:px-5 hover:py-4 transition ease-in-out duration-75">
        <House strokeWidth={1.5} color='var(--color-maintext)'/>
      </a>

      <div className="border-l-1 border-solid border-[var(--color-maintext)] h-6 " > </div>

      {/* Socials */}
      <a href="https://x.com/tvr002" target="_blank" className="flex items-center gap-2 px-3 py-1 rounded-xl hover:bg-gray-100 hover:px-5 hover:py-4 transition">
        <svg fill='var(--color-maintext)' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="20" viewBox="0 0 30 30">
                    <path d="M26.37,26l-8.795-12.822l0.015,0.012L25.52,4h-2.65l-6.46,7.48L11.28,4H4.33l8.211,11.971L12.54,15.97L3.88,26h2.65 l7.182-8.322L19.42,26H26.37z M10.23,6l12.34,18h-2.1L8.12,6H10.23z"></path>
                </svg>
      </a>

      <a href="https://www.instagram.com/tvr002/" target="_blank" className="flex items-center gap-2 px-3 py-1 rounded-xl hover:bg-gray-100 hover:px-5 hover:py-4 transition">
        <Instagram strokeWidth={1.5} color='var(--color-maintext)'/>
      </a>

      <a href="https://read.cv/" target="_blank" className="flex items-center gap-2 px-3 py-1 rounded-xl hover:bg-gray-100 hover:px-5 hover:py-4 transition">
        <FileText strokeWidth={1.5} color='var(--color-maintext)'/>
      </a>

      <div className="border-l-1 border-solid border-[var(--color-maintext)] h-6 " > </div>

      {/* Call to Action */}
      <button  onClick={() => setIsDark(!isDark)}target="_blank"
        className="ml-auto bg-[black] text-white px-6 py-4 rounded-2xl hover:bg-gray-800 transition">
        Book a Call
      </button>
    </motion.nav>
  );
}
