"use client"
import Image from 'next/image';
import React,{useEffect} from 'react';
import { FaArrowRight } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';




const KnowDoctor = () => {
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
        <div className='lg:mt-36 mb-36'>
            <div className="">
                <div className="lg:flex justify-around mb-12">
                    <div className="lg:w-2/4">
                    <h1 className='text-base-400'data-aos="fade-right">Meet Our Team</h1>
           
           <h1 className='text-4xl 'data-aos="fade-right">Group of Certified & Experienced Doctors.</h1>
           <div className="">
     <Image
 src="https://i.ibb.co/JFKjPCT/electrocardiogram-8011509.png"
 width={80} // Use larger dimensions
 height={80} // Use larger dimensions
 alt="Slide 1"
 data-aos="fade-right"
/>
     
       </div>
           <p data-aos="fade-right">We Provide the best Medical service for man kinds and our all the doctor are trully well educated 
            also know how to love people and do mankind.They are totally genious. </p>

              <h4 data-aos="fade-right"><button className='btn bg-blue-300 text-white flex mt-12 mb-12'>Make Appointment <FaArrowRight></FaArrowRight></button></h4>
                    </div>
                    <div className="lg:1/4 text-center">
                    <Image
 src="https://i.ibb.co/p4MgSn1/s-l1200.jpg"
 width={280} // Use larger dimensions
 height={280} // Use larger dimensions
 alt="Slide 1"
 className='rounded-full '
 data-aos="fade-left"
/>
<h1 data-aos="fade-left" className='text-lg font-semibold mt-6'>Justin Beckham</h1>
<p data-aos="fade-left">Cardiology Specialist</p>



                    </div>
                    <div className="lg:1/4 text-center">
                    <Image
 src= "https://i.ibb.co/2qHKLqK/1600966155152.jpg" 
 width={280} // Use larger dimensions
 height={280} // Use larger dimensions
 alt="Slide 1"
 className='rounded-full'
 data-aos="fade-left"
/>
     <h1 data-aos="fade-left" className='text-lg font-semibold mt-6'>Smith Johnson</h1>
     <p data-aos="fade-left">Dermatologist</p>             

                    </div>
                </div>
                <div className="lg:flex justify-around">
                    <div className="text-center">
                    <Image
 src="https://i.ibb.co/7ybjYsG/Fincher-Hi-Res-283x300.jpg"
 width={270} // Use larger dimensions
 height={270} // Use larger dimensions
 alt="Slide 1"
 className='rounded-full '
 data-aos="fade-right"
/>


<h1 data-aos="fade-right" className='text-lg font-semibold mt-6'>Justin Beckham</h1>
<p data-aos="fade-right">Cardiology Specialist</p>
                    </div>
                    <div className="text-center">
                    <Image
 src="https://i.ibb.co/1JysyMj/1641389988830.jpg"
 width={280} // Use larger dimensions
 height={280} // Use larger dimensions
 alt="Slide 1"
 className='rounded-full'
 data-aos="fade-right"
/>
<h1 data-aos="fade-right" className='text-lg font-semibold mt-6'>Smith Johnson</h1>
<p data-aos="fade-right">Neurology Specialist</p>
                    </div>
                    <div className="text-center">
                    <Image
 src="https://i.ibb.co/VCVZYQr/doccc.jpg" 
 width={280} // Use larger dimensions
 height={280} // Use larger dimensions
 alt="Slide 1"
 className='rounded-full'
 data-aos="fade-left"
/>

<h1  data-aos="fade-left"  className='text-lg font-semibold mt-6'>Dr Uday Gupta</h1>
<p  data-aos="fade-left">gynaecologist</p>

                    </div>
                    <div className="text-center">
                    <Image
 src="https://i.ibb.co/bKjyvHC/IMG-2286-web.png"
 width={280} // Use larger dimensions
 height={280} // Use larger dimensions
 alt="Slide 1"
 className='rounded-full '
 data-aos="fade-left"
/>
<h1  data-aos="fade-left" className='text-lg font-semibold mt-6'>Edward Willey</h1>
<p data-aos="fade-left">
General Doctor</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KnowDoctor;