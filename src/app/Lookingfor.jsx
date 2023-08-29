import React from 'react';
import { FaHandHoldingMedical, FaResearchgate } from 'react-icons/fa';

const Lookingfor = () => {
    return (
        <div   style={{ backgroundImage: 'url("https://i.ibb.co/5KC0h8r/hexagonal-pattern-technology-circuit-network.jpg" )' }}
        className="bg-cover relative mt-12 p-10 h-full mb-10"
       >
            <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
                <div className="flex">
                    <div className="text-center">
                        <FaHandHoldingMedical className='text-7xl text-blue-300'></FaHandHoldingMedical>
                    </div>
                    <div className="text-center">
                        
<h1 className='text-2xl text-white font-bold'>Looking for professinal & trusted medical healthcare?</h1>
 <h1 className='text-2xl text-blue-300 font-bold'>dont hasitate to contact us.</h1>
                    </div>
                </div>
                <div className="align-items-center mt-4 ml-10 text-center">
<button className='btn bg-blue-300 text-white'>Make Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default Lookingfor;