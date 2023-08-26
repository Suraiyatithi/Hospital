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

const CarouselComponent = () => {
  return (
    <Carousel>
      <div>
        <Image
          src="https://i.ibb.co/Hhb2FxB/pexels-photo-4586994.jpg"
          width={500} // Use larger dimensions
          height={500} // Use larger dimensions
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
          src="https://i.ibb.co/FmfR6QZ/istockphoto-1477483038-170667a.webp"
          width={1200} // Use larger dimensions
          height={800} // Use larger dimensions
          alt="Slide 3"
        />
      </div>
    </Carousel>
  );
};

export default CarouselComponent;
