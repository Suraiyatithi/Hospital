import React from 'react';
import { FaFacebook, FaHeadphones, FaLinkedin, FaPhoneAlt, FaSearchLocation, FaWhatsapp, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        // <div className='bg-blue-950 text-white mt-96 '>
        <div   style={{ backgroundImage: 'url("https://i.ibb.co/5KC0h8r/hexagonal-pattern-technology-circuit-network.jpg" )' }}
        className="bg-cover  relative mt-96 text-white  h-full"
       >
         
            <div className=" p-10">
            <div className="grid sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
                <div className="flex p-11">
                    <button className='btn btn-circle bg-blue-300 text-7xl text-white'><FaSearchLocation></FaSearchLocation></button>
               <div className="">
                <p>office Address</p>
               <h1 className='text-xl'>12/134,Gulshan,Dhaka-1214,Bangladesh</h1>
               </div>
                </div>
                <div className="flex p-11">
                <button className='btn btn-circle bg-blue-300 text-7xl text-white'><FaHeadphones></FaHeadphones></button>
             <div className="">
                <p>24*7 online Support</p>
             <h1 className='text-xl'>madinova12-134@gmail.com</h1>
             </div>
                </div>
                <div className="flex p-11">
                <button className='btn btn-circle bg-blue-300 text-7xl text-white'><FaPhoneAlt></FaPhoneAlt></button>
             <div className="">
                <p>Contact Us Free</p>
             <h1 className='text-xl'>+880-123-13466-123</h1>
             </div>
                </div>

            </div>
            <div className="divide-y divide-red-50"></div>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <div className="border text-center p-10">
                    <h1 className='text-xl font-bold'>Our Service</h1>
                    
                   <p>- About Us</p>
<p>-Customer</p>
<p>-Service</p>
<p>-Collections</p>
<p>-Best Seller</p>
<p>-Careers</p>
<p>-Privacy Policy</p>
                </div>
                <div className="border border-red-50">
                    <div className="">

                    </div>
                    <p className='text-xl font-bold text-center m-7'> Sign up to get latest update</p>
                    <div className="flex ">
                    <input type="textarea" placeholder="Type Commad" className="input input-bordered w-full max-w-xs p-2 mb-4 ml-2" /> <button className='btn bg-blue-300'>Add</button>
                    </div>
                    <p className='divide-y divide-red-50'></p>
                    <div className="border border-red-50">
                    <p className='text-xl font-bold text-center'>Follow Us on Social media</p>
                 
                  
                    <h1 className='text-blue-300 flex text-center mx-auto text-4xl p-11'>  <FaFacebook className='text-center'></FaFacebook><FaYoutube></FaYoutube><FaWhatsapp></FaWhatsapp><FaLinkedin></FaLinkedin></h1>
               
               
                    </div> </div>
                <div className="border border-red-50 text-center p-11">
             <h1 className='text-xl font-bold'>   Opening Hours</h1>
<p>Mon - Tues &nbsp; &nbsp; &nbsp;08:00 AM - 05:00PM</p>
<p>Wedne - Thur&nbsp; &nbsp; &nbsp;09:00 AM - 06:00PM</p>
<p>Fri - Sat&nbsp; &nbsp; &nbsp;10:00 AM - 05:00PM</p>
<p>sunday&nbsp; &nbsp; &nbsp;Emergency Only</p>
<p>PersonalMon&nbsp; &nbsp; &nbsp; - 10:00 AM</p>
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