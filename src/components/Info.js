import React, { useState , useEffect} from 'react'
import "./About.css";
import { Link } from 'react-scroll';

const Info = () => {

  return (
    <div className="about__info grid">
      
      <div className="about__box shadow-md shadow-[#040c16]">
      <i className="bx bx-briefcase-alt about__icon"></i>
        <h3 className="about__title">Completed</h3>
        <Link to='projects' smooth={true} duration={500} className="about__subtitle cursor-pointer">
            <div className='text-white font-bold text-2xl'>4+</div>Projects
          </Link>
      </div>
      <div className="about__box shadow-md shadow-[#040c16]">
      <i className="bx bxs-check-square about__icon"></i>
        <h3 className="about__title">Solved</h3>
        <span className="about__subtitle"><div className='text-white font-bold text-2xl'>200+</div>Coding Problems</span>
      </div>
    </div>
  )
}

export default Info;