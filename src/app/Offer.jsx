"use client"
import React, { useEffect }  from 'react';
import Image from 'next/image'
import { FaArrowAltCircleRight } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Offer = () => {
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
  
    const images = [
        "https://i.ibb.co/pWRVX1P/353-3533165-young-doctor-transpare-young-doctor.jpg",
        "https://i.ibb.co/GkMzT2D/30-304043-female-doctor-transparent-background.jpg" ,
        "https://i.ibb.co/j5V29mr/7-74994-free-png-doctor-png-images-transparent-doctor-images.jpg" ,
        "https://i.ibb.co/KD001wh/455-4554771-doctor-png-female-doctor-transparent-background-png-download.png",
        "https://i.ibb.co/KKYY5nV/347-3474591-doctors-22x-stock-photography-hd-png-download.png"  ,

"https://i.ibb.co/x39gX4F/194-1943739-indian-doctor-hd-png-download.png" ,
"https://i.ibb.co/SNDc2km/purepng-com-doctorsdoctorsdoctors-and-nursesa-qualified-practitioner-of-medicine-aclinicianmedical-p.png"
        
      ];
    return (
     
        <div className='grid  sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 p-7'>
               <div className="">
               <div className=" mb-10">
            <h1 className='text-base-400'data-aos="fade-right">we Offer</h1>
           
           <h1 className='text-4xl 'data-aos="fade-right">What we Care About and Our Services</h1>

       <div className="">
      
        <div className="">
     <Image
 src="https://i.ibb.co/JFKjPCT/electrocardiogram-8011509.png"
 width={80} // Use larger dimensions
 height={80} // Use larger dimensions
 alt="Slide 1"
/>
     </div>
       </div>
       <p data-aos="fade-right">With a commitment to excellence and patient-centered care, we offer a wide range of medical services and treatments designed to meet the diverse needs of our patients. Our team of experienced medical professionals, advanced technology, and state-of-the-art facilities ensure that you receive the highest quality care in a comfortable and welcoming environment.</p>
            </div>
            <div class="divide-y divide-dashed hover:divide-solid">
                <p className='flex p-3'data-aos="fade-right"><FaArrowAltCircleRight></FaArrowAltCircleRight>Eye Care solution</p>
                <p className='flex p-3'data-aos="fade-right"><FaArrowAltCircleRight></FaArrowAltCircleRight>Delivary Service</p>
                <p className='flex p-3'data-aos="fade-right"><FaArrowAltCircleRight></FaArrowAltCircleRight>Blood Test and X-ray</p>
                <p className='flex p-3'data-aos="fade-right"><FaArrowAltCircleRight></FaArrowAltCircleRight>Heart Surgery</p>
                <p className='flex p-3'data-aos="fade-right"><FaArrowAltCircleRight></FaArrowAltCircleRight>Medicine and drug Service</p>
                <p className='flex p-3'data-aos="fade-right"><FaArrowAltCircleRight></FaArrowAltCircleRight>Child care solution</p>
            </div>
               </div>
               <div className="">
              
               <h1 className='text-4xl mt-7'data-aos="fade-left">Hospital Department</h1>
               <div className="">
     <Image
 src="https://i.ibb.co/JFKjPCT/electrocardiogram-8011509.png"
 width={80} // Use larger dimensions
 height={80} // Use larger dimensions
 alt="Slide 1"
/>
     </div>
               <div className="">
               <div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" checked="checked" /> 
  <div className="collapse-title text-xl font-medium" data-aos="fade-left">
    Emergency And Critical Case
  </div>
  <div className="collapse-content"> 
    <div className="grid  sm:grid-cols-1 lg:grid-cols-2">
        <div className="">
        <Image
 src="https://i.ibb.co/x39gX4F/194-1943739-indian-doctor-hd-png-download.png" 
 width={280} // Use larger dimensions
 height={280} // Use larger dimensions
 alt="Slide 1"
/>
        </div>
        <div className="">
            <p> we are dedicated to providing comprehensive and compassionate healthcare services to our community.
                 With a commitment to excellence and patient-centered care,
                 we offer a wide range of medical services and treatments designed to meet the diverse needs of our patients.</p>
            <small>LEARN MORE</small>
        </div>
    </div>
  </div>
</div>
<div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" /> 
  <div className="collapse-title text-xl font-medium"data-aos="fade-left">
    Delivary services
  </div>
  <div className="collapse-content"> 
  <div className="grid  sm:grid-cols-1 lg:grid-cols-2">
        <div className="">
        <Image
 src="https://i.ibb.co/pWRVX1P/353-3533165-young-doctor-transpare-young-doctor.jpg"
 width={280} // Use larger dimensions
 height={280} // Use larger dimensions
 alt="Slide 1"
/>
        </div>
        <div className="">
            <p> we are dedicated to providing comprehensive and compassionate healthcare services to our community. 
                With a commitment to excellence and patient-centered care, we offer a wide range of
                 medical services and treatments designed to meet the diverse needs of our patients.</p>
            <small>LEARN MORE</small>
        </div>
        </div>
  </div>
</div>
<div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" /> 
  <div className="collapse-title text-xl font-medium"data-aos="fade-left">
    Heart Surgery
  </div>
  <div className="collapse-content"> 
  <div className="grid sm:grid-cols-1 lg:grid-cols-2">
        <div className="">
        <Image
 src=   "https://i.ibb.co/KD001wh/455-4554771-doctor-png-female-doctor-transparent-background-png-download.png"
 width={280} // Use larger dimensions
 height={280} // Use larger dimensions
 alt="Slide 1"
/>
        </div>
        <div className="">
            <p> we are dedicated to providing comprehensive and compassionate healthcare services to our community. 
                With a commitment to excellence and patient-centered care,
                 we offer a wide range of medical services and treatments designed to meet the diverse needs of our patients.</p>
            <small>LEARN MORE</small>
        </div>
        </div>
  </div>
</div>
<div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" /> 
  <div className="collapse-title text-xl font-medium"data-aos="fade-left">
Blood Text And X-Ray or Other Tests
  </div>
  <div className="collapse-content"> 
  <div className="grid  sm:grid-cols-1 lg:grid-cols-2">
        <div className="">
        <Image
 src=  "https://i.ibb.co/j5V29mr/7-74994-free-png-doctor-png-images-transparent-doctor-images.jpg" 
 width={280} // Use larger dimensions
 height={280} // Use larger dimensions
 alt="Slide 1"
/>
        </div>
        <div className="">
            <p> we are dedicated to providing comprehensive and compassionate healthcare services to our community. 
                With a commitment to excellence and patient-centered care, 
                we offer a wide range of medical services and treatments designed to meet the diverse needs of our patients.</p>
            <small>LEARN MORE</small>
        </div>
        </div>
  </div>
</div>
<div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" /> 
  <div className="collapse-title text-xl font-medium"data-aos="fade-left">
  Child Care solution
  </div>
  <div className="collapse-content"> 
  <div className="grid  sm:grid-cols-1 lg:grid-cols-2">
        <div className="">
        <Image
 src=  "https://i.ibb.co/KKYY5nV/347-3474591-doctors-22x-stock-photography-hd-png-download.png"
 width={280} // Use larger dimensions
 height={280} // Use larger dimensions
 alt="Slide 1"
/>
        </div>
        <div className="">
            <p> we are dedicated to providing comprehensive and compassionate healthcare services to our community. 
                With a commitment to excellence and patient-centered care,
                 we offer a wide range of medical services and treatments designed to meet the diverse needs of our patients.</p>
            <small>LEARN MORE</small>
        </div>
        </div>
  </div>
</div>
               </div>
               </div>
           

        </div>
    );
};

export default Offer;