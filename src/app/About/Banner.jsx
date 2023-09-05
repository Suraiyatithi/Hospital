"use client"
import React, { useEffect }  from 'react';
import { FaBaby, FaBrain, FaDisease, FaEye, FaHandHolding, FaHandHoldingMedical, FaHeart, FaLaugh, FaResearchgate, FaTeeth, FaUserAlt } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image'

const Banner = () => {
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
    <div className='relative mb-96 '>
            <div   style={{ backgroundImage: 'url("https://i.ibb.co/5KC0h8r/hexagonal-pattern-technology-circuit-network.jpg" )',height:'30rem' }}
        className="bg-cover relative mt-12 p-10 h-full mb-10">
     
            <div className="">


<div className="text-center text-white mb-10 lg:mt-24" data-aos="fade-right">
            <h1 className='text-base-400'>  Manage your healthcare</h1>
           
           <h1 className='lg:text-5xl '>          
Trust us to be there to help all and <br />
make things weel again</h1>

       <div className="flex">
        <div className=""></div>
        <div className="mx-auto">
     <Image
 src="https://i.ibb.co/JFKjPCT/electrocardiogram-8011509.png"
 width={80} // Use larger dimensions
 height={80} // Use larger dimensions
 alt="Slide 1"
/>  
     </div>
       </div>
            </div>
            </div>
        </div>
        <div className="absolute top-1/2  transform -translate-x-1/5 -translate-y-1/5 z-5 mb-96 p-24  w-full h-full">
       
                <div className="grid lg:grid-cols-5 sm:grid-cols-1 md:grid-cols-2">
<div className="border border-blue-300 pt-10 pb-10 pl-6 pr-6 text-center bg-slate-200 ">
<h1 className='text-center pt-6 pb-6 ml-16 pr-6'><FaUserAlt className='text-blue-300 text-7xl'/></h1>
<p>Person Care</p>
</div>
<div className="border border-blue-300 pt-10 pb-10 pl-6 pr-6  text-center bg-slate-200">
<h1 className='text-center pt-6 pb-6 ml-16 pr-6'><FaBrain className='text-blue-300 text-7xl'/></h1>
<p>Brain Care</p>
</div>
<div className="border border-blue-300 pt-10 pb-10 pl-6 pr-6  text-center bg-slate-200">
<h1 className='text-center pt-6 pb-6 ml-16 pr-6'><FaEye className='text-blue-300 text-7xl'/></h1>
<p>Eye Care</p>
</div>
<div className="border border-blue-300 pt-10 pb-10 pl-6 pr-6  text-center bg-slate-200">
<h1 className='text-center pt-6 pb-6 ml-16 pr-6'><FaHeart className='text-blue-300 text-7xl'/></h1>
<p>Heart Care</p>
</div>
<div className="border border-blue-300 pt-10 pb-10 pl-6 pr-6  text-center bg-slate-200">
<h1 className='text-center pt-6 pb-6 ml-16 pr-6'><FaTeeth className='text-blue-300 text-7xl'/></h1>
<p>Dental Care</p>
</div>
<div className="border border-blue-300 pt-10 pb-10 pl-6 pr-6  text-center bg-slate-200">
<h1 className='text-center pt-6 pb-6 ml-16 pr-6'><FaBaby className='text-blue-300 text-7xl'/></h1>
<p>Baby Care</p>
</div>
<div className="border border-blue-300 pt-10 pb-10 pl-6 pr-6  text-center bg-slate-200">
<h1 className='text-center pt-6 pb-6 ml-16 pr-6'><FaDisease className='text-blue-300 text-7xl'/></h1>
<p>Health Care</p>
</div>
<div className="border border-blue-300 pt-10 pb-10 pl-6 pr-6  text-center bg-slate-200">
<h1 className='text-center pt-6 pb-6 ml-16 pr-6'><FaHandHolding className='text-blue-300 text-7xl'/></h1>
<p>Normal Care</p>
</div>
<div className="border border-blue-300 pt-10 pb-10 pl-6 pr-6  text-center bg-slate-200">
<h1 className='text-center pt-6 pb-6 ml-16 pr-6'><FaLaugh className='text-blue-300 text-7xl'/></h1>
<p>Mental Care</p>
</div>
<div className="border border-blue-300 pt-10 pb-10 pl-6 pr-6  text-center bg-slate-200">
<h1 className='text-center pt-6 pb-6 ml-16 pr-6'><FaUserAlt className='text-blue-300 text-7xl'/></h1>
<p>Person care</p>
</div>
                </div>
                {/* <div className=""></div> */}
     
        </div>
    </div>
    );
};

export default Banner;