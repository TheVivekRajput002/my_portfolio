import React from 'react';
import img from '../assets/dummy.png'
import JlugSummerSS2 from '../assets/JlugSummerSS2.png'
import KrishiMitraSS from '../assets/KrishiMitraSS.png'
import NoteBlocSS from '../assets/NoteBlocSS.png'

export default function InfiniteScroll() {
    const items = [
        { id: 1, text: KrishiMitraSS },
        { id: 2, text: JlugSummerSS2 },
        { id: 3, text: NoteBlocSS },
        { id: 4, text: JlugSummerSS2 },
        { id: 5, text: KrishiMitraSS },
        { id: 6, text: NoteBlocSS },
        { id: 7, text: NoteBlocSS },
        { id: 8, text: NoteBlocSS },
        { id: 9, text: NoteBlocSS },
    ];

    return (
        <div className="flex items-center justify-center overflow-hidden">
            <div className="w-full overflow-hidden">
                <div className="flex animate-scroll">
                    {/* First set of items */}
                    {items.map((item) => (
                        <div
                            key={`first-${item.id}`}
                            className="mx-8 flex-shrink-0 backdrop-blur-3xl bg-[#f1f1f140] border-1 border-[#dddddd54] rounded-2xl p-5 "
                            >
                            <img className='h-70 w-auto rounded-xl border-1 border-solid border-[#e3e3e3bb]' src={item.text} alt="" />
                        </div>
                    ))}
                    {/* Duplicate set for seamless loop */}
                    {items.map((item) => (
                        <div
                            key={`second-${item.id}`}
                            className="mx-8 flex-shrink-0 backdrop-blur-3xl bg-[#f1f1f140] border-1 border-[#dddddd54] rounded-2xl p-5 "
                            >
                            <img className='h-70 w-auto rounded-xl border-1 border-solid border-[#e3e3e3bb]' src={item.text} alt="" />
                        </div>
                    ))}
                    {items.map((item) => (
                        <div
                            key={`third-${item.id}`}
                            className="mx-8 flex-shrink-0 backdrop-blur-3xl bg-[#f1f1f140] border-1 border-[#dddddd54] rounded-2xl p-5 "
                            >
                            <img className='h-70 w-auto rounded-xl border-1 border-solid border-[#e3e3e3bb]' src={item.text} alt="" />
                        </div>
                    ))}
                </div>
            </div>

            {/* <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
            animation: scroll 8s linear infinite;
            transition: animation-duration 0.3s ease;
            }
            
    .animate-scroll:hover {
  animation-play-state: paused;
}

      `}</style> */}
        </div>
    );
}