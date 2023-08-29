'use client'
// import React from "react";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import Image from 'next/image'

// const CarouselComponent = () => {
//   return (
//     <Carousel>
//       <div>
//         <Image src="https://i.ibb.co/6RQzTT5/inspired-barefooted-girl-glasses-standing-one-leg-studio-indoor-photo-enthusiastic-young-woman-check.jpg" 
//           width={500}
//       height={500}
//         alt="Slide 1" />
//       </div>
//       <div>
//         <Image src="https://i.ibb.co/pdN1v7h/portrait-excited-happy-shopaholic-woman-holding-shopping-bags-showing-plastic-credit-card-smi.jpg"
//           width={500}
//       height={500} alt="Slide 2" />
//       </div>
//       <div>
//         <Image src="https://i.ibb.co/fG3Mf1S/happy-man-looking-surprised-shopping-bags-buying-souvenirs-vacation-standing-yellow-backg.jpg" 
//           width={500}
//       height={500}alt="Slide 3" />
//       </div>
//     </Carousel>
//   );
// };

// export default CarouselComponent;
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from 'next/image'
import { FaBrain, FaClinicMedical, FaUserAlt } from "react-icons/fa";

const CarouselComponent = () => {
  return (
  <div  className="relative">
      {/* <Carousel style={{maxHeight:"1200px"}} className="relative">
      <div>
        <Image
          src="https://i.ibb.co/TYZm5yd/healthcare-workers-medicine-insurance-covid-pandemic-concept-dreamy-young-talented-doctor-whi.jpg"
          width={1700} // Use larger dimensions
          height={1400} // Use larger dimensions
          alt="Slide 1"
        />
      </div>
      <div>
        <Image
          src="https://i.ibb.co/5stz07S/image-woman-doctor-listening-patient-lungs-with-stethoscope-doing-medical-checkup-clinic-stand.jpg"
          width={1700} // Use larger dimensions
          height={1400} // Use larger dimensions
          alt="Slide 2"
        />
      </div>
      <div>
        <Image
          src="https://i.ibb.co/D44WQLY/disappointed-young-doctor-female-physician-pointing-fingers-down-grimacing-with-dislike-disappro.jpg"
          width={1700} // Use larger dimensions
          height={1400} // Use larger dimensions
          alt="Slide 3"
        />
      </div>
    </Carousel> */}
    <Carousel style={{maxHeight: "1200px"}} className="relative ">
  <div className="carousel-slide">
    <div className="slide-image">
      <Image
        src="https://i.ibb.co/TYZm5yd/healthcare-workers-medicine-insurance-covid-pandemic-concept-dreamy-young-talented-doctor-whi.jpg"
        width={1700}
        height={1400}
        alt="Slide 1"
      />
    </div>
    <div className="slide-text slide-overlay left">
      <p className="text-xl font-bold text-left pl-10 pb-5">Welcome to our medical Care Center</p>
      <h1 className="text-5xl font-bold text-left pb-5 pl-10">We take care our Valuable <br /> Patients health</h1>
      <p className="text-lg text-left pl-10">I Realize That becoming a doctor i can help all <br /> the people of my country,Also return them their happiness.</p>
  <p className="text-left pl-10 pt-10"><button className="btn bg-blue-300 text-white">About Us</button> &nbsp; &nbsp; <button className="btn bg-blue-300 text-white">Our Service</button></p>
    </div>
  </div>
  <div className="carousel-slide">
    <div className="slide-image">
      <Image
        src="https://i.ibb.co/5stz07S/image-woman-doctor-listening-patient-lungs-with-stethoscope-doing-medical-checkup-clinic-stand.jpg"
        width={1700}
        height={1400}
        alt="Slide 2"
      />
    </div>
    <div className="slide-text slide-overlay left">
      <p className="text-xl font-bold text-left pl-10 pb-5">Welcome to our medical Care Center</p>
      <h1 className="text-5xl font-bold text-left pb-5 pl-10">We take care our Valuable <br /> Patients health</h1>
      <p className="text-lg text-left pl-10">I Realize That becoming a doctor i can help all <br /> the people of my country,Also return them their happiness.</p>
  <p className="text-left pl-10 pt-10"><button className="btn bg-blue-300 text-white">About Us</button> &nbsp; &nbsp; <button className="btn bg-blue-300 text-white">Our Service</button></p>
    </div>
  </div>
  <div className="carousel-slide">
    <div className="slide-image">
      <Image
        src="https://i.ibb.co/D44WQLY/disappointed-young-doctor-female-physician-pointing-fingers-down-grimacing-with-dislike-disappro.jpg"
        width={1700}
        height={1400}
        alt="Slide 3"
      />
    </div>
    <div className="slide-text slide-overlay left">
      <p className="text-xl font-bold text-left pl-10 pb-5">Welcome to our medical Care Center</p>
      <h1 className="text-5xl font-bold text-left pb-5 pl-10">We take care our Valuable <br /> Patients health</h1>
      <p className="text-lg text-left pl-10">I Realize That becoming a doctor i can help all <br /> the people of my country,Also return them their happiness.</p>
  <p className="text-left pl-10 pt-10"><button className="btn bg-blue-300 text-white">About Us</button> &nbsp; &nbsp; <button className="btn bg-blue-300 text-white">Our Service</button></p>
    </div>
  </div>
</Carousel>

    <div className="text-black absolute top-1/5 left-1/2  transform -translate-x-1/2 -translate-y-1/2 z-5   w-full h-full">
        <div className="grid  sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-2 ">
          <div className="">
          <div className="card w-96 bg-base-100">
  <figure className="px-10 pt-10">
    {/* <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" /> */}
   <h1 className='text-blue-300 text-7xl'><FaBrain></FaBrain></h1>
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Years of experience</h2>
    <p className='text-3xl'>30+</p>

  </div>
</div>
          </div>
          <div className="">
          <div className="card w-96 bg-base-100">
  <figure className="px-10 pt-10">
    {/* <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" /> */}
   <h1 className='text-blue-300 text-7xl'><FaUserAlt></FaUserAlt></h1>
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Happy Patients</h2>
    <p className='text-3xl'>40K+</p>

  </div>
</div>
          </div>
          <div className="">
          <div className="card w-96 bg-base-100">
  <figure className="px-10 pt-10">
    {/* <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" /> */}
   <h1 className='text-blue-300 text-7xl'><FaClinicMedical></FaClinicMedical></h1>
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Medical Speacialized</h2>
    <p className='text-3xl'>100+</p>

  </div>
</div>
          </div>
        </div>
      </div>
  </div>
  );
};

export default CarouselComponent;
