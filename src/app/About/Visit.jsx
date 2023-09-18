"use client"
import Image from 'next/image';
import React,{useEffect} from 'react';
import { FaArrowRight } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Visit = () => {
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
            <div className="lg:flex">
                <div className="lg:w-2/3">
                    <Image 
                     src="https://i.ibb.co/FKn2PDy/251-2514548-creates-optimal-working-environment-hospital-building-hospital-clipart.png"
                     width={800} // Use larger dimensions
                     height={800} // Use larger dimensions
                     alt="Slide 1"
                     data-aos="fade-right"></Image>
           
                <div className="p-4 mb-10" data-aos="fade-right">
            <h1 className='text-base-400'>   Visit Our Clinics</h1>
           
           <h1 className='text-4xl '>A great place for medico hospital  <br />center & health care.</h1>
         


       <div className="flex">
      
     <Image
 src="https://i.ibb.co/JFKjPCT/electrocardiogram-8011509.png"
 width={80} // Use larger dimensions
 height={80} // Use larger dimensions
 alt="Slide 1"
 data-aos="fade-right"
/>
     
            </div>
         
</div>
                </div>
               
                <div className="lg:w-1/3 ">
                    <p className='mb-8 mt-12' data-aos="fade-left">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim
                         ad minim veniam quis exercitation laboris nisi ut aliquip ea commodo.</p>
                         <div className="lg:flex md:flex" data-aos="fade-left">
                            <div className="flex">
                                <div className="">
                                <Image
 src="https://i.ibb.co/kxG7YwT/download.jpg"
 width={80} // Use larger dimensions
 height={80} // Use larger dimensions
 alt="Slide 1"
 data-aos="fade-left"
/>
                                </div>
                              <div className="">
                              <h4 className='text-semibold'data-aos="fade-left">  Qualified Doctors</h4>
                                <p data-aos="fade-left">Our clients and bring the best of who.</p>
                              </div>
                            </div>
                            <div className="flex">
                                <div className="">
                                <Image
 src="https://i.ibb.co/2Kbpsyf/173952718-female-doctor-and-red-heart-with-hand-vector-logotype-medicine-identity-and-concept-logo-f.jpg"
 width={120} // Use larger dimensions
 height={120} // Use larger dimensions
 alt="Slide 1"
 data-aos="fade-left"
/>
                                </div>
                            <div className="">
                            <h4 className='text-semibold' data-aos="fade-left">Allergy Medicine</h4>
                                <p data-aos="fade-left">Our clients and bring the best of who.</p>
                            </div>

                            </div>
                         </div>

                         <p className='mt-8'data-aos="fade-left">Quis ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor 
                            incididunt ut labore et dolore magna ipsum ultrices gravida.</p>
                            <h3 className='mt-8'data-aos="fade-left">Do you have any Question?</h3>
                          <h1 className='text-semibold'data-aos="fade-left">  +880 01892799999</h1>
                         <div className="mt-12">
                         <button data-aos="fade-left" className='btn bg-blue-300 flex text-white'>Contact Us<FaArrowRight></FaArrowRight></button>
                         </div>
                </div>
            </div>
        </div>
    );
};

export default Visit;