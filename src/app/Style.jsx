import React from 'react';
import Image from 'next/image'
const Style = () => {
    return (
        <div>
            <div className="grid grid-cols-3 lg:grid-cols-3 sm:grid-cols-1">
                <div className="mt-8">
                <Image className='pt-8'
          src="https://i.ibb.co/80ckz1t/antique-hand-bag-layout-with-place-text-jewellery-background-mockup-banner-fashion-accessories.jpg"
          width={400} // Use larger dimensions
          height={400} // Use larger dimensions
          alt="Slide 1"
        />
           <Image
          src="https://i.ibb.co/MGBZhHC/women-s-red-high-heel-shoes-formal-fashion.jpg"
          width={400} // Use larger dimensions
          height={400} // Use larger dimensions
          alt="Slide 1"
        />
                </div>
                <div className="">
                <Image
          src="https://i.ibb.co/ct3NnQG/portrait-beautiful-stylish-young-woman-with-colorful-flowers-head.jpg"
          width={800} // Use larger dimensions
          height={800} // Use larger dimensions
          alt="Slide 1"
        />
                </div>
                <div className="">
                <Image
          src="https://i.ibb.co/LvSNp9X/beautiful-luxury-necklace-jewelry-stand-neck.jpg"
          width={300} // Use larger dimensions
          height={300} // Use larger dimensions
          alt="Slide 1"
        />
           <Image
          src="https://i.ibb.co/K2tR68g/cosmetic-parts-face-beauty.jpg"
          width={300} // Use larger dimensions
          height={300} // Use larger dimensions
          alt="Slide 1"
        />
                </div>
            </div>
        </div>
    );
};

export default Style;