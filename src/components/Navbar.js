import React, { useState } from 'react'; 
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';
import { SiCodingninjas, SiGeeksforgeeks } from 'react-icons/si';
import { HiOutlineMail } from 'react-icons/hi';
import "./Navbar.css";
import { Link } from 'react-scroll';
import Logo from '../assets/Logo.png';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div>
        <img src={Logo} alt="logo" width={80}/>
      </div>
      {/* menu */}
      <ul className='hidden md:flex gap-x-8'>
        <li>
          <Link to='home' smooth={true} duration={500} className='hover-underline-animation'>
            Home
          </Link>
        </li>
        <li>
          <Link to='about' smooth={true} duration={500} className='hover-underline-animation'>
            About
          </Link>
        </li>
        <li>
          <Link to='skills' smooth={true} duration={500} className='hover-underline-animation'>
            Skills
          </Link>
        </li>
        <li>
          <Link to='projects' smooth={true} duration={500} className='hover-underline-animation'>
            Projects
          </Link>
        </li>
        <li>
          <Link to='contact' smooth={true} duration={500} className='hover-underline-animation'>
            Contact
          </Link>
        </li>
      </ul>
      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='projects' smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0 '>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gradient-to-r from-blue-900 to-blue-600 giveradius'>
            <a
              className='flex justify-between items-center w-full text-gray-100' target='_blank'
              href='https://www.linkedin.com/in/deep-panchal013/'
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gradient-to-r from-neutral-700 to-neutral-800 giveradius'>
            <a
              className='flex justify-between items-center w-full text-gray-100' target='_blank'
              href='https://github.com/cybergeek013' 
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gradient-to-r from-red-600 to-cyan-500 giveradius'>
            <a
              className='flex justify-between items-center w-full text-gray-100' target='_blank'
              href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=GTvVlcRzBlDZWLVSvXzkVFqsMnHmsKCdXRGWtBbZzjTMbXFptDWSJsZZZmQnGnspgkNnDxHxPvSnG"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gradient-to-r from-green-800 to-green-600 giveradius'>
            <a
              className='flex justify-between items-center w-full text-gray-100' target='_blank'
              href='https://auth.geeksforgeeks.org/user/deepanchal777/?utm_source=geeksforgeeks&utm_medium=my_profile&utm_campaign=auth_user'
            >
              GFG <SiGeeksforgeeks size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gradient-to-r from-gray-900 to-orange-500 giveradius'>
            <a
              className='flex justify-between items-center w-full text-gray-100' target='_blank'
              href='https://www.codingninjas.com/codestudio/profile/Deepanchal_013'
            >
              CS <SiCodingninjas size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;