import React from 'react';
import Image from 'next/image'
import Marquee from "react-fast-marquee";

const Support = () => {
    return (
        <div
        style={{ backgroundImage: 'url("https://i.ibb.co/5KC0h8r/hexagonal-pattern-technology-circuit-network.jpg" )' }}
        className="bg-cover background relative mt-20 h-full mb-10" >
    
        <div className='bg'>
        <Marquee>
            <div className="grid sm:grid-cols-2 lg:grid-cols-6 p-8">
             
                <div className="p-4">
                          
     <Image
 src="https://i.ibb.co/jZZ91mC/867-8679578-international-medical-group-unveils-new-logo-and-branding.jpg"
 width={130} // Use larger dimensions
 height={130} // Use larger dimensions
 alt="Slide 1"
 
/>
     
                </div>
                <div className="p-4">
                          
     <Image
 src="https://i.ibb.co/jhnZzVP/37-377989-medical-logo-png-medical-laboratory-logo-png.jpg"
 width={100} // Use larger dimensions
 height={100} // Use larger dimensions
 alt="Slide 1"
/>
     
                </div>
                <div className="p-4">
                          
     <Image
 src="https://i.ibb.co/KzbNV1R/251-2513968-york-medical-group-york-medical-group-logo.jpg"
 width={130} // Use larger dimensions
 height={130} // Use larger dimensions
 alt="Slide 1"
/>
     
                </div>
                <div className="p-4">
                          
     <Image
 src="https://i.ibb.co/2cH8b0s/115-1156995-ccs-medical-ccs-medical-logo.jpg"
 width={130} // Use larger dimensions
 height={130} // Use larger dimensions
 alt="Slide 1"
/>
     
                </div>
                <div className="p-4">
                          
     <Image
 src="https://i.ibb.co/WG0ZXBS/377-3773684-associacao-atletica-vasco-de-tupaciguara-mg-logo-png.jpg"
 width={100} // Use larger dimensions
 height={100} // Use larger dimensions
 alt="Slide 1"
/>
     
                </div>
                <div className="p-4">
                          
     <Image
 src="https://i.ibb.co/t802TQ5/634-6343051-csa-medical-supply-medical-supply-company-logo.jpg" 
 width={130} // Use larger dimensions
 height={130} // Use larger dimensions
 alt="Slide 1"
/>
     
                </div>
             
            
            </div>
            </Marquee>  

            </div>
            
        </div>
    );
};

export default Support;