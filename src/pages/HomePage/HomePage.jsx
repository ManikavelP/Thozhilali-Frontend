import React from "react";
import Navbar from "../../components/Navbar";
import Card from "../../components/Card";
import logo from '../../assets/images/logo.png'
import Footer from "../../components/Footer";
import WorkerPopUpCard from "../../components/WorkerPopUpCard";


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

  const [showWorkerPopUp, setShowWorkerPopUp] = useState(false);

  const handleLearnMoreClick = () => {
    setShowWorkerPopUp(true);
  };

  const handleCloseWorkerPopUp = () => {
    setShowWorkerPopUp(false);
  };
  


  return (
    <>
      <div className="bg-backGround">
        <Navbar home='true' />
        <div className=" w-full h-screen overflow-auto">
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
              <div className="w-full sm:w-[100%] overflow-y-scroll flex flex-wrap  mb-2 border-backGround rounded-lg justify-center mt-3.5">


              <Card onLearnMore={handleLearnMoreClick} />
              {showWorkerPopUp && <WorkerPopUpCard onClose={handleCloseWorkerPopUp} />}
              <Card onLearnMore={handleLearnMoreClick} />
              {showWorkerPopUp && <WorkerPopUpCard onClose={handleCloseWorkerPopUp} />}
              <Card onLearnMore={handleLearnMoreClick} />
              {showWorkerPopUp && <WorkerPopUpCard onClose={handleCloseWorkerPopUp} />}
              <Card onLearnMore={handleLearnMoreClick} />
              {showWorkerPopUp && <WorkerPopUpCard onClose={handleCloseWorkerPopUp} />}
              <Card onLearnMore={handleLearnMoreClick} />
              {showWorkerPopUp && <WorkerPopUpCard onClose={handleCloseWorkerPopUp} />}
              <Card onLearnMore={handleLearnMoreClick} />
              {showWorkerPopUp && <WorkerPopUpCard onClose={handleCloseWorkerPopUp} />}
              


                {/* Additional card items go here */}
              </div>
            </div>
          </div>

        </div>
        <Footer />
      </div>

    </>
  );
};

export default HomePage;
