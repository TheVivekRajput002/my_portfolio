import React from 'react';
import ReactIcon from '../assets/ReactIcon.png'
import SupabaseIcon from '../assets/SupabaseIcon.png'
import MysqlIcon from '../assets/MysqlIcon.png'
import PostgresqlIcon from '../assets/PostgresqlIcon.png'
import HtmlIcon from '../assets/HtmlIcon.png'
import CssIcon from '../assets/CssIcon.png'
import JavascriptIcon from '../assets/JavascriptIcon.png'
import GithubIcon from '../assets/GithubIcon.png'
import PythonIcon from '../assets/PythonIcon.png'
import FramermotionIcon from '../assets/FramermotionIcon.png'
import FigmaIcon from '../assets/FigmaIcon.png'
import TailwindcssIcon from '../assets/TailwindcssIcon.png'

export default function InfiniteFlow() {
    const items = [
        { id: 1, img: HtmlIcon },
        { id: 2, img: CssIcon },
        { id: 3, img: ReactIcon },
        { id: 4, img: SupabaseIcon },
        { id: 5, img: PostgresqlIcon },
        { id: 6, img: MysqlIcon },
        { id: 7, img: JavascriptIcon },
        { id: 8, img: PythonIcon },
        { id: 9, img: FramermotionIcon },
        { id: 10, img: FigmaIcon },
        { id: 11, img: TailwindcssIcon },
        { id: 12, img: GithubIcon },
        { id: 1, img: HtmlIcon },
        { id: 2, img: CssIcon },
        { id: 3, img: ReactIcon },
        { id: 4, img: SupabaseIcon },
        { id: 5, img: PostgresqlIcon },
        { id: 6, img: MysqlIcon },
        { id: 7, img: JavascriptIcon },
        { id: 8, img: PythonIcon },
        { id: 9, img: FramermotionIcon },
        { id: 10, img: FigmaIcon },
        { id: 11, img: TailwindcssIcon },
        { id: 12, img: GithubIcon },

    ];

    return (
        <div className="flex items-center justify-center">
            <div className="w-full max-w-6xl">

                <div className="relative overflow-hidden">
                    {/* Left shadow overlay */}
                    <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[var(--color-innerbg)] to-transparent z-10 pointer-events-none opacity-100"></div>

                    {/* Right shadow overlay */}
                    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[var(--color-innerbg)] to-transparent z-10 pointer-events-none opacity-100"></div>

                    {/* Scrolling container */}
                    <div className="flex hover-pause-container">
                        <div className="flex animate-icons-scroll gap-12">
                            {items.map((item) => (

                                <div
                                    key={`duplicate-${item.id}`}
                                    className="flex-shrink-0  w-auto flex items-center justify-center shadow-xl transition-transform"
                                >
                                    <img className='h-12 w-auto' src={item.img} alt="" />

                                </div>
                            ))}
                        </div>
                        {/* <div className="flex animate-icons-scroll gap-12 ml-36">
                            {items.map((item) => (

                                <div
                                    key={`duplicate-${item.id}`}
                                    className="flex-shrink-0  w-auto flex items-center justify-center shadow-xl transition-transform"
                                >
                                    <img className='h-12 w-auto' src={item.img} alt="" />

                                </div>
                            ))}
                        </div> */}

                    </div>
                </div>

            </div>

            <style>{`
        @keyframes scrolll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        
        .animate-icons-scroll {
          animation: scrolll 12s linear infinite;
        }

         .hover-pause-container:hover .animate-icons-scroll {
          animation-play-state: paused;
        }
      `}</style>
        </div>
    );
}