"use client"
import React, { useEffect } from 'react';
import Image from 'next/image'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaBookMedical } from 'react-icons/fa';
const Articles = () => {
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
        <div className='mt-16 p-6'>
              <div className="p-4 mb-10" data-aos="fade-right">
            <h1 className='text-base-400'>   Keeping You Well.</h1>
           
           <h1 className='text-4xl '>Stories, Tips & Latest News.</h1>

       <div className="flex">
      
     <Image
 src="https://i.ibb.co/JFKjPCT/electrocardiogram-8011509.png"
 width={80} // Use larger dimensions
 height={80} // Use larger dimensions
 alt="Slide 1"
/>
     
            </div>
         
</div>
<div className="">
    <div className="grid sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
        <div className="">
        <div className="card w-96 bg-base-100 p-4"data-aos="fade-right">
  <figure>
  <Image
 src="https://i.ibb.co/bbdTFZV/fig2.webp"
 width={400} // Use larger dimensions
 height={400} // Use larger dimensions
 alt="Slide 1"
 className="zoomable-card"
/>
</figure>
  <div className="card-body">
    <h2 className="card-title">
    July 03, 2023
      <div className="badge badge-blue-300 flex"><FaBookMedical className='text-lg text-blue-500'></FaBookMedical> Heath Care</div>
    </h2>
    <p className='text-xl font bold'>How to handle patient body in MRI</p>
    <div className="card-actions justify-end">
      <div className="">We are provide excellent medical advices for your good health and we…</div> 
    
    </div>
  </div>
</div>
        </div>
        <div className="">
        <div className="">
        <div className="card w-96 bg-base-100 p-4 "data-aos="fade-right">
  <figure>
  <Image
 src="https://i.ibb.co/Dz09kr8/GHA-XRAY-8198.jpg"
 width={400} // Use larger dimensions
 height={400} // Use larger dimensions
 alt="Slide 1"
 className="zoomable-card"
/></figure>
  <div className="card-body">
    <h2 className="card-title">
    Jun 03, 2023
       <div className="badge badge-blue-300 flex"><FaBookMedical className='text-lg text-blue-500'></FaBookMedical>  Surgery</div>
    </h2>
    <p className='text-xl '>Diabetes & blood pressor check up</p>
    <div className="card-actions justify-end">
      <div className="">We are provide excellent medical advices for your good health and we…</div> 
    
    </div>
  </div>
</div>
        </div>
        </div>
        <div className="divide-y divide-dashed hover:divide-solid">
            <div className="">
            <div className="">
        <div className="card w-96 bg-base-100 "data-aos="fade-left">

  <div className="card-body">
    <h2 className="card-title">
    July 03, 2022 
      <div className="badge badge-blue-300 flex"><FaBookMedical className='text-lg text-blue-500'></FaBookMedical> Medical</div>
    </h2>
    <p className='text-xl '>Multi super doctors and kind behavior</p>
  </div>
</div>
        </div>
            </div>
            <div className=""></div>
            <div className="">
            <div className="card w-96 bg-base-100 "data-aos="fade-left">

<div className="card-body">
  <h2 className="card-title">
  Jun 03, 2021 
    <div className="badge badge-blue-300 flex"> <FaBookMedical className='text-lg text-blue-500'></FaBookMedical>Professional</div>
  </h2>
  <p className='text-xl '>For Treatment: Research and Analysis</p>
</div>
</div>
            </div>
            <div className="">
            <div className="card w-96 bg-base-100 "data-aos="fade-left">

<div className="card-body">
  <h2 className="card-title">
  Jun 18, 2019 
    <div className="badge badge-blue-300 flex"><FaBookMedical className='text-lg text-blue-500'></FaBookMedical> Heath Care</div>
  </h2>
  <p className='text-xl '>Get the Home care and nursing service</p>
</div>
</div>
            </div>
        </div>
    </div>
</div>
        </div>
    );
};

export default Articles;













