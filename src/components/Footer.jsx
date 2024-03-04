import React, { useState } from 'react'
import { FaArrowAltCircleRight, FaTwitter } from "react-icons/fa";
import { FaFacebook , FaDiscord , FaGithub} from "react-icons/fa";

import logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom';

const Footer = () => {
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email", email)


  }
  return (
    <footer className="bg-backGround ">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-3 ">
        <div className="md:flex md:justify-start">
          <div className="mb-2 md:mb-0 w-[30%] h-[30%] ">
            <a href="#Thozilali" className="flex items-center">
              <img src={logo} className=" w-full h-[50%] sm:w-full sm:h-[30%]" alt="Thozilali Logo" />
            </a>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:gap-1 sm:grid-cols-4">
            <div className="flex mt-4 mr-5 ml-2 sm:justify-center sm:mt-8">
              <a href="https://www.facebook.com/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                <FaFacebook/>
                <span className="sr-only">Facebook page</span>
              </a>
              <a href="https://discord.com/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                <FaDiscord/>

                <span className="sr-only">Discord community</span>
              </a>
              <a href="https://twitter.com/ManickavelP" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
               <FaTwitter/>
                <span className="sr-only">Twitter page</span>
              </a>
              <a href="https://github.com/ManikavelP/Thozhilali-Frontend" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                <FaGithub/>
                <span className="sr-only">GitHub account</span>
              </a>

            </div>
            <div className='sm:mt-6'>

              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className='flex flex-row gap-1 items-center mb-2 '>
                  <FaArrowAltCircleRight className='text-green-500' /> <Link to="/home" className="hover:underline ">Home</Link>
                </li>
                <li className='flex flex-row gap-1 items-center mb-2 '>
                  <FaArrowAltCircleRight className='text-green-500' /> <Link to="/about" className="hover:underline ">About Us</Link>
                </li>
                <li className='flex flex-row gap-1 items-center mb-2 '>
                  <FaArrowAltCircleRight className='text-green-500' /> <Link to="/home" className="hover:underline ">Contact Us</Link>
                </li>
                <li className='flex flex-row gap-1 items-center mb-2 '>
                  <FaArrowAltCircleRight className='text-green-500' /> <Link to="/OurTeam" className="hover:underline ">OurTeam</Link>
                </li>
              </ul>
            </div>
            <div className='sm:mt-6'>

              <ul className="text-gray-500 dark:text-gray-400 font-medium ">

                <li className='flex flex-row gap-1 items-center mb-2 '>
                  <FaArrowAltCircleRight className='text-green-500' /> <Link to="/home" className="hover:underline ">Privacy</Link>
                </li>
                <li className='flex flex-row gap-1 items-center mb-2 '>
                  <FaArrowAltCircleRight className='text-green-500' /> <Link to="/home" className="hover:underline ">Cookies and Policy</Link>
                </li>
              </ul>
            </div>
            <div className='flex flex-col sm:justify-end justify-start sm:items-end items-start w-full h-auto mt-0 sm:mt-5'>
              <h2 className='text-gray-400 mb-1'>Stay Up to Date</h2>
              <form onSubmit={handleSubmit}>
                <input
                  type="email"
                  className="flex justify-end px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 mb-2"
                  placeholder="Enter email here"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  type="submit"
                  className="w-[40%] sm:w-[50%] h-9 sm:h-8 bg-green-500 text-gray-300 rounded-md hover:bg-backGround sm:self-center sm:mt-2 font-semibold"
                >
                  Subscribe
                </button>
              </form>
            </div>


          </div>
        </div>
        <hr className="my-6 border-gray-100 sm:mx-auto dark:border-gray-700 lg:my-5" />
        <div className="sm:flex items-center h-full w-full    justify-center">
          <span className="text-sm sm:text-center text-gray-400">© 2024 Thozilali™  |  All Rights Reserved.
          </span>

        </div>
      </div>
    </footer>
  )
}

export default Footer