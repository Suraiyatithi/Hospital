'use client'

import React ,{useEffect}from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from 'next/image'
import { FaBrain, FaClinicMedical, FaUserAlt } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
// "https://i.ibb.co/TYZm5yd/healthcare-workers-medicine-insurance-covid-pandemic-concept-dreamy-young-talented-doctor-whi.jpg"
const CarouselComponent = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
  <div  className="relative">
 
    
    <Carousel style={{maxHeight: "1200px"}} className="relative ">
  <div className="carousel-slide relative">
    <div className="slide-image">
      <Image
        src="https://i.ibb.co/yp4VmN5/expressive-young-woman-posing-studio.jpg" 
        width={1700}
        height={1400}
        alt="Slide 1"
      />
    </div>
    <div className="slide-text slide-overlay left">
      <p className="lg:text-xl font-bold text-left pl-10 pb-5"   data-aos="fade-right">Welcome to our medical Care Center</p>
      <h1 className=" sm:text-xl  lg:text-5xl font-bold text-left pb-5 pl-10"  data-aos="fade-right">We take care our Valuable <br /> Patients health</h1>
      <p className="lg:text-lg text-left pl-10"  data-aos="fade-right">I Realize That becoming a doctor i can help all <br /> the people of my country,Also return them their happiness.</p>
  <p className="text-left pl-10 sm:pt-4 lg:pt-10"  data-aos="fade-right"><button className="btn bg-blue-300 text-white">About Us</button> &nbsp; &nbsp; <button className="btn bg-blue-300 text-white">Our Service</button></p>
    </div>
  </div>
  <div className="carousel-slide">
    <div className="slide-image">
      <Image
        src="https://i.ibb.co/Trhk2L0/doctor-standing-with-folder-stethoscope.jpg" 
        width={1700}
        height={1400}
        alt="Slide 2"
      />
    </div>
    <div className="slide-text slide-overlay left" data-aos="fade-right">
      <p className="lg:text-xl font-bold text-left pl-10 pb-5">Welcome to our medical Care Center</p>
      <h1 className="sm:text-xl lg:text-5xl font-bold text-left pb-5 pl-10">We take care our Valuable <br /> Patients health</h1>
      <p className="lg:text-lg text-left pl-10">I Realize That becoming a doctor i can help all <br /> the people of my country,Also return them their happiness.</p>
  <p className="text-left pl-10 sm:pt-4 lg:pt-10 lg:pb-24"><button className="btn bg-blue-300 text-white">About Us</button> &nbsp; &nbsp; <button className="btn bg-blue-300 text-white">Our Service</button></p>
    </div>
  </div>
  <div className="carousel-slide">
    <div className="slide-image">
      <Image
        src="https://i.ibb.co/j4Mxg2N/world-doctors-day-doctor-is-eavesdropping-with-books-stethoscope-medical-coat.jpg"
        width={1700}
        height={1400}
        alt="Slide 3"
      />
    </div>
    <div className="slide-text slide-overlay left" data-aos="fade-right">
      <p className="lg:text-xl font-bold text-left pl-10 pb-5">Welcome to our medical Care Center</p>
      <h1 className="sm:text-xl lg:text-5xl font-bold text-left pb-5 pl-10">We take care our Valuable <br /> Patients health</h1>
      <p className="lg:text-lg text-left pl-10">I Realize That becoming a doctor i can help all <br /> the people of my country,Also return them their happiness.</p>
  <p className="text-left pl-10 sm:pt-4 lg:pt-10 lg:pb-24"><button className="btn bg-blue-300 text-white">About Us</button> &nbsp; &nbsp; <button className="btn bg-blue-300 text-white">Our Service</button></p>
    </div>
  </div>
</Carousel>

    <div className="text-black absolute   transform -translate-x-1/6 -translate-y-1/4 z-5 hidden sm:block  w-full h-full">
        <div className="grid  sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-2 ">
          <div className="hidden sm:block">
          <div className="card bg-blue-600 border shadow-lg w-96 ">
  <figure className="px-10 pt-10">
    {/* <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" /> */}
   <h1 className='text-slate-200 text-7xl'><FaBrain></FaBrain></h1>
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-white">Years of experience</h2>
    <p className='text-3xl text-white font-bold'>30+</p>

  </div>
</div>
          </div>
          <div className="hidden sm:block">
          <div className="card bg-blue-600 border shadow-lg w-96 ">
  <figure className="px-10 pt-10">
    {/* <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" /> */}
   <h1 className='text-slate-200 text-7xl'><FaUserAlt></FaUserAlt></h1>
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-white">Happy Patients</h2>
    <p className='text-3xl text-white font-bold'>40K+</p>

  </div>
</div>
          </div>
          <div className="hidden sm:block">
          <div className="card bg-blue-600 border shadow-lg w-96 ">
  <figure className="px-10 pt-10">
    {/* <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" /> */}
   <h1 className='text-slate-200 text-7xl'><FaClinicMedical></FaClinicMedical></h1>
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-white">Medical Speacialized</h2>
    <p className='text-3xl text-white font-bold'>100+</p>

  </div>
</div>
          </div>
        </div>
      </div>
  </div>
  );
};

export default CarouselComponent;
