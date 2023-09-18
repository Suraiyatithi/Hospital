"use client"
import React,{useEffect} from 'react';
import { FaFacebook, FaHeadphones, FaLinkedin, FaPhoneAlt, FaSearchLocation, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Footer = () => {
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
        // <div className='bg-blue-950 text-white mt-96 '> style={{ backgroundImage: 'url("https://i.ibb.co/27fKSjf/istockphoto-865577704-170667a.webp")', backgroundColor: 'rgba(0, 0, 0, 0.7)'}}
        <div 
        className="bg-blue-700 footerbg  relative mt-12 text-white  h-full"
       >
         
            <div className=" p-10">
            <div className="grid sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
                <div className="flex p-11">
                    <button className='btn btn-circle bg-blue-300 text-7xl text-white'data-aos="fade-right"><FaSearchLocation></FaSearchLocation></button>
               <div className="">
                <p data-aos="fade-right">office Address</p>
               <h1 className='text-xl'data-aos="fade-right">12/134,Gulshan,Dhaka-1214,Bangladesh</h1>
               </div>
                </div>
                <div className="flex p-11">
                <button className='btn btn-circle bg-blue-300 text-7xl text-white'data-aos="fade-right"><FaHeadphones></FaHeadphones></button>
             <div className=""data-aos="fade-right">
                <p>24*7 online Support</p>
             <h1 className='text-xl'>madinova12-134@gmail.com</h1>
             </div>
                </div>
                <div className="flex p-11">
                <button className='btn btn-circle bg-blue-300 text-7xl text-white'data-aos="fade-left"><FaPhoneAlt></FaPhoneAlt></button>
             <div className="">
                <p data-aos="fade-left">Contact Us Free</p>
             <h1 className='text-xl'data-aos="fade-left">+880-123-13466-123</h1>
             </div>
                </div>

            </div>
            <div className="divide-y divide-red-50"></div>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <div className="border text-center p-10">
                    <h1 className='text-xl font-bold'data-aos="fade-right">Our Service</h1>
                    
                   <p data-aos="fade-right">- About Us</p>
<p data-aos="fade-right">-Customer</p>
<p data-aos="fade-right">-Service</p>
<p data-aos="fade-right">-Collections</p>
<p data-aos="fade-right">-Best Seller</p>
<p data-aos="fade-right">-Careers</p>
<p data-aos="fade-right">-Privacy Policy</p>
                </div>
                <div className="border border-red-50">
                    <div className="">

                    </div>
                    <p className='text-xl font-bold text-center m-7'data-aos="fade-right"> Sign up to get latest update</p>
                    <div className="flex ">
                    <input type="textarea" placeholder="Type Commad" className="input input-bordered w-full max-w-xs p-2 mb-4 ml-2" /> <button className='btn bg-blue-300'>Add</button>
                    </div>
                    <p className='divide-y divide-red-50'></p>
                    <div className="border border-red-50">
                    <p className='text-xl font-bold text-center'data-aos="fade-right">Follow Us on Social media</p>
                 
                  
                    <h1 className='text-blue-300 flex text-center mx-auto text-4xl p-11'data-aos="fade-right">  <FaFacebook className='text-center'></FaFacebook><FaYoutube></FaYoutube><FaWhatsapp></FaWhatsapp><FaLinkedin></FaLinkedin></h1>
               
               
                    </div> </div>
                <div className="border border-red-50 text-center p-11">
             <h1 className='text-xl font-bold'data-aos="fade-left">   Opening Hours</h1>
<p data-aos="fade-left">Mon - Tues &nbsp; &nbsp; &nbsp;08:00 AM - 05:00PM</p>
<p data-aos="fade-left">Wedne - Thur&nbsp; &nbsp; &nbsp;09:00 AM - 06:00PM</p>
<p data-aos="fade-left">Fri - Sat&nbsp; &nbsp; &nbsp;10:00 AM - 05:00PM</p>
<p data-aos="fade-left">sunday&nbsp; &nbsp; &nbsp;Emergency Only</p>
<p data-aos="fade-left">PersonalMon&nbsp; &nbsp; &nbsp; - 10:00 AM</p>
                </div>
            </div>
            <div className="">
                <p className='text-center'>Copyright © 2020 Doctery All Rights Reserved.</p>
            </div>
            </div>
        </div>
    );
};

export default Footer;