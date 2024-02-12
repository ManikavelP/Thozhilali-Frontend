import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { FOCUSABLE_SELECTOR } from "@testing-library/user-event/dist/utils";

const HomePage = () => {
  return (
    <>
      {/* <Navbar/>
    <div className='bg-backGround'>

      <div className='flex flex-col sm:flex-row bg-white w-auto mt-10'>

            <div className='flex w-10 h-10  p-10 bg-green-400'></div>
      </div>
      
      
    </div>
    <Footer/> */}
      <div className="bg-backGround h-screen w-full">
        <Navbar />
        <div className="justify-center flex items-center w-full h-[80%] mt-5">
          <div className="bg-white h-[100%] w-[90%] rounded-lg flex flex-col items-center justify-center">
            <div className="bg-red-500 w-[85%] h-[10%]">
              <h1 className="text-2xl font-semibold  ">Book Now</h1>
              <p className= "text-xs ml-2">Start Your Search</p>
            </div>
            <div className="bg-yellow-500 w-[85%] h-[12%] ">Location </div>
            <div className="bg-green-500 w-[85%] h-[70%]">
              workers card
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
