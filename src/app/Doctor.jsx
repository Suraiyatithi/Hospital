import React from 'react';
import Image from 'next/image'

const Doctor = () => {
    return (
        <div className='mt-20'>

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
            <div className="">

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
                </div> 
        </div>
    );
};

export default Doctor;