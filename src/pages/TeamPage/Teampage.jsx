import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Member1 from "../../assets/images/image 48.png"
const TeamPage = () => {
  return (
    <div className="w-full  h-screen ">
      <Navbar />

      <div className="w-full  h-[50%] mt-10  flex  items-center justify-center ">
        <div className="w-[90%] h-full flex flex-row items-center justify-between bg-backGround rounded-md">
          <div className="w-[40%] h-full flex  items-center justify-center">
            <img src={Member1} alt="" className=""/>
          </div>
          <div className="w-[60%] h-full flex flex-col  ">
            <div className="items-start m-5 w-full h-full">
              <h1 className="text-2xl font-semibold mb-2 bg-white rounded-sm w-40">Raja Kumar</h1>
              <p className="  text-xs text-gray-300 mb-2">UI/UX Designer | FullStack Developer</p>
              <p className="w-[70%] h-[80%] bg-white rounded-md"></p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full  h-[50%] mt-10 flex  items-center justify-center ">
        <div className="w-[90%] h-full flex flex-row items-center justify-between bg-backGround  rounded-md">
          
          <div className="w-[60%] h-full flex flex-col   ">
            <div className="items-start m-5 w-full h-full">
              <h1 className="text-2xl font-semibold mb-2 bg-white rounded-sm w-40">Raja Kumar</h1>
              <p className="  text-xs text-gray-300 mb-2">UI/UX Designer | FullStack Developer</p>
              <p className="w-[70%] h-[80%] bg-white rounded-md"></p>
            </div>
          </div>
          <div className="w-[40%] h-full flex  items-center justify-center">
            <img src={Member1} alt="" className=""/>
          </div>
        </div>
      </div>
      <div className="w-full  h-[50%] mt-10  flex  items-center justify-center mb-20">
        <div className="w-[90%] h-full flex flex-row items-center justify-between bg-backGround rounded-md">
          <div className="w-[40%] h-full flex  items-center justify-center">
            <img src={Member1} alt="" className=""/>
          </div>
          <div className="w-[60%] h-full flex flex-col   ">
            <div className="items-start m-5 w-full h-full">
              <h1 className="text-2xl font-semibold mb-2 bg-white rounded-sm w-40">Raja Kumar</h1>
              <p className="  text-xs text-gray-300 mb-2">UI/UX Designer | FullStack Developer</p>
              <p className="w-[70%] h-[80%] bg-white rounded-md"></p>
            </div>
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  );
};

export default TeamPage;
