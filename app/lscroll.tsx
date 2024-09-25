"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);   


function Container() {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.to(containerRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 70%',
        end: 'bottom top',
        scrub: true,
        // markers: true,
      },
      x: '-30%',
    });
  }, []);

  return (
    <div className="mx-auto md:pt-12 lg:pt-24 w-full overflow-hidden " >
      <div className=' flex gap-[4vw]' ref={containerRef}>
        <img className='w-[25vw] min-w-[200px] aspect-square bg-slate-900 shrink-0 rounded-3xl' src='https://www.sinciitd.in/static/media/event5.e342606d4892183ad700.png'></img>
        <img className='w-[25vw] min-w-[200px] aspect-square bg-slate-900 shrink-0 rounded-3xl' src='https://www.sinciitd.in/static/media/event4.95f78804a9b84bba2cab.png'></img>
        <img className='w-[25vw] min-w-[200px] aspect-square bg-slate-900 shrink-0 rounded-3xl' src='https://www.sinciitd.in/static/media/event3.6944537fca74891ffbd3.png'></img>
        <img className='w-[25vw] min-w-[200px] aspect-square bg-slate-900 shrink-0 rounded-3xl' src='https://www.sinciitd.in/static/media/event6.f86c985569ed9995a7d5.png'></img>
        <img className='w-[25vw] min-w-[200px] aspect-square bg-slate-900 shrink-0 rounded-3xl' src='https://www.sinciitd.in/static/media/event5.e342606d4892183ad700.png'></img>
        <img className='w-[25vw] min-w-[200px] aspect-square bg-slate-900 shrink-0 rounded-3xl' src='https://www.sinciitd.in/static/media/event4.95f78804a9b84bba2cab.png'></img>
        <div className='absolute min-w-[200px] bottom-0 bg-secondary w-[200vw] h-[10vh] z-[-1]'></div>
      </div>
    </div>
  );
}

export default Container;