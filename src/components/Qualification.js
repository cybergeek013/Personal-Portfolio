import React, { useState } from "react";
import "./Qualification.css";
import {FaUserGraduate} from "react-icons/fa";
import {AiFillFund} from "react-icons/ai";


const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="section bg-[#0a192f] text-gray-300">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className={
              toggleState === 1
                ? "qualification_button qualification_active button--flex"
                : "qualification__button button--flex"
            }
            
          >
          </div>
          <div className="flex flex-row justify-between">
            <div>
              <button onClick={() => toggleTab(1)} className=" hover:bg-cyan-500 text-white font-bold py-4 px-4 hover:border-cyan-500 px-4 py-3 my-8 mx-auto flex items-center rounded-md "><FaUserGraduate size={20}/>Education</button>
            </div>
            <div>
              <button onClick={() => toggleTab(2)} className="hover:bg-cyan-500 text-white font-bold py-4 px-4 hover:border-cyan-500 px-4 py-3 my-8 mx-auto flex items-center rounded-md"><AiFillFund size={20} />Experience</button>
            </div>
          </div>

          <div className={
              toggleState === 1
                ? "qualification_button qualification_active button--flex"
                : "qualification__button button--flex"
            }
          >
          </div>
          
        </div>

        <div className="qualification__sections">
          <div className={
              toggleState === 1
                ? "qualification_button qualificationcontent qualification_content-active"
                : "qualification__content"
            }>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title"> Parul University</h3>
                <span className="qualification__grades">
                  8.42 CPI
                </span>
                <br />
                <span className="qualification__subtitle">
                  B-Tech in CSE <br />Vadodara, Gujarat, India
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2020 - Present
                </div>
                
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Angels School</h3>
                <span className="qualification__grades">
                  52.61 %
                </span>
                <br />
                <span className="qualification__subtitle">
                  12th Grade (PCM) <br /> Deesa, Gujarat, India
                </span>

                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2019-2020
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Angels School</h3>
                <span className="qualification__grades">
                  66.16 %
                </span>
                <span className="qualification__subtitle">
                10th Grade <br /> Deesa, Gujarat, India
                </span>

                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2017 - 2018
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>

          <div className={
              toggleState === 2
                ? "qualification_button qualificationcontent qualification_content-active"
                : "qualification__content"
            }>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Cyber security trainee/intern</h3>
                <span className="qualification__subtitle">
                  1Stop
                </span>

                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Oct'22 Nov'22
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Campus Ambassador</h3>
                <span className="qualification__subtitle">Coding Ninjas</span>

                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Feb'22 - Sept'22
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};

export default Qualification;