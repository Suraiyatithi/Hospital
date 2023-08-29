// import React from 'react';
// import Image from 'next/image'
// const Appointment = () => {
//     return (
//         <div className='bg-blue-700 p-8 mt-11 relative text-white'>
//            <div className="grid grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 md:grid-cols-2">
       
//             <div className=" absolute  inset-0 z-10">
//             <Image
//  src="https://i.ibb.co/SNDc2km/purepng-com-doctorsdoctorsdoctors-and-nursesa-qualified-practitioner-of-medicine-aclinicianmedical-p.png"
//  width={600} // Use larger dimensions
//  height={600} // Use larger dimensions
//  alt="Slide 1"
// />
//             </div>
//             <div className="">
//             <h1 className='text-lg mb-7'>NEED A DOCTOR FOR CHECK-UP?</h1>
// <p className='text-6xl mb-3'>Just Make an Appointment</p>
// <p className='text-6xl mb-10'>and You’re Done!</p>
// <p className='text-2xl mb-6'>Get Your Quote or Call:</p>
// <p className='text-2xl'>(0080) 123-453-789</p>

//             </div>
//             </div> 
//         </div>
//     );
// };

// export default Appointment;
import React from 'react';
import Image from 'next/image';
import { FaBrain, FaClinicMedical, FaUserAlt } from 'react-icons/fa';

const Appointment = () => {
  return (
    <div className='bg-blue-700 p-8 mt-20 relative text-white mb-16'>
      <div className="grid  sm:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-8">
        <div className="">
          <h1 className='text-lg mb-7'>NEED A DOCTOR FOR CHECK-UP?</h1>
          <p className='text-4xl font-bold mb-3'>Just Make an Appointment</p>
          <p className='text-4xl font-bold mb-10'>and You’re Done!</p>
          <p className='text-2xl mb-12'>Get Your Quote or Call:</p>
          <button className='btn bg-base-800 mb-12'>Get an Appointment</button>
          <p className='text-5xl font-bold mb-12'>(0080) 123-453-789</p>
      
        </div>
        <div className="relative  flex justify-center items-start">
          <div className="absolute -top-8 sm:display-none transform -translate-x-1/2 -translate-y-1/2 z-10 -right-56   w-full h-full">
            <Image
              src="https://i.ibb.co/SNDc2km/purepng-com-doctorsdoctorsdoctors-and-nursesa-qualified-practitioner-of-medicine-aclinicianmedical-p.png"
              width={560} // Use larger dimensions
              height={560} // Use larger dimensions
              alt="Slide 1"
            />
          </div>
         </div>
      </div> 
      <div className="text-black absolute   transform -translate-x-1/5 -translate-y-1/5 z-5   w-full h-full">
        <div className="grid sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
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

export default Appointment;
