import React from 'react'
import { Instagram, Mail, Earth, X, Linkedin } from 'lucide-react'

const Footer = () => {
    return (
        <div className='my-10'>
            <p className='text-center text-lg font-[450] text-[#484848] mb-5'>Copyright © 2025 Mia Carter. All rights reserved.</p>

            <div className='flex gap-8 justify-center'>
                <a target="_blank" href="https://www.instagram.com/tvr002/"><Instagram /></a>
                <a target="_blank" href=""><Mail /></a>
                <a target="_blank" href=""><Earth /></a>
                <a target="_blank" href="https://www.linkedin.com/in/vivek-rajput-tvr002/"><Linkedin /></a>
                <a target="_blank" href="">  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 30 30">
                    <path d="M26.37,26l-8.795-12.822l0.015,0.012L25.52,4h-2.65l-6.46,7.48L11.28,4H4.33l8.211,11.971L12.54,15.97L3.88,26h2.65 l7.182-8.322L19.42,26H26.37z M10.23,6l12.34,18h-2.1L8.12,6H10.23z"></path>
                </svg></a>

            </div>

        </div>
    )
}

export default Footer