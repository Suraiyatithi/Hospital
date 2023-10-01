import Link from "next/link";
import Image from 'next/image';
import { FaArrowRight, FaBeer, FaClock, FaFacebook, FaInstagram, FaLocationArrow, FaPhoneAlt, FaSearch, FaShoppingBasket, FaWhatsapp } from "react-icons/fa";
import Marquee from "react-fast-marquee";

// const navLinks=[
//     {
//         path:'/',
//     title:"Home"    
//     },
//     {
//         path:"/about",
//         title:"About"
//     },
//     {
//         path:"/blog",
//         title:"Blog"
//     }
// ]

const Navbar = () => {
    return (
     <nav className=" pl-10 pe-10 pt-3 ">
      <Marquee>
         <div className="flex flex-col  items-center justify-center lg:flex-row lg:justify-between pt-2 pl-5 pr-5 lg:pl-10 lg:pr-10 pb-2 ">
            <div className="grid sm:grid-cols-1 lg:grid-cols-2 ">
                <p className="flex me-10"><FaLocationArrow  className="text-blue-300 text-2xl"></FaLocationArrow> 12/134 Gulshan,Dhaka-1214,Bangladesh </p>
                <p className="flex"><FaClock  className="text-blue-300 text-2xl"></FaClock> Mon - Sat 8.00 - 18.00. Sunday CLOSED</p>
            </div>
            <div className="flex">
               <h1 className="mr-8 text-2xl text-blue-300"> <FaFacebook></FaFacebook></h1>
               <h1  className="mr-8 text-2xl text-blue-300"> <FaPhoneAlt></FaPhoneAlt></h1>
                <h1  className=" text-2xl text-green-700"><FaWhatsapp></FaWhatsapp></h1>
            </div>
         </div>
         </Marquee>
    <div className="navbar bg-base-200 border border-blue-200 rounded-full p-2  ml-10 mr-10 mb-10">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a href="/">Home</a></li>
        <li>
          <a href="">Page</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><Link href={"/about"}>About</Link></li>
      <li><Link href={"/doctor"}>Doctor</Link></li>
      <li><Link href={"/department"}>Department</Link></li>
      <li><Link href={"/blog"}>Blog</Link></li>
      <li><Link href={"/login"}>Login</Link></li>
        <li><FaSearch></FaSearch></li>
      <li><FaShoppingBasket></FaShoppingBasket></li>
        <li>     <a className="btn bg-blue-300 text-white">Appointment</a></li>
      </ul>
    </div>
    <Image src="https://i.ibb.co/L8CpkTG/heart-5217951.png" alt="" 
       width={50} // Use larger dimensions
       height={50} // Use larger dimensions
    />
    <a className="btn btn-ghost normal-case text-blue-300 text-3xl">Madinova</a>
  {/* <div> <p className="text-small">MEDICAL HEALTH SOLLUTION</p></div> */}
   
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {/* <li><Link href={"/"}>Home</Link></li> */}
      <li><a href="/">Home</a></li>
      <li tabIndex={0}>
        <details>
          <summary>Page</summary>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li><Link href={"/about"}>About</Link></li>
      <li><Link href={"/doctor"}>Doctor</Link></li>
      <li><Link href={"/department"}>Department</Link></li>
      <li><Link href={"/blog"}>Blog</Link></li>
      <li><Link href={"/login"}>Login</Link></li>
      <li className="text-blue-300 text-xl"><a href=""><FaSearch></FaSearch></a></li>
      <li  className="text-blue-300 text-xl"><a href=""><FaShoppingBasket></FaShoppingBasket></a></li>
  
    </ul>
  </div>
  <div className="  hidden sm:block navbar-end">
   <a className="btn ml-12 bg-blue-300 text-white"> Make Appointment <FaArrowRight></FaArrowRight></a>
  </div>
</div>
    
     </nav>
    );
};

export default Navbar;