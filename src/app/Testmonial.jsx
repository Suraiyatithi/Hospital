"use client"
import React, { useRef, useState ,useEffect} from 'react';


import Image from 'next/image'
import AOS from 'aos';
import 'aos/dist/aos.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';
import { FaSmile, FaStar } from 'react-icons/fa';

const Testmonial = () => {
     
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
        <div className='bg-blue-700 mt-16 p-10'>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                <div className="text-white">
             <p className='text-xl 'data-aos="fade-right">   TESTMONIALS</p>
<h1 className='text-6xl'data-aos="fade-right">What people say about us</h1>
<p></p>

<div className="divide-y divide-dashed hover:divide-solid">
<h1 className='text-5xl'data-aos="fade-right">+100K</h1>


<p className='flex text-xl'data-aos="fade-right"><FaSmile className='text-blue-300 text-6xl'></FaSmile> Happy Patients</p>

</div>

                </div>
                <div className="p-22">
                <Swiper
        slidesPerView={2}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className="p-4 bg-slate-100 rounded-lg"data-aos="fade-left">
                <div className="">
                    <p className='flex mb-4'><FaStar className='text-yellow-600'></FaStar ><FaStar  className='text-yellow-600'></FaStar><FaStar  className='text-yellow-600'></FaStar><FaStar  className='text-yellow-600'></FaStar><FaStar  className='text-yellow-600'></FaStar></p>
                    <small>I Actually really appriciate your hospital environment and also your hospital.
                        The behavour of all the nurse and doctor are so much good.Best hospital
                        I have ever seen before.</small>
                </div>
                <div className=" bg-slate-500 flex mt-4 p-1">
                <Image
 src="https://i.ibb.co/pRD5m03/beautiful-gril-spring-portrait-pictures-csp47509080.webp"
 width={60} // Use larger dimensions
 height={60} // Use larger dimensions
 alt="Slide 1"
 className="rounded-full"
/>
<h4>Sukarna Rahman</h4>
                </div>
            </div>

        </SwiperSlide>
        <SwiperSlide>         <div className="p-4 rounded-lg bg-slate-100"data-aos="fade-left">
                <div className="">
                <p className='flex mb-4'><FaStar className='text-yellow-600'></FaStar ><FaStar  className='text-yellow-600'></FaStar><FaStar  className='text-yellow-600'></FaStar><FaStar  className='text-yellow-600'></FaStar><FaStar  className='text-yellow-600'></FaStar></p>
                    <small>The behavour of all the nurse and doctor are so much good.Best hospital
                        I have ever seen before.I Actually really appriciate your hospital environment and also your hospital.</small>
                </div>
                <div className="  bg-slate-500 flex mt-4">
                <Image
 src="https://i.ibb.co/CVLsTGn/grilphoto-14df581-1620057926854-sc-cmprsd-40.jpg"
 width={40} // Use larger dimensions
 height={40} // Use larger dimensions
 alt="Slide 1"
 className="rounded-full"
/>
<h4>Ayesha Khatun</h4>
                </div>
            </div>
</SwiperSlide>
        <SwiperSlide>         <div className="p-4 rounded-lg bg-slate-100"data-aos="fade-left">
                <div className="">
                <p className='flex mb-4'><FaStar className='text-yellow-600'></FaStar ><FaStar  className='text-yellow-600'></FaStar><FaStar  className='text-yellow-600'></FaStar><FaStar  className='text-yellow-600'></FaStar><FaStar  className='text-yellow-600'></FaStar></p>
                    <small>I Actually really appriciate your hospital environment and also your hospital.
                        The behavour of all the nurse and doctor are so much good.Best hospital
                        I have ever seen before.</small>
                </div>
                <div className=" bg-slate-500 flex mt-4">
                <Image
 src="https://i.ibb.co/w66QrxL/Max-R-Headshot-1.jpg"
 width={50} // Use larger dimensions
 height={50} // Use larger dimensions
 alt="Slide 1"
 className="rounded-full"
/>
<h4>Ahsan Khan</h4>
                </div>
            </div>
</SwiperSlide>
        <SwiperSlide>         <div className="p-4 rounded-lg bg-slate-100"data-aos="fade-left">
                <div className="">
                <p className='flex mb-4'><FaStar className='text-yellow-600'></FaStar ><FaStar  className='text-yellow-600'></FaStar><FaStar  className='text-yellow-600'></FaStar><FaStar  className='text-yellow-600'></FaStar><FaStar  className='text-yellow-600'></FaStar></p>
                    <small>I Actually really appriciate your hospital environment and also your hospital.
                        The behavour of all the nurse and doctor are so much good.Best hospital
                        I have ever seen before.</small>
                </div>
                <div className=" bg-slate-500 flex mt-4">
                <Image
 src="https://i.ibb.co/hdNntX3/beautiful-gril-spring-portrait-picture-csp47509216.webp"
 width={60} // Use larger dimensions
 height={60} // Use larger dimensions
 alt="Slide 1"
 className="rounded-full"
/>
<h4>Neyna Rahman</h4>
                </div>
            </div>
</SwiperSlide>

      </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Testmonial;