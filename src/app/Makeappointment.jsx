"use client"
import React, { useEffect } from 'react';
import Image from 'next/image'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Makeappointment = () => {
       
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
            <div className="mt-96">
           <h1 className='text-center text-base-400'data-aos="fade-right"> SIMPLE PROCESS</h1>
<h1 className='text-4xl text-center'data-aos="fade-right">How it helps you stay strong</h1>
<div className="flex">
        <div className=""></div>
        <div className="mx-auto">
     <Image
 src="https://i.ibb.co/JFKjPCT/electrocardiogram-8011509.png"
 width={80} // Use larger dimensions
 height={80} // Use larger dimensions
 alt="Slide 1"
 data-aos="fade-right"
/>

     </div>
       </div>
            <div className="grid sm:grid-cols-1 lg:grid-cols-4 md:grid-cols-2 text-center mt-20">
                <div className="p-6">
                <Image
  src="https://i.ibb.co/M7Cxvbn/140725170528-male-doctor-smartphone.jpg" 
  width={300}
  height={300}
  alt="Your Image"
  className="rounded-full mt-4"
  style={{ objectFit: 'cover', clipPath: 'circle(50% at 50% 50%)' }}
  data-aos="fade-right"
/>  
<h1 className='font-bold text-xl mt-4'>Make Appointment</h1>
<p>We will conduct a thorough examination of health</p>

                </div>
                <div className="p-6">
                <Image
  src="https://i.ibb.co/vqRbZDk/team-of-doctors.webp"
  width={300}
  height={300}
  alt="Your Image"
  className="rounded-full mt-4"
  style={{ objectFit: 'cover', clipPath: 'circle(50% at 50% 50%)' }}
  data-aos="fade-right"
/>
<h1 className='font-bold text-xl mt-4'>Select Expert Doctor</h1>
<p>We will conduct a thorough examination of health</p>

                </div>
                <div className="p-6">
                <Image
  src="https://i.ibb.co/t26qL3k/Drupal-NEWS-Can-doctors-refuse-to-treat-a-patient.jpg" 
  width={300}
  height={300}
  alt="Your Image"
  className="rounded-full"
  style={{ objectFit: 'cover', clipPath: 'circle(50% at 50% 50%)' }}
  data-aos="fade-left"
/>
<h1 className='font-bold text-xl mt-4'>Get Consultation</h1>
<p>We will conduct a thorough examination of health</p>
                </div>
                <div className="p-6">
                <Image
  src="https://i.ibb.co/S7G5PXM/senior-woman-seeing-a-doctor.jpg"
  width={300}
  height={300}
  alt="Your Image"
  className="rounded-full"
  style={{ objectFit: 'cover', clipPath: 'circle(50% at 50% 50%)' }}
  data-aos="fade-left"
/>
<h1 className='font-bold text-xl mt-4'>Get Cure & Relief</h1>
<p>We will conduct a thorough examination of health</p>
                </div>
            </div>
            </div>
            <div className="">
                <div className="grid sm:grid-cols-1 lg:grid-cols-4 md:grid-cols-2 text-center mt-10">
                    <div className="">
                    <Image
  src="https://i.ibb.co/x6ckzWf/medical-groups-c3e6fcadafbd51a5678728a2733104cf.jpg" 
  width={400}
  height={400}
  alt="Your Image"
  className='zoomable-card'
 
/>
                    </div>
                    <div className="">
                    <Image
  src="https://i.ibb.co/XZCCZZ0/Adobe-Stock-87499868-scaled.jpg"  
  width={400}
  height={400}
  alt="Your Image"
  className='zoomable-card'
 
/>
                    </div>
                    <div className="">
  
                    <Image
  src="https://i.ibb.co/FkpY6Xt/depositphotos-596333384-stock-photo-attractive-female-doctor-front-medical.webp" 
  width={400}
  height={400}
  alt="Your Image"
  className='zoomable-card'
 
/>
                    </div>
                    <div className="">
                    <Image
  src="https://i.ibb.co/N2Dt4hG/depositphotos-172206632-stock-photo-doctors-conversation.webp" 
  width={400}
  height={400}
  alt="Your Image"
  className='zoomable-card'
 
/>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Makeappointment;