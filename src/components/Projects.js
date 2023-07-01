import React from "react";
import desypher from "../assets/desypherimg.png";
import EyeAssist from "../assets/EyeAssist.png";
import gymimg from "../assets/gymimg.png";
import "./Projects.css";

const Projects = () => {
  return (
    <div
      name="projects"
      id = "projects"
      className="w-full md:h-screen text-gray-300 bg-[#0a192f] resp-project"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8 w-full flex justify-center items-center flex-col">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-500">
            Projects
          </p>
          <p className="py-6 lg:text-2xl">
            Check out some of my most recent projects
          </p>
        </div>
        {/* Container */}

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${EyeAssist})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col">
              <span className=" text-lg font-bold text-cyan-500 tracking-wider">
                EyeAssist App
              </span>
              <p className="text-center text-black">
                Built a platform for blind students to find Scribe to write the exam. <br/> Co-developer: <b>Badal kamli</b>
              </p>
              <div className="pt-8 text-center">
                <a href="https://eye-assist-app-cybergeek013.vercel.app/" target="_blank">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-sky-700 text-white font-bold text-lg hover:bg-[#60a5fa]">
                    View
                  </button>
                </a>
                <a href="https://github.com/cybergeek013/EyeAssist-App" target="_blank">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg  hover:bg-[#56a5ff] ">
                    Repo
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${desypher})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col">
              <span className=" text-lg font-bold text-cyan-500 tracking-wider">
                Desypher
              </span>
              <p className="text-center text-black">
                Built a Encryption/Decryption app using Reactjs
              </p>
              <div className="pt-8 text-center">
                <a href="https://desypher.vercel.app/"
                  target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-sky-700 text-white font-bold text-lg hover:bg-[#60a5fa]">
                    View
                  </button>
                </a>
                <a href="https://github.com/cybergeek013/Desypher"
                  target="_blank">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg  hover:bg-[#56a5ff] ">
                    Repo
                  </button>
                </a>
              </div>
            </div>
          </div>


          <div
            style={{ backgroundImage: `url(${gymimg})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100  flex justify-center items-center flex-col">
              <span className=" text-lg font-bold text-cyan-500 tracking-wider">
                Gym Landing Page
              </span>
              <p className="text-center text-black">
                Built a landing page for a gym using HTML, CSS.
              </p>
              <div className="pt-8 text-center">
                <a
                  href="https://cybergeek013.github.io/LandingPage.github.io/"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-sky-700 text-white font-bold text-lg hover:bg-[#60a5fa]">
                    View
                  </button>
                </a>
                <a
                  href="https://github.com/cybergeek013/LandingPage.github.io"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg  hover:bg-[#56a5ff] ">
                    Repo
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Projects;
