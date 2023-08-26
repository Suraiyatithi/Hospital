import React from 'react';
import Image from 'next/image'
import { FaArrowCircleRight } from 'react-icons/fa';

const OurMedical = () => {
    return (
        <div>
            <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
                <div className="">
                <Image
          src="https://i.ibb.co/NnfcDQY/3526872.jpg"
          width={600} // Use larger dimensions
          height={700} // Use larger dimensions
          alt="Slide 1"
        />
                </div>
                <div className="">
                    <h1 className='text-base-400'>OUR MEDICAL</h1>
           
                    <h1 className='text-4xl '>We're setting Standards in Research what's more, Clinical Care.</h1>
                    <Image
          src="https://i.ibb.co/JFKjPCT/electrocardiogram-8011509.png"
          width={80} // Use larger dimensions
          height={80} // Use larger dimensions
          alt="Slide 1"
        />
               <p>We provide the most full medical services, so every person could have the pportunity o
                     receive qualitative medical help.

</p>
               <div className="mt-10">
               <p>Our Clinic has grown to provide a world class facility for the treatment of tooth loss, dental cosmetics and bore advanced restorative dentistry. We are among the most qualified implant
                     providers in the AUS with over 30 years of uality training and experience.</p>
               </div>
               <div className=" mt-8">
                <button className='btn btn-info text-white'>Learn more <FaArrowCircleRight></FaArrowCircleRight></button>
               </div>
                </div>
            </div>
        </div>
    );
};

export default OurMedical;