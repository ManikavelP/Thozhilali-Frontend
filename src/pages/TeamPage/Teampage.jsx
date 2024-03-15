import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Member1 from "../../assets/images/image 48.png";
import Shriram from "../../assets/images/IMG20240112124224.jpg";

import { FaFacebook, FaTwitter, FaGithub } from "react-icons/fa";

const TeamPage = () => {
  return (
    <>
      <div className="w-full  h-screen bg-backGround">
        <Navbar />
        <div className="w-full mb-10 sm:mb-0 flex flex-col h-[25%]  items-center justify-center">
          <div className="w-[80%] h-[90%]  items-center flex flex-col">
            <div className="w-full h-10  flex items-center justify-center">
              <h3 className="text-green-600 text-sm font-semibold">Our Team</h3>
            </div>
            <div className="w-full h-12 flex bg-backGround items-center justify-center">
              <h1 className="text-2xl   text-white font-bold ">
                Our Team Members
              </h1>
            </div>
            <div className="w-full h-12 flex flex-col text-gray-400 items-center justify-center">
              <p>Meet our dedicated team</p>
              <p>We're here to bring your vision to life!</p>
            </div>
          </div>
        </div>
        <div className="w-full h-auto sm:h-[95%] bg-backGround flex items-center justify-center">
          <div className="w-[70%] sm:w-[65%] sm:h-[70%] h-[90%] flex sm:flex-row flex-col  gap-10 items-center justify-center sm:bg-white  rounded-lg shadow-lg">
            <div className="sm:w-[25%] w-[70%] sm:gap-7 sm:h-[80%] flex flex-col items-center justify-between ">
              <div className="w-full h-[70%]  items-center justify-center flex  rounded-lg">
                <img src={Shriram} alt="" className="rounded-lg" />
              </div>
              <div className="w-full gap-1 h-24 items-center justify-center flex flex-col  ">
                <h1 className="text-white sm:text-black font-semibold text-md ">
                  C S Shriram Jayanth
                </h1>
                <p className="text-gray-300 text-sm">Backend Developer</p>
                <div className="flex sm:justify-center  flex-row mt-2   ">
                  <a
                    href="https://www.facebook.com/"
                    className="text-gray-500 hover:text-blue-700 "
                  >
                    <FaFacebook />
                    <span className="sr-only">Facebook page</span>
                  </a>

                  <a
                    href="https://twitter.com/ManickavelP"
                    className="text-gray-500 hover:text-blue-500  ms-5"
                  >
                    <FaTwitter />
                    <span className="sr-only">Twitter page</span>
                  </a>
                  <a
                    href="https://github.com/ManikavelP/Thozhilali-Frontend"
                    className="text-gray-500 hover:text-black  ms-5"
                  >
                    <FaGithub />
                    <span className="sr-only">GitHub account</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="sm:w-[25%] w-[70%] sm:gap-7 sm:h-[80%] flex flex-col items-center justify-between ">
              <div className="w-full h-[70%]  items-center justify-center flex  rounded-lg">
                <img src={Shriram} alt="" className="rounded-lg" />
              </div>
              <div className="w-full gap-1 h-24 items-center justify-center flex flex-col  ">
                <h1 className="text-white sm:text-black font-semibold text-md ">
                  Manickavel P
                </h1>
                <p className="text-gray-300 text-sm">Frontend Developer</p>
                <div className="flex sm:justify-center  flex-row mt-2   ">
                  <a
                    href="https://www.facebook.com/"
                    className="text-gray-500 hover:text-blue-700 "
                  >
                    <FaFacebook />
                    <span className="sr-only">Facebook page</span>
                  </a>

                  <a
                    href="https://twitter.com/ManickavelP"
                    className="text-gray-500 hover:text-blue-500  ms-5"
                  >
                    <FaTwitter />
                    <span className="sr-only">Twitter page</span>
                  </a>
                  <a
                    href="https://github.com/ManikavelP/Thozhilali-Frontend"
                    className="text-gray-500 hover:text-black  ms-5"
                  >
                    <FaGithub />
                    <span className="sr-only">GitHub account</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="sm:w-[25%] w-[70%] sm:gap-7  sm:h-[80%] flex flex-col items-center justify-between ">
              <div className="w-full h-[70%]  items-center justify-center flex  rounded-lg">
                <img src={Shriram} alt="" className="rounded-lg" />
              </div>
              <div className="w-full gap-1 h-24 items-center justify-center flex flex-col  ">
                <h1 className="text-white sm:text-black font-semibold text-md ">
                  Raja Kumar
                </h1>
                <p className="text-gray-300 text-sm">UI/UX Designer  </p>
                <div className="flex sm:justify-center  flex-row mt-2   ">
                  <a
                    href="https://www.facebook.com/"
                    className="text-gray-500 hover:text-blue-700 "
                  >
                    <FaFacebook />
                    <span className="sr-only">Facebook page</span>
                  </a>

                  <a
                    href="https://twitter.com/ManickavelP"
                    className="text-gray-500 hover:text-blue-500  ms-5"
                  >
                    <FaTwitter />
                    <span className="sr-only">Twitter page</span>
                  </a>
                  <a
                    href="https://github.com/ManikavelP/Thozhilali-Frontend"
                    className="text-gray-500 hover:text-black  ms-5"
                  >
                    <FaGithub />
                    <span className="sr-only">GitHub account</span>
                  </a>
                </div>
              </div>
            </div>
            
            
            
          </div>
        </div>
        <Footer/>
      </div>
      
    </>
  );
};

export default TeamPage;
