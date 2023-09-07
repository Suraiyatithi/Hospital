"use client"
import Image from 'next/image';
import React,{useEffect} from 'react';
import { FaArrowRight } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Gallery = () => {
    return (
        <div>
                <Image 
                     src="https://i.ibb.co/bsSYYf3/medical-people-collection-collage.jpg"
                     width={1400} // Use larger dimensions
                     height={400} // Use larger dimensions
                     alt="Slide 1"
                     data-aos="fade-right"></Image>
        </div>
    );
};

export default Gallery;