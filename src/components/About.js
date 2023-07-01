import React from "react";
import "./About.css";
import MyResume from "../assets/MyResume.pdf";
import Info from "./Info";
import me2 from "../assets/me2.png";
import { FaFileDownload } from "react-icons/fa";

const About = () => {
  return (
    <div
      name="about"
      id="about"
      className="w-full h-screen bg-[#0a192f] text-gray-300"
    >
      <div className="lg:flex flex-col justify-center items-center w-full h-full text-center">
        <div className="sm:text-right md:text-center pb-8 pl-4">
          <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
            {" "}
            About{" "}
          </p>
        </div>
        <div className="sm:text-center lg:text-2xl">
          <p>
            Hi. I'm Deep Panchal, nice to meet you. Please take a look around.
          </p>
        </div>
        <section className="about section" id="about">
          <div className="about__container container grid gap-6 md:grid-cols-2">
            <img src={me2} alt="me" className="about__img" />
            <div className="about__data">
              <Info />

              <p className="about__description">
                Hello, I'm a final-year B-Tech student at Parul University studying Computer Science Engineering. My areas of interest are web development, problem solving and UI/UX design. <br /> I'm skilled in web technologies like HTML, CSS, and JS frameworks like React Js, and I'm eager to learn the MERN stack. Having a good problem solving abilities in DSA with C++ and love brainstorming in it.
              </p>

              <a href={MyResume} download="MyResume" target="_blank">
                <button className="group text-blue-500 w-min px-6 py-3 my-2 rounded-md bg-gradient-to-r from-gray-100 to-white cursor-pointer">
                  <div className="flex justify-around">
                    <div className="pr-2">
                      <FaFileDownload size={20} />
                    </div>
                    <div>Resume</div>
                  </div>
                </button>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default About;
