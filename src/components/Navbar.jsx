
import { motion } from 'motion/react';
import { House, Instagram, FileText, Sun, Moon } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Navbar() {

  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Check what the system setting is
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Set isDark to match the system
    setIsDark(prefersDark);

    // Apply the theme
    document.documentElement.style.colorScheme = prefersDark ? 'dark' : 'light';

    // Mark that component is ready
    setMounted(true);
  }, []);

  useEffect(() => {
    // Create a listener for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    // This function runs whenever the user changes their system theme
    const handleChange = (e) => {
      setIsDark(e.matches);
      document.documentElement.style.colorScheme = e.matches ? 'dark' : 'light';
    };

    // Start listening
    mediaQuery.addEventListener('change', handleChange);

    // Cleanup: stop listening when component unmounts
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    document.documentElement.style.colorScheme = isDark ? 'dark' : 'light';
  }, [isDark]);

  if (!mounted) return null;

  return (
    <>

{/* laptop view  */}

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
          delay: 1.3,
          duration: 0.7
        }}
        className="max-md:hidden fixed top-8 left-1/2 -translate-x-1/2 flex items-center gap-4 px-4 py-2 rounded-3xl transparent-2 bg-[var(--color-navbg)] border border-[var(--color-darkgray)] h-20">

        {/* Home */}
        <a href="./" className="h-auto flex items-center gap-2 px-3 py-1 rounded-2xl hover:bg-[var(--color-darkgray)] hover:px-5 hover:py-4 transition ease-in-out duration-75">
          <House strokeWidth={1.5} color='var(--color-maintext)' />
        </a>

        <div className="border-l-1 border-solid border-[var(--color-maintext)] h-6 " > </div>

        {/* Socials */}
        <a href="https://x.com/tvr002" target="_blank" className="flex items-center gap-2 px-3 py-1 rounded-xl hover:bg-[var(--color-darkgray)] hover:px-5 hover:py-4 transition">
          <svg fill='var(--color-maintext)' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="20" viewBox="0 0 30 30">
            <path d="M26.37,26l-8.795-12.822l0.015,0.012L25.52,4h-2.65l-6.46,7.48L11.28,4H4.33l8.211,11.971L12.54,15.97L3.88,26h2.65 l7.182-8.322L19.42,26H26.37z M10.23,6l12.34,18h-2.1L8.12,6H10.23z"></path>
          </svg>
        </a>

        <a href="https://www.instagram.com/tvr002/" target="_blank" className="flex items-center gap-2 px-3 py-1 rounded-xl hover:bg-[var(--color-darkgray)] hover:px-5 hover:py-4 transition">
          <Instagram strokeWidth={1.5} color='var(--color-maintext)' />
        </a>

        <a href="https://read.cv/" target="_blank" className="flex items-center gap-2 px-3 py-1 rounded-xl hover:bg-[var(--color-darkgray)] hover:px-5 hover:py-4 transition">
          <FileText strokeWidth={1.5} color='var(--color-maintext)' />
        </a>

        <div className="border-l-1 border-solid border-[var(--color-maintext)] h-6 " > </div>

        {/* Dark Light Mode */}
        <button
          onClick={() => setIsDark(!isDark)}
          className={`relative rounded-full flex items-center justify-center transition-all duration-300 px-3 transform `}
          aria-label="Toggle theme"
        >
          <div className="relative w-8 h-8">
            <Sun
              className={`absolute inset-0 w-7 h-8 text-yellow-500 transition-all duration-300 ${isDark
                ? 'opacity-0 rotate-90 scale-0'
                : 'opacity-100 rotate-0 scale-100'
                }`}
              strokeWidth={1.5}
            />
            <Moon
              className={`absolute inset-0 w-7 h-8 text-blue-400 transition-all duration-300 ${isDark
                ? 'opacity-100 rotate-0 scale-100'
                : 'opacity-0 -rotate-90 scale-0'
                }`}
              strokeWidth={1.5}
            />
          </div>
        </button>
      </motion.nav>

      {/* phone view: navbar from top   */}



      {/* <motion.nav
        initial={{
          scale: 0,
          y: -50
        }}
        animate={{
          scale: 1,
          y: 0
        }}
        transition={{
          delay: 1.3,
          duration: 0.7
        }}
        className="md:hidden fixed top-[3vh] left-1/2 -translate-x-1/2 flex items-center gap-4 px-4 py-4 rounded-3xl transparent-2 bg-[var(--color-navbg)] border border-[var(--color-darkgray)] ">

        <a href="https://read.cv/" target="_blank" className="flex items-center gap-2 px-3 py-1 rounded-xl hover:bg-[var(--color-darkgray)] hover:px-5 hover:py-4 transition">
          <FileText strokeWidth={1.5} color='var(--color-maintext)' />
        </a>

        <div className="border-l-1 border-solid border-[var(--color-maintext)] h-6 " > </div>

        <a href="https://x.com/tvr002" target="_blank" className="flex items-center gap-2 px-3 py-1 rounded-xl hover:bg-[var(--color-darkgray)] hover:px-5 hover:py-4 transition">
          <svg fill='var(--color-maintext)' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="20" viewBox="0 0 30 30">
            <path d="M26.37,26l-8.795-12.822l0.015,0.012L25.52,4h-2.65l-6.46,7.48L11.28,4H4.33l8.211,11.971L12.54,15.97L3.88,26h2.65 l7.182-8.322L19.42,26H26.37z M10.23,6l12.34,18h-2.1L8.12,6H10.23z"></path>
          </svg>
        </a>

        <a href="https://www.instagram.com/tvr002/" target="_blank" className="flex items-center gap-2 px-3 py-1 rounded-xl hover:bg-[var(--color-darkgray)] hover:px-5 hover:py-4 transition">
          <Instagram strokeWidth={1.5} color='var(--color-maintext)' />
        </a>


        <div className="border-l-1 border-solid border-[var(--color-maintext)] h-6 " > </div>

        <button
          onClick={() => setIsDark(!isDark)}
          className={`relative rounded-full flex items-center justify-center transition-all duration-300 px-3 transform `}
          aria-label="Toggle theme"
        >
          <div className="relative w-8 h-8">
            <Sun
              className={`absolute inset-0 w-7 h-8 text-yellow-500 transition-all duration-300 ${isDark
                ? 'opacity-0 rotate-90 scale-0'
                : 'opacity-100 rotate-0 scale-100'
                }`}
              strokeWidth={1.5}
            />
            <Moon
              className={`absolute inset-0 w-7 h-8 text-blue-400 transition-all duration-300 ${isDark
                ? 'opacity-100 rotate-0 scale-100'
                : 'opacity-0 -rotate-90 scale-0'
                }`}
              strokeWidth={1.5}
            />
          </div>
        </button>

      </motion.nav> */}

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
          delay: 1.3,
          duration: 0.7
        }}
        className="md:hidden fixed bottom-[3vh] left-1/2 -translate-x-1/2 flex items-center gap-4 px-4 py-4 rounded-3xl transparent-2 bg-[var(--color-navbg)] border border-[var(--color-darkgray)] ">

        <a href="https://read.cv/" target="_blank" className="flex items-center gap-2 px-3 py-1 rounded-xl hover:bg-[var(--color-darkgray)] hover:px-5 hover:py-4 transition">
          <FileText strokeWidth={1.5} color='var(--color-maintext)' />
        </a>

        <div className="border-l-1 border-solid border-[var(--color-maintext)] h-6 " > </div>

        <a href="https://x.com/tvr002" target="_blank" className="flex items-center gap-2 px-3 py-1 rounded-xl hover:bg-[var(--color-darkgray)] hover:px-5 hover:py-4 transition">
          <svg fill='var(--color-maintext)' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="20" viewBox="0 0 30 30">
            <path d="M26.37,26l-8.795-12.822l0.015,0.012L25.52,4h-2.65l-6.46,7.48L11.28,4H4.33l8.211,11.971L12.54,15.97L3.88,26h2.65 l7.182-8.322L19.42,26H26.37z M10.23,6l12.34,18h-2.1L8.12,6H10.23z"></path>
          </svg>
        </a>

        <a href="https://www.instagram.com/tvr002/" target="_blank" className="flex items-center gap-2 px-3 py-1 rounded-xl hover:bg-[var(--color-darkgray)] hover:px-5 hover:py-4 transition">
          <Instagram strokeWidth={1.5} color='var(--color-maintext)' />
        </a>


        <div className="border-l-1 border-solid border-[var(--color-maintext)] h-6 " > </div>

        <button
          onClick={() => setIsDark(!isDark)}
          className={`relative rounded-full flex items-center justify-center transition-all duration-300 px-3 transform `}
          aria-label="Toggle theme"
        >
          <div className="relative w-8 h-8">
            <Sun
              className={`absolute inset-0 w-7 h-8 text-yellow-500 transition-all duration-300 ${isDark
                ? 'opacity-0 rotate-90 scale-0'
                : 'opacity-100 rotate-0 scale-100'
                }`}
              strokeWidth={1.5}
            />
            <Moon
              className={`absolute inset-0 w-7 h-8 text-blue-400 transition-all duration-300 ${isDark
                ? 'opacity-100 rotate-0 scale-100'
                : 'opacity-0 -rotate-90 scale-0'
                }`}
              strokeWidth={1.5}
            />
          </div>
        </button>

      </motion.nav>

    </>
  );
}
