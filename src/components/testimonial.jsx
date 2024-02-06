import React, { useEffect } from 'react';
import Splide from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/react-splide/css';
import  food  from "../assets/food.png";


const Testimonial = () => {
  useEffect(() => {

    const splide = new Splide('.splide', {
      type: 'loop',
      drag: 'free',
      focus: 'center',
      perPage: 1,
      breakpoints: {
        640: {
          perPage: 1,},
        },
      autoScroll: {
        speed: 1,
      },
    });

    splide.mount({ AutoScroll });
  }, []); 

  return (
    <div className='p-40 bg-orange-600'>
        <div name="Testimonials" className="splide p-16 bg-white rounded-lg text-black font-medium text-xs md:text-sm">
        <div className="splide__track">
            <ul className="splide__list"> 
            <li className="splide__slide px-5">
                <div className='flex flex-col gap-2 items-center px-20'> 
                    <img src={food} alt="Image 1" className='rounded-full sm:h-20 sm:w-20 w-12 h-12'/>
                    <p>"Excellent food. Menu is extensive and seasonal to a particularly high standard. Definitely fine dining. It can be expensive but worth it and they do different deals so it’s worth checking them out before you book. Highly recommended." </p>
                        <div className='flex flex-col text-xs'>
                        <p className='text-orange-600 font-bold text-lg'>Usman Abubakar</p>
                        </div>
                </div>
            </li>
            </ul>
        </div>
        </div>
    </div>
  );
};

export default Testimonial;