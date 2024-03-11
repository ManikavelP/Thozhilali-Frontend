import React from "react";
import logo from "../assets/images/logo.png";
import { MdOutlineCancel } from "react-icons/md";
import workerImg from "../assets/images/worker1.png";

const WorkerPopUp = (prop) => {
  const handleCloseClick = () => {
   return prop.onClose();
  };

  
  return (
    <div className="w-full h-screen  fixed inset-0 flex items-center justify-center bg-opacity-50">
      <div className="sm:w-[60%] w-[85%] h-[90%] sm:h-[80%] bg-green-400 rounded-3xl flex flex-col ">
        <div className="flex flex-row justify-between items-center w-full h-[13%] hidden:bg-yellow-500 sm:mx-2  sm:p-5 p-2 ">
          <h1 className=" text-white text-2xl hidden md:block">Welcome!</h1>
          <div>
            <img src={logo} alt="" className="  w-full h-12" />
          </div>
          <div>
            <MdOutlineCancel className="w-8 h-8 text-white" onClick={handleCloseClick}/>
          </div>
        </div>
        <div className="w-full sm:h-[20%] h-[16%] flex flex-row  gap-3 p-2  items-center">
          <div>
            <img
              src={workerImg}
              alt="worker1"
              className="  sm:w-24 sm:h-24 w-20 h-20 ml-2 mt-1"
            />
          </div>
          <div className="  flex w-40 flex-col sm:mt-5 sm:ml-10 mt-1 ml-2 h-16">
            <h2 className="  font-medium">Name</h2>
            <h2>{prop.name}</h2>
          </div>
          <div className="flex flex-col sm:mt-5 sm:ml-10 mt-1 h-16">
            <h2 className="  font-medium">Gender</h2>
            <h2>{prop.gender}</h2>
          </div>
        </div>
        <div className="w-full sm:h-[15%] h-[25%]  flex flex-col sm:flex-row items-center sm:p-5 ">
          <div className="flex  flex-col w-full sm:w-[40%] p-3 sm:h-full  text-sm sm:text-md items-center justify-center">
            <h2 className="  font-medium">Country & State & District</h2>
            <p>{prop.country} | {prop.state} | {prop.district}</p>
          </div>
          <div className="flex flex-col   sm:w-[30%] sm:h-auto text-sm sm:text-md sm:items-center sm:justify-center">
            <div className="flex justify-center sm:items-center sm:flex-col sm-p-0 p-2">
              <h3 className="  font-medium">Contact No</h3>
              <p className="ml-1 sm:ml-0">{prop.contactno}</p>
            </div>
          </div>
          <div className="flex flex-col  sm:items-center sm:justify-center   sm:w-[30%] sm:h-auto   text-sm sm:text-md">
            <div className="flex sm:flex-col justify-center sm:items-center sm:p-3 ">
              <h3 className="  font-medium">Email </h3>
              <p className=" sm:ml-0 ml-1">{prop.email}</p>
            </div>
          </div>
        </div>

        <div className="w-full sm:h-[18%] h-[15%] flex flex-row justify-center text-sm  sm:text-[90%] items-center ">
          <div className="w-[30%] h-full items-center justify-center  flex flex-row">
            <div>
              <h3 className="  font-medium">Hourly Rate</h3>
              <h3>{prop.hrate}</h3>
            </div>
          </div>
          <div className="w-[30%] h-full items-center justify-center  flex flex-col ">
            <h3 className="  font-medium">Weekly</h3>
            <h3>{prop.wrate}</h3>
          </div>
          <div className="w-[30%] h-full flex flex-col items-center justify-center ">
            <h3 className="  font-medium">Monthly</h3>
            <h3>{prop.mrate}</h3>
          </div>
        </div>
        <div className=" w-full h-auto items-center justify-center flex">
          <hr className="  w-[94%] text-gray-400 " />
        </div>

        <div className="w-full h-[28%]  flex flex-row ">
          <div className="w-[50%] sm:w-[40%] h-full items-center justify-center  flex flex-col  ">
            <h3 className="font-medium flex items-center justify-center sm:mt-3">
              Preferred Role &<br />
              Experience
            </h3>
            <h3 className="text-sm flex flex-col items-center justify-center">
              <p>{prop.skills}</p>
            </h3>
          </div>

          <div className="w-[35%] h-full flex items-center justify-center flex-col">
            <h4 className="font-medium flex items-center justify-center w-full">
              {prop.language}
            </h4>
            <h3 className="text-sm">Advanced</h3>
          </div>
          <div className="w-[30%] h-full items-center justify-center flex flex-col ">
            <h4 className="font-medium ">Experience</h4>
            <h3 className="text-sm ">{prop.exp}</h3>
          </div>
        </div>

        <div className="w-full h-auto flex items-center justify-center m-2 ">
          <button
            type="submit"
            num={prop.num}
            className="w-[50%] sm:w-auto bg-backGround text-white rounded-xl px-3.5 py-2 self-center sm:self-auto  font-semibold hover:bg-green-700"
          >
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkerPopUp;
