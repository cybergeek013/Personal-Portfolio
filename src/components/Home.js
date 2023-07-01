import React, { useState , useEffect} from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from "react-scroll";
import AboutMeHome from '../assets/AboutmeHome.png'
import "../components/Home.css";

const Home = () => {
   
    const [loopNum, setloopNum] = useState(0);
    const [isDeleting, setisDeleting] = useState(false);
    const toRotate = [ "Web Developer", "Problem Solver", "Learner" ];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(100 -  Math.random() * 20);
    const period = 500;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        },delta)

        return () => { clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if(isDeleting){
            setDelta(prevDelta => prevDelta/2)
        }

        if(!isDeleting && updatedText === fullText){
            setisDeleting(true);
            setDelta(period);
        }else if(isDeleting && updatedText === ''){
            setisDeleting(false);
            setloopNum(loopNum + 1);
            setDelta(150);
        }
    }


  return (
    <div
    name="home"
    className="h-screen w-full bg-[#0a192f]"
  >
    <div className="max-w-screen-lg mx-auto flex flex-col flex-col-reverse items-center justify-center h-full px-1 md:flex-row">
      <div className="flex flex-col justify-center h-full">
        <h1 className="text-4xl sm:text-7xl font-bold text-white">Deep Panchal</h1>
        <br/>
        <h5 className="text-2xl sm:text-5xl font-bold text-white">
          I'm a <span className='text-cyan-500'>{text}</span>
        </h5>
        <p className="text-gray-200 py-4 max-w-4xl">
            A final year CSE Student, Web Development Enthusiast, Problem solver in DSA, MERN stack learner.
          I love to work on web application using technologies.
        </p>
        <div>
          <div><Link
            to="about"
            smooth
            duration={500}
            className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
          >
            About Me
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight size={25} className="ml-3" />
            </span>
          </Link></div>
          
        </div>
      </div>
      <div className='lg:w-3/6 resp-homeimg'>
        <img src={AboutMeHome} alt="my profile" className="rounded-xl mx-auto w-3/3 w-full float-right pointer-events-none"/>
      </div>
    </div>
  </div>
  );
};

export default Home;