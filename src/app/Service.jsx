import React from 'react';
import Image from 'next/image'
import { FaAmbulance, FaBuilding, FaClinicMedical, FaFirstAid, FaHandHoldingMedical, FaHeartbeat } from 'react-icons/fa';

const Service = () => {
    return (
        <div className='mt-12 text-center'>
            <div className="text-center">
            <h1 className='text-base-400'>OUR SERVICES</h1>
           
           <h1 className='text-4xl '>We Care Our Patients.</h1>
     <div className="text-center">
     <Image
 src="https://i.ibb.co/JFKjPCT/electrocardiogram-8011509.png"
 width={80} // Use larger dimensions
 height={80} // Use larger dimensions
 alt="Slide 1"
/>
     </div>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <div className="">
                <div className="card card-compact w-96 bg-base-100 ">
  <figure> <FaHeartbeat className='text-blue-400 text-7xl'></FaHeartbeat> </figure>
  <div className="card-body">
    <h2 className=" text-center   text-lg font-bold">Heart Cheak</h2>
    <p>We offer extensive medical procedures to outbound & inbound 
        patients what it is and we are very proud achievement staff.</p>
 
  </div>
</div>
                </div>
                <div className="">
                <div className="card card-compact w-96 bg-base-100 ">
  <figure> <FaHandHoldingMedical className='text-blue-400 text-7xl'></FaHandHoldingMedical> </figure>
  <div className="card-body">
    <h2 className=" text-center text-lg font-bold">Operation Theater</h2>
    <p>We offer extensive medical procedures to outbound & inbound 
        patients what it is and we are very proud achievement staff.</p>
 
  </div>
</div>
                </div>
                <div className="">
                <div className="card card-compact w-96 bg-base-100 ">
  <figure> <FaClinicMedical className='text-blue-400 text-7xl'></FaClinicMedical> </figure>
  <div className="card-body">
    <h2 className=" text-center  text-lg font-bold">Pharmacy Support</h2>
    <p>We offer extensive medical procedures to outbound & inbound 
        patients what it is and we are very proud achievement staff.</p>
 
  </div>
</div>
                </div>
                <div className="">
                <div className="card card-compact w-96 bg-base-100 ">
  <figure> <FaAmbulance className='text-blue-400 text-7xl'></FaAmbulance> </figure>
  <div className="card-body">
    <h2 className=" text-center  text-lg font-bold">Ambulance Support</h2>
    <p>We offer extensive medical procedures to outbound & inbound 
        patients what it is and we are very proud achievement staff.</p>
 
  </div>
</div>
                </div>
                <div className="">
                <div className="card card-compact w-96 bg-base-100 ">
  <figure><FaBuilding className='text-blue-400 text-7xl'></FaBuilding></figure>
  <div className="card-body">
    <h2 className=" text-center  text-lg font-bold">Lat Tests</h2>
    <p>We offer extensive medical procedures to outbound & inbound 
        patients what it is and we are very proud achievement staff.</p>
 
  </div>
</div>
                </div>
                <div className="">
                <div className="card card-compact w-96 bg-base-100 ">
  <figure> <FaFirstAid className='text-blue-400 text-7xl'></FaFirstAid> </figure>
  <div className="card-body">
    <h2 className=" text-center  text-lg font-bold">Intensive Care</h2>
    <p>We offer extensive medical procedures to outbound & inbound 
        patients what it is and we are very proud achievement staff.</p>
 
  </div>
</div>
                </div>
            </div>
        </div>
    );
};

export default Service;