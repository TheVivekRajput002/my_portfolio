import React from 'react';
import img from '../assets/dummy.png'

export default function InfiniteScroll() {
    const items = [
        { id: 1, text: img },
        { id: 2, text: img },
        { id: 3, text: img },
        { id: 4, text: img },
        { id: 5, text: img },
        { id: 6, text: img },
    ];

    return (
        <div className="min-h-screen flex items-center justify-center overflow-hidden">
            <div className="w-full overflow-hidden">
                <div className="flex animate-scroll">
                    {/* First set of items */}
                    {items.map((item) => (
                        <div
                            key={`first-${item.id}`}
                            className="mx-8 flex-shrink-0 "
                        >
                            <img className='h-70 w-auto rounded-2xl' src={item.text} alt="" />
                        </div>
                    ))}
                    {/* Duplicate set for seamless loop */}
                    {items.map((item) => (
                        <div
                            key={`second-${item.id}`}
                            className="mx-8 flex-shrink-0 "
                        >
                            <img className='h-70 w-auto rounded-2xl' src={item.text} alt="" />
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
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

      `}</style>
        </div>
    );
}