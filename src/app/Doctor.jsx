"use client"
import React, { useState } from 'react';
import Image from 'next/image'
import { FaArrowLeft, FaArrowRight, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const Doctor = () => {
    const images = [
        "https://i.ibb.co/pWRVX1P/353-3533165-young-doctor-transpare-young-doctor.jpg",
        "https://i.ibb.co/GkMzT2D/30-304043-female-doctor-transparent-background.jpg" ,
        "https://i.ibb.co/j5V29mr/7-74994-free-png-doctor-png-images-transparent-doctor-images.jpg" ,
        "https://i.ibb.co/KD001wh/455-4554771-doctor-png-female-doctor-transparent-background-png-download.png",
        "https://i.ibb.co/KKYY5nV/347-3474591-doctors-22x-stock-photography-hd-png-download.png"  ,

"https://i.ibb.co/x39gX4F/194-1943739-indian-doctor-hd-png-download.png" ,
"https://i.ibb.co/SNDc2km/purepng-com-doctorsdoctorsdoctors-and-nursesa-qualified-practitioner-of-medicine-aclinicianmedical-p.png"
        
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

  return (
        <div className=' relative mt-20'>

<div className="text-center mb-10">
            <h1 className='text-base-400'>OUR Doctor</h1>
           
           <h1 className='text-4xl '>Let's know about Our Speacial Doctor</h1>

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
            {/* <div className="">

            <div className="carousel carousel-center rounded-box">
  <div className="carousel-item">
    <Image src="https://i.ibb.co/pWRVX1P/353-3533165-young-doctor-transpare-young-doctor.jpg"  
       width={300} // Use larger dimensions
       height={300} // Use larger dimensions
    alt="Pizza" />
  </div> 
  <div className="carousel-item">
    <Image src="https://i.ibb.co/GkMzT2D/30-304043-female-doctor-transparent-background.jpg" 
     width={300} // Use larger dimensions
     height={300} // Use larger dimensions
     alt="Pizza" />
  </div> 
  <div className="carousel-item">
    <Image src="https://i.ibb.co/j5V29mr/7-74994-free-png-doctor-png-images-transparent-doctor-images.jpg" 
     width={300} // Use larger dimensions
     height={300} // Use larger dimensions
    alt="Pizza" />
  </div> 
  <div className="carousel-item">
    <Image src="https://i.ibb.co/KD001wh/455-4554771-doctor-png-female-doctor-transparent-background-png-download.png"  
     width={300} // Use larger dimensions
     height={300} // Use larger dimensions
    alt="Pizza" />
  </div> 
  <div className="carousel-item">
    <Image src="https://i.ibb.co/KKYY5nV/347-3474591-doctors-22x-stock-photography-hd-png-download.png"  
     width={300} // Use larger dimensions
     height={300} // Use larger dimensions
    alt="Pizza" />
  </div> 
  <div className="carousel-item">
    <Image src="https://i.ibb.co/x39gX4F/194-1943739-indian-doctor-hd-png-download.png" 
     width={300} // Use larger dimensions
     height={300} // Use larger dimensions
    alt="Pizza" />
  </div> 
  <div className="carousel-item">
    <Image src="https://i.ibb.co/SNDc2km/purepng-com-doctorsdoctorsdoctors-and-nursesa-qualified-practitioner-of-medicine-aclinicianmedical-p.png"
     width={300} // Use larger dimensions
     height={300} // Use larger dimensions
    alt="Pizza" />
  </div>
</div>
                </div>  */}

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
        </div>
    );
};

export default Doctor;