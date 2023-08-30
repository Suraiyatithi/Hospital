"use client"
import React, { useEffect }  from 'react';
import Image from 'next/image'
import { FaArrowCircleRight } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const OurMedical = () => {
    const triggerAnimations = () => {
        AOS.refresh(); // Refresh AOS to trigger animations
      };
    
      useEffect(() => {
        // Initialize AOS
        AOS.init({
          duration: 1000,
          once: true,
        });
    
        // Attach the scroll event listener
        window.addEventListener('scroll', triggerAnimations);
    
        // Clean up the event listener on component unmount
        return () => {
          window.removeEventListener('scroll', triggerAnimations);
        };
      }, []);
      
    return (
        <div>
            <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
                <div className="">
                <Image
          src="https://i.ibb.co/NnfcDQY/3526872.jpg"
          width={600} // Use larger dimensions
          height={700} // Use larger dimensions
          alt="Slide 1"
          data-aos="fade-right"
        />
                </div>
                <div className="">
                    <h1 className='text-base-400'data-aos="fade-left">OUR MEDICAL</h1>
           
                    <h1 className='text-4xl 'data-aos="fade-left">We&apos;re setting Standards in Research what&apos;s more, Clinical Care.</h1>
                    <Image
          src="https://i.ibb.co/JFKjPCT/electrocardiogram-8011509.png"
          width={80} // Use larger dimensions
          height={80} // Use larger dimensions
          alt="Slide 1"
        />
               <p data-aos="fade-left">We provide the most full medical services, so every person could have the pportunity o
                     receive qualitative medical help.

</p>
               <div className="mt-10">
               <p data-aos="fade-left">Our Clinic has grown to provide a world class facility for the treatment of tooth loss, dental cosmetics and bore advanced restorative dentistry. We are among the most qualified implant
                     providers in the AUS with over 30 years of uality training and experience.</p>
               </div>
               <div className=" mt-8">
                <button className='btn bg-blue-300 text-white'data-aos="fade-right">Learn more <FaArrowCircleRight></FaArrowCircleRight></button>
               </div>
                </div>
            </div>
        </div>
    );
};

export default OurMedical;