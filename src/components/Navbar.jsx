
import { motion } from 'motion/react';
import { House, Instagram, FileText } from 'lucide-react'

export default function Navbar() {
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
      className="max-md:hidden fixed top-8 left-1/2 -translate-x-1/2 flex items-center gap-4 px-2 py-2 rounded-3xl transparent-2 bg-white/70 border border-[var(--color-darkgray)]">

      {/* Home */}
      <a href="./" className="h-auto flex items-center gap-2 px-3 py-1 rounded-2xl hover:bg-gray-100 hover:px-5 hover:py-4 transition ease-in-out duration-75">
        <House strokeWidth={1.5} />
      </a>

      <div className="border-l-1 border-solid border-black h-6 " > </div>

      {/* Socials */}
      <a href="https://x.com/tvr002" target="_blank" className="flex items-center gap-2 px-3 py-1 rounded-xl hover:bg-gray-100 hover:px-5 hover:py-4 transition">
        <img src="https://framerusercontent.com/images/6VsfSOtQYSyGYitFmPQcq42SZbs.svg" alt="x" className="w-6 h-6" />
      </a>

      <a href="https://www.instagram.com/tvr002/" target="_blank" className="flex items-center gap-2 px-3 py-1 rounded-xl hover:bg-gray-100 hover:px-5 hover:py-4 transition">
        <Instagram strokeWidth={1.5} />
      </a>

      <a href="https://read.cv/" target="_blank" className="flex items-center gap-2 px-3 py-1 rounded-xl hover:bg-gray-100 hover:px-5 hover:py-4 transition">
        <FileText strokeWidth={1.5} />
      </a>

      <div className="border-l-1 border-solid border-black h-6 " > </div>

      {/* Call to Action */}
      <a href="https://cal.com/" target="_blank"
        className="ml-auto bg-black text-white px-6 py-4 rounded-2xl hover:bg-gray-800 transition">
        Book a Call
      </a>
    </motion.nav>
  );
}
