import React from "react";
import Navbar from "../../components/Navbar";
import Worker1Img from "../../assets/images/nahid photo.png";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

  
import { useState } from "react";
const HomePage = () => {
  const [location, setLocation] = useState("");
  const [work, setWork] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Performing Backend Operations
    console.log("Location:", location);
    console.log("Work:", work);
  };
  const cardStyle = {
    background:'#132D3A'
    // background: 'linear-gradient(180deg, rgba(36,195,71,1) 0%, rgba(58,73,249,1) 100%)',
  };

  
  return (
    <>
      <Navbar />
      <div className="bg-backGround w-full h-screen overflow-auto">
        <div className="justify-center flex items-center w-full sm:h-[80%] h-[95%] ">
          <div className="bg-white h-[100%] w-[90%] rounded-lg flex flex-col items-center justify-center">
            <div className="mt-4 w-[85%] h-[10%] ">
              <h1 className="text-2xl font-semibold  w-40 ">Book Now</h1>
              <p className="text-xs ml-2 w-28">Start Your Search</p>
            </div>
            <div className=" w-[85%] h-[20%] sm:mt-3 mt-2 justify-between sm:mb-2 mb-[28%]">
              <div className="flex flex-col sm:flex-row justify-start items-center gap-[15%]   cursor-pointer">
                <div>
                  <label
                    htmlFor="location"
                    className="block mb-2 font-semibold"
                  >
                    Location
                  </label>
                  <select
                    id="location"
                    name="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full sm:w-auto px-7 py-2.5 border-2 border-black rounded-md mb-4 sm:mb-0 text-sm text-gray-500"
                  >
                    <option value="" className="text-gray-500 ">
                      Select an Location
                    </option>
                    <option value="Chennai">Chennai</option>
                    <option value="Kanchipuram">Kanchipuram</option>
                    <option value="velore">Velore</option>
                    <option value="Kangeyam">Kangeyam</option>
                  </select>
                </div>

                <div className="flex flex-col  sm:items-start">
                  <label htmlFor="work" className="block mb-2 font-semibold">
                    Work
                  </label>
                  <select
                    id="work"
                    name="work"
                    value={work}
                    onChange={(e) => setWork(e.target.value)}
                    className="w-[100%] sm:w-auto sm:px-7 sm:py-2.5 px-10 py-2.5 border-2 border-black rounded-md mb-4 sm:mb-0 text-sm text-gray-500"
                  >
                    <option value="" className="text-gray-500">
                      Select an Work
                    </option>
                    <option value="Vessel Washing">Vessel washing</option>
                    <option value="Floor Washing">Floor Washing</option>
                    <option value="Grooming">Grooming </option>
                    <option value="Total Cleaning">Total Cleaning</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-[70%] sm:w-auto sm:px-5 sm:py-3 py-2.5 bg-green-500 text-white rounded-md hover:bg-backGround self-center sm:self-auto sm:mt-8 font-semibold"
                  onSubmit={handleSubmit}
                >
                  Get Started
                </button>
              </div>
            </div>
            <div className="w-full sm:w-[95%] overflow-auto flex flex-wrap border-2 mb-2 border-backGround rounded-lg justify-center">
              <div style={cardStyle} className=" sm:w-[30%] sm:h-[84%] sm:m-3 m-2 rounded-30 flex flex-row items-center">
                <div className="w-[30%] sm:w-[25%] m-2.5 bg-white rounded-full overflow-hidden flex-shrink-0">
                  <img
                    src={Worker1Img}
                    alt="WorkersImg"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-[70%] sm:w-[75%] m-3">
                  <div>
                    <h1 className="text-xl font-bold text-white">
                      Nahid Hasan
                    </h1>
                    <p className="text-sm text-gray-300">Vessel Washing</p>
                    <div className="flex items-center mt-2">
                      <div className="bg-white text-blue-600 rounded-2xl w-10 h-5 flex items-center justify-center text-xs mr-2">
                        4.5
                      </div>
                      <div className="flex">
                        {[...Array(4)].map((_, index) => (
                          <FaStar
                            key={index}
                            className="w-4 h-5 ml-1 text-starColor"
                           
                          />
                        ))}
                        <FaStarHalfAlt className="w-4 h-5 ml-1 text-starColor" />
                      </div>
                    </div>
                    <div className="text-gray-200 text-xs mt-2">
                    UI is the saddle, the stirrups, & the reins. UX is the feeling you get being able to ride the horse.
                    </div>
                    <button className="mt-2 bg-green-500 text-white px-4 py-2 rounded-md text-sm ">
                        LEARN MORE
                    </button>
                  </div>
                </div>
              </div>
              <div style={cardStyle} className=" sm:w-[30%] sm:h-[84%] sm:m-3 m-2 rounded-30 flex flex-row items-center">
                <div className="w-[30%] sm:w-[25%] m-2.5 bg-white rounded-full overflow-hidden flex-shrink-0">
                  <img
                    src={Worker1Img}
                    alt="WorkersImg"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-[70%] sm:w-[75%] m-3">
                  <div>
                    <h1 className="text-xl font-bold text-white">
                      Nahid Hasan
                    </h1>
                    <p className="text-sm text-gray-300">Vessel Washing</p>
                    <div className="flex items-center mt-2">
                      <div className="bg-white text-blue-600 rounded-2xl w-10 h-5 flex items-center justify-center text-xs mr-2">
                        4.5
                      </div>
                      <div className="flex">
                        {[...Array(4)].map((_, index) => (
                          <FaStar
                            key={index}
                            className="w-4 h-5 ml-1 text-starColor"
                           
                          />
                        ))}
                        <FaStarHalfAlt className="w-4 h-5 ml-1 text-starColor" />
                      </div>
                    </div>
                    <div className="text-gray-200 text-xs mt-2">
                    UI is the saddle, the stirrups, & the reins. UX is the feeling you get being able to ride the horse.
                    </div>
                    <button className="mt-2 bg-green-500 text-white px-4 py-2 rounded-md text-sm ">
                        LEARN MORE
                    </button>
                  </div>
                </div>
              </div>
              <div style={cardStyle} className=" sm:w-[30%] sm:h-[84%] sm:m-3 m-2 rounded-30 flex flex-row items-center">
                <div className="w-[30%] sm:w-[25%] m-2.5 bg-white rounded-full overflow-hidden flex-shrink-0">
                  <img
                    src={Worker1Img}
                    alt="WorkersImg"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-[70%] sm:w-[75%] m-3">
                  <div>
                    <h1 className="text-xl font-bold text-white">
                      Nahid Hasan
                    </h1>
                    <p className="text-sm text-gray-300">Vessel Washing</p>
                    <div className="flex items-center mt-2">
                      <div className="bg-white text-blue-600 rounded-2xl w-10 h-5 flex items-center justify-center text-xs mr-2">
                        4.5
                      </div>
                      <div className="flex">
                        {[...Array(4)].map((_, index) => (
                          <FaStar
                            key={index}
                            className="w-4 h-5 ml-1 text-starColor"
                           
                          />
                        ))}
                        <FaStarHalfAlt className="w-4 h-5 ml-1 text-starColor" />
                      </div>
                    </div>
                    <div className="text-gray-200 text-xs mt-2">
                    UI is the saddle, the stirrups, & the reins. UX is the feeling you get being able to ride the horse.
                    </div>
                    <button className="mt-2 bg-green-500 text-white px-4 py-2 rounded-md text-sm ">
                        LEARN MORE
                    </button>
                  </div>
                </div>
              </div>
              <div style={cardStyle} className=" sm:w-[30%] sm:h-[84%] sm:m-3 m-2 rounded-30 flex flex-row items-center">
                <div className="w-[30%] sm:w-[25%] m-2.5 bg-white rounded-full overflow-hidden flex-shrink-0">
                  <img
                    src={Worker1Img}
                    alt="WorkersImg"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-[70%] sm:w-[75%] m-3">
                  <div>
                    <h1 className="text-xl font-bold text-white">
                      Nahid Hasan
                    </h1>
                    <p className="text-sm text-gray-300">Vessel Washing</p>
                    <div className="flex items-center mt-2">
                      <div className="bg-white text-blue-600 rounded-2xl w-10 h-5 flex items-center justify-center text-xs mr-2">
                        4.5
                      </div>
                      <div className="flex">
                        {[...Array(4)].map((_, index) => (
                          <FaStar
                            key={index}
                            className="w-4 h-5 ml-1 text-starColor"
                           
                          />
                        ))}
                        <FaStarHalfAlt className="w-4 h-5 ml-1 text-starColor" />
                      </div>
                    </div>
                    <div className="text-gray-200 text-xs mt-2">
                    UI is the saddle, the stirrups, & the reins. UX is the feeling you get being able to ride the horse.
                    </div>
                    <button className="mt-2 bg-green-500 text-white px-4 py-2 rounded-md text-sm ">
                        LEARN MORE
                    </button>
                  </div>
                </div>
              </div>
              <div style={cardStyle} className=" sm:w-[30%] sm:h-[84%] sm:m-3 m-2 rounded-30 flex flex-row items-center">
                <div className="w-[30%] sm:w-[25%] m-2.5 bg-white rounded-full overflow-hidden flex-shrink-0">
                  <img
                    src={Worker1Img}
                    alt="WorkersImg"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-[70%] sm:w-[75%] m-3">
                  <div>
                    <h1 className="text-xl font-bold text-white">
                      Nahid Hasan
                    </h1>
                    <p className="text-sm text-gray-300">Vessel Washing</p>
                    <div className="flex items-center mt-2">
                      <div className="bg-white text-blue-600 rounded-2xl w-10 h-5 flex items-center justify-center text-xs mr-2">
                        4.5
                      </div>
                      <div className="flex">
                        {[...Array(4)].map((_, index) => (
                          <FaStar
                            key={index}
                            className="w-4 h-5 ml-1 text-starColor"
                           
                          />
                        ))}
                        <FaStarHalfAlt className="w-4 h-5 ml-1 text-starColor" />
                      </div>
                    </div>
                    <div className="text-gray-200 text-xs mt-2">
                    UI is the saddle, the stirrups, & the reins. UX is the feeling you get being able to ride the horse.
                    </div>
                    <button className="mt-2 bg-green-500 text-white px-4 py-2 rounded-md text-sm ">
                        LEARN MORE
                    </button>
                  </div>
                </div>
              </div>
              <div style={cardStyle} className=" sm:w-[30%] sm:h-[84%] sm:m-3 m-2 rounded-30 flex flex-row items-center">
                <div className="w-[30%] sm:w-[25%] m-2.5 bg-white rounded-full overflow-hidden flex-shrink-0">
                  <img
                    src={Worker1Img}
                    alt="WorkersImg"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-[70%] sm:w-[75%] m-3">
                  <div>
                    <h1 className="text-xl font-bold text-white">
                      Nahid Hasan
                    </h1>
                    <p className="text-sm text-gray-300">Vessel Washing</p>
                    <div className="flex items-center mt-2">
                      <div className="bg-white text-blue-600 rounded-2xl w-10 h-5 flex items-center justify-center text-xs mr-2">
                        4.5
                      </div>
                      <div className="flex">
                        {[...Array(4)].map((_, index) => (
                          <FaStar
                            key={index}
                            className="w-4 h-5 ml-1 text-starColor"
                           
                          />
                        ))}
                        <FaStarHalfAlt className="w-4 h-5 ml-1 text-starColor" />
                      </div>
                    </div>
                    <div className="text-gray-200 text-xs mt-2">
                    UI is the saddle, the stirrups, & the reins. UX is the feeling you get being able to ride the horse.
                    </div>
                    <button className="mt-2 bg-green-500 text-white px-4 py-2 rounded-md text-sm ">
                        LEARN MORE
                    </button>
                  </div>
                </div>
              </div>
              <div style={cardStyle} className=" sm:w-[30%] sm:h-[84%] sm:m-3 m-2 rounded-30 flex flex-row items-center">
                <div className="w-[30%] sm:w-[25%] m-2.5 bg-white rounded-full overflow-hidden flex-shrink-0">
                  <img
                    src={Worker1Img}
                    alt="WorkersImg"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-[70%] sm:w-[75%] m-3">
                  <div>
                    <h1 className="text-xl font-bold text-white">
                      Nahid Hasan
                    </h1>
                    <p className="text-sm text-gray-300">Vessel Washing</p>
                    <div className="flex items-center mt-2">
                      <div className="bg-white text-blue-600 rounded-2xl w-10 h-5 flex items-center justify-center text-xs mr-2">
                        4.5
                      </div>
                      <div className="flex">
                        {[...Array(4)].map((_, index) => (
                          <FaStar
                            key={index}
                            className="w-4 h-5 ml-1 text-starColor"
                           
                          />
                        ))}
                        <FaStarHalfAlt className="w-4 h-5 ml-1 text-starColor" />
                      </div>
                    </div>
                    <div className="text-gray-200 text-xs mt-2">
                    UI is the saddle, the stirrups, & the reins. UX is the feeling you get being able to ride the horse.
                    </div>
                    <button className="mt-2 bg-green-500 text-white px-4 py-2 rounded-md text-sm ">
                        LEARN MORE
                    </button>
                  </div>
                </div>
              </div>
              <div style={cardStyle} className=" sm:w-[30%] sm:h-[84%] sm:m-3 m-2 rounded-30 flex flex-row items-center">
                <div className="w-[30%] sm:w-[25%] m-2.5 bg-white rounded-full overflow-hidden flex-shrink-0">
                  <img
                    src={Worker1Img}
                    alt="WorkersImg"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-[70%] sm:w-[75%] m-3">
                  <div>
                    <h1 className="text-xl font-bold text-white">
                      Nahid Hasan
                    </h1>
                    <p className="text-sm text-gray-300">Vessel Washing</p>
                    <div className="flex items-center mt-2">
                      <div className="bg-white text-blue-600 rounded-2xl w-10 h-5 flex items-center justify-center text-xs mr-2">
                        4.5
                      </div>
                      <div className="flex">
                        {[...Array(4)].map((_, index) => (
                          <FaStar
                            key={index}
                            className="w-4 h-5 ml-1 text-starColor"
                           
                          />
                        ))}
                        <FaStarHalfAlt className="w-4 h-5 ml-1 text-starColor" />
                      </div>
                    </div>
                    <div className="text-gray-200 text-xs mt-2">
                    UI is the saddle, the stirrups, & the reins. UX is the feeling you get being able to ride the horse.
                    </div>
                    <button className="mt-2 bg-green-500 text-white px-4 py-2 rounded-md text-sm ">
                        LEARN MORE
                    </button>
                  </div>
                </div>
              </div>
              <div style={cardStyle} className=" sm:w-[30%] sm:h-[84%] sm:m-3 m-2 rounded-30 flex flex-row items-center">
                <div className="w-[30%] sm:w-[25%] m-2.5 bg-white rounded-full overflow-hidden flex-shrink-0">
                  <img
                    src={Worker1Img}
                    alt="WorkersImg"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-[70%] sm:w-[75%] m-3">
                  <div>
                    <h1 className="text-xl font-bold text-white">
                      Nahid Hasan
                    </h1>
                    <p className="text-sm text-gray-300">Vessel Washing</p>
                    <div className="flex items-center mt-2">
                      <div className="bg-white text-blue-600 rounded-2xl w-10 h-5 flex items-center justify-center text-xs mr-2">
                        4.5
                      </div>
                      <div className="flex">
                        {[...Array(4)].map((_, index) => (
                          <FaStar
                            key={index}
                            className="w-4 h-5 ml-1 text-starColor"
                           
                          />
                        ))}
                        <FaStarHalfAlt className="w-4 h-5 ml-1 text-starColor" />
                      </div>
                    </div>
                    <div className="text-gray-200 text-xs mt-2">
                    UI is the saddle, the stirrups, & the reins. UX is the feeling you get being able to ride the horse.
                    </div>
                    <button className="mt-2 bg-green-500 text-white px-4 py-2 rounded-md text-sm ">
                        LEARN MORE
                    </button>
                  </div>
                </div>
              </div>
              <div style={cardStyle} className=" sm:w-[30%] sm:h-[84%] sm:m-3 m-2 rounded-30 flex flex-row items-center">
                <div className="w-[30%] sm:w-[25%] m-2.5 bg-white rounded-full overflow-hidden flex-shrink-0">
                  <img
                    src={Worker1Img}
                    alt="WorkersImg"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-[70%] sm:w-[75%] m-3">
                  <div>
                    <h1 className="text-xl font-bold text-white">
                      Nahid Hasan
                    </h1>
                    <p className="text-sm text-gray-300">Vessel Washing</p>
                    <div className="flex items-center mt-2">
                      <div className="bg-white text-blue-600 rounded-2xl w-10 h-5 flex items-center justify-center text-xs mr-2">
                        4.5
                      </div>
                      <div className="flex">
                        {[...Array(4)].map((_, index) => (
                          <FaStar
                            key={index}
                            className="w-4 h-5 ml-1 text-starColor"
                           
                          />
                        ))}
                        <FaStarHalfAlt className="w-4 h-5 ml-1 text-starColor" />
                      </div>
                    </div>
                    <div className="text-gray-200 text-xs mt-2">
                    UI is the saddle, the stirrups, & the reins. UX is the feeling you get being able to ride the horse.
                    </div>
                    <button className="mt-2 bg-green-500 text-white px-4 py-2 rounded-md text-sm ">
                        LEARN MORE
                    </button>
                  </div>
                </div>
              </div>
              
              
              
              {/* Additional card items go here */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
