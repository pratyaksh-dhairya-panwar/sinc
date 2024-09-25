"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function RightMovingContainer() {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.to(containerRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
        // markers: true,
      },
      x: '30%', // Move the container fully to the right
    });
  }, []);

  return (
    <>
    <div className="mx-auto pt-[4vw] pb-16 md:pb-32 w-full overflow-hidden bg-secondary">
      <div className="bg-slate-700 flex gap-[4vw] justify-end" ref={containerRef}>
        <div className='absolute bg-secondary w-[200vw] h-[60vh] z-[-1]'></div>
      <img className='w-[25vw] min-w-[200px] aspect-square bg-slate-900 shrink-0 rounded-3xl' src='https://www.sinciitd.in/static/media/event5.e342606d4892183ad700.png'></img>
        <img className='w-[25vw] min-w-[200px] aspect-square bg-slate-900 shrink-0 rounded-3xl' src='https://www.sinciitd.in/static/media/event4.95f78804a9b84bba2cab.png'></img>
        <img className='w-[25vw] min-w-[200px] aspect-square bg-slate-900 shrink-0 rounded-3xl' src='https://www.sinciitd.in/static/media/event3.6944537fca74891ffbd3.png'></img>
        <img className='w-[25vw] min-w-[200px] aspect-square bg-slate-900 shrink-0 rounded-3xl' src='https://www.sinciitd.in/static/media/event6.f86c985569ed9995a7d5.png'></img>
        <img className='w-[25vw] min-w-[200px] aspect-square bg-slate-900 shrink-0 rounded-3xl' src='https://www.sinciitd.in/static/media/event5.e342606d4892183ad700.png'></img>
        <img className='w-[25vw] min-w-[200px] aspect-square bg-slate-900 shrink-0 rounded-3xl' src='https://www.sinciitd.in/static/media/event4.95f78804a9b84bba2cab.png'></img>
      </div>
    </div>
    </>
  );
}

export default RightMovingContainer;