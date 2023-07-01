import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300 resp-skills'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div className=' w-full flex justify-center items-center flex-col mb-7'>
              <p className='text-4xl font-bold inline border-b-4 border-cyan-500 text-center '>Skills</p>
              <p className='py-4 lg:text-2xl pb-0'>I enjoy diving into and learning new things. Here's a list of technologies I've worked with</p>
          </div> 
          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 scroll-skills'>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-100 htmlbtn rounded-md text-white'>
                  <p className='my-4'>HTML</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-100 rounded-md cssbtn text-white'>
                  <p className='my-4'>CSS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-100 rounded-md jsbtn text-white'>
                  <p className='my-4'>JAVASCRIPT</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-100 rounded-md reactbtn text-white'>
                  <p className='my-4'>REACT JS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-100 rounded-md phpbtn text-white'>
                  <p className='my-4'>PHP</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-100 rounded-md sqlbtn text-white'>
                  <p className='my-4'>SQL</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-100 rounded-md cbtn text-white'>
                  <p className='my-4'>C/C++</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-100 rounded-md dsabtn text-white'>
                  <p className='my-4'>DSA</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-100 rounded-md psbtn text-white'>
                  <p className='my-4'>PROBLEM SOLVING</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-100 rounded-md dbmsbtn text-white'>
                  <p className='my-4'>DBMS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-100 rounded-md osbtn text-white'>
                  <p className='my-4'>OPERATING SYSTEM</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-100 rounded-md cnbtn text-white'>
                  <p className='my-4'>COMPUTER NETWORKS</p>
              </div>
              
          </div>
      </div>
    </div>
  );
};
export default Skills;