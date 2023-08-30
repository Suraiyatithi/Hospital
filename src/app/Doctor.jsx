"use client"
import React, { useState,useEffect } from 'react';
import Image from 'next/image'
import { FaArrowLeft, FaArrowRight, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Doctor = () => {
    const images = [
        "https://i.ibb.co/pWRVX1P/353-3533165-young-doctor-transpare-young-doctor.jpg",
        "https://i.ibb.co/GkMzT2D/30-304043-female-doctor-transparent-background.jpg" ,
        "https://i.ibb.co/j5V29mr/7-74994-free-png-doctor-png-images-transparent-doctor-images.jpg" ,
        "https://i.ibb.co/KD001wh/455-4554771-doctor-png-female-doctor-transparent-background-png-download.png",
        "https://i.ibb.co/KKYY5nV/347-3474591-doctors-22x-stock-photography-hd-png-download.png"  ,

"https://i.ibb.co/x39gX4F/194-1943739-indian-doctor-hd-png-download.png" ,
"https://i.ibb.co/SNDc2km/purepng-com-doctorsdoctorsdoctors-and-nursesa-qualified-practitioner-of-medicine-aclinicianmedical-p.png",
"https://i.ibb.co/513QjHh/gettyimages-479378798-612x612.jpg" 
      ];
    
      const imagesPerPage = 4;
  const [startIndex, setStartIndex] = useState(0);

  const prevSlide = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - imagesPerPage);
    }
  };

  const nextSlide = () => {
    if (startIndex + imagesPerPage < images.length) {
      setStartIndex(startIndex + imagesPerPage);
    }
  };

  const visibleImages = images.slice(startIndex, startIndex + imagesPerPage);
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
    <div
    style={{ backgroundImage: 'url("https://i.ibb.co/KsKCFnn/overhead-view-medical-equipments-pills-isolated-white-backdrop.jpg")' }}
    className="bg-cover relative mt-20 h-full mb-10"
  >

<div className="text-center mb-10">
            <h1 className='text-base-400'data-aos="fade-right">OUR Doctor</h1>
           
           <h1 className='text-4xl 'data-aos="fade-right">Lets know about Our Speacial Doctor</h1>

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
      

                <div className=""> 
                <div className="h-screen carousel-container">
      <div className="carousel carousel-center rounded-box">
        {visibleImages.map((image, index) => (
          <div key={index} className="carousel-item">
            <Image src={image} width={300} height={300} alt={`Doctor ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="flex jusity-between carousel-navigation">
   <div className="mx-auto z-50">

          <button
    onClick={prevSlide}
    className="prev-button absolute top-1/2 right-3/4 transform -translate-x-1/2 -translate-y-1/2 z-10 bg-blue-200 text-white py-2 px-4 rounded-md"
    disabled={startIndex === 0}
  >
  <FaArrowLeft></FaArrowLeft>
  </button>
   </div>
     <div className="mx-auto z-50">
  
          <button
    onClick={nextSlide}
    className=" next-button absolute top-1/2 left-5/6 transform -translate-x-1/2 -translate-y-1/2 z-10 bg-blue-200 text-white py-2 px-4 rounded-md"
    disabled={startIndex + imagesPerPage >= images.length}
  >
 <FaArrowRight></FaArrowRight>
  </button>
     </div>
      </div>
     </div>
        
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 mb-10">
                <div className="">
                    <h1 className='text-3xl text-info'data-aos="fade-right">Subscribe to Newsletter</h1>
                    <p data-aos="fade-right">

Get healthy news and solutions to your problems from our experts!</p>
                </div>
                <div className="">
                <div className="flex">
    <input type="text" placeholder="Enter your Email" className="input input-bordered input-info w-full max-w-xs" />
    <button className="btn bg-blue-300"data-aos="fade-left">Submit</button>
  </div>
                <small data-aos="fade-left">We Respect Your privacy</small>
                </div>
            </div>
        </div>
    );
};

export default Doctor;