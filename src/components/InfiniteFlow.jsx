import JlugSummerSS2 from '../assets/JlugSummerSS2.webp'
import KrishiMitraSS from '../assets/KrishiMitraSS.webp'
import NoteBlocSS from '../assets/NoteBlocSS.webp'
import TheZenWebsiteSS from '../assets/TheZenWebsiteSS.webp'

export default function InfiniteFlow() {
  const images = [
    { id: 1, src: JlugSummerSS2, alt: "Jlug Summer" },
    { id: 2, src: KrishiMitraSS, alt: "Krishi Mitra" },
    { id: 3, src: NoteBlocSS, alt: "Note Bloc" },
    { id: 4, src: TheZenWebsiteSS, alt: "Note Bloc" },
    { id: 5, src: JlugSummerSS2, alt: "Note Bloc" },
    { id: 6, src: NoteBlocSS, alt: "Note Bloc" },
    { id: 7, src: NoteBlocSS, alt: "Note Bloc" },
    { id: 8, src: NoteBlocSS, alt: "Note Bloc" },
    { id: 9, src: NoteBlocSS, alt: "Note Bloc" },
    { id: 10, src: NoteBlocSS, alt: "Note Bloc" },
  ];
  
  return (
    <div className="w-full flex items-center overflow-hidden">
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        
        .animate-scroll {
          animation: scroll 15s linear infinite;
          display: flex;
          gap: 2rem;
        }
      `}</style>
      
      <div className="animate-scroll">
        {/* First set of images */}
        {images.map((image) => (
          <div
            key={`first-${image.id}`}
            className="flex-shrink-0"
          >
            <div  className="max-md:p-2 flex-shrink-0 backdrop-blur-3xl bg-[var(--color-darkgray)] border-1 border-[var(--color-gray)] rounded-2xl p-3 ">
              <img
                src={image.src}
                alt={image.alt}
                className='h-70 max-md:h-50 w-auto rounded-xl border-1 border-solid border-[var(--color-lightgray)]'
              />
            </div>
          </div>
        ))}
        
        {/* Duplicate set for seamless loop */}
        {images.map((image) => (
          <div
            key={`second-${image.id}`}
            className="flex-shrink-0"
          >
            <div  className="mx-8 flex-shrink-0 backdrop-blur-3xl bg-[var(--color-darkgray)] border-1 border-[var(--color-gray)] rounded-2xl p-3 ">
              <img
                src={image.src}
                alt={image.alt}
                className='h-70 w-auto rounded-xl border-1 border-solid border-[#e3e3e3bb]'
              />
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}