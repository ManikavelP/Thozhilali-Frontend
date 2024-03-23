import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import Card from "../../components/Card";
import Footer from "../../components/Footer";
import WorkerPopUpCard from "../../components/WorkerPopUpCard";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const HomePage = () => {
  const navigate = useNavigate();
  const loc = useLocation();
  const receivedId = loc.state?.id;
  const receivedname = loc.state?.name;
  useEffect(() => {
    if (!loc.state) {
      navigate("/login");
    }
  }, [navigate, loc.state]);

  const [location, setLocation] = useState("");
  const [work, setWork] = useState("");
  const [popup, setpopup] = useState(null);
  const [WorkerData, setWorkerData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/Customer/Workers"
        );
        let Data = response.data;
        setWorkerData(Data);
      } catch (error) {
        console.error("Error fetching worker data:", error);
      }
    };
    getData();
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!location || !work) {
      alert("Please select location and work");
      return;
    }
    // Performing Backend Operations
    console.log("Location:", location);
    console.log("Work:", work);
  };

  const handleCloseWorkerPopUp = () => {
    setpopup(null);
  };

  const handleLearnMoreClick = (e) => {
    setpopup(
      <WorkerPopUpCard
        name={WorkerData[e].firstName + WorkerData[e].lastName}
        gender={WorkerData[e].gender}
        country={WorkerData[e].country}
        state={WorkerData[e].state}
        district={WorkerData[e].district}
        contactno={WorkerData[e].phone}
        email={WorkerData[e].email}
        hrate={WorkerData[e].hrate}
        wrate={WorkerData[e].wrate}
        mrate={WorkerData[e].mrate}
        skills={WorkerData[e].skillset[0]}
        language={WorkerData[e].language}
        exp={WorkerData[e].exp}
        onClose={handleCloseWorkerPopUp}
        num={e + 1}
        W_id={WorkerData[e]._id}
        C_id={loc.state.id}
      />
    );
  };

  return (
    <>
      <div className="bg-backGround">
        <Navbar home="true" Uid={receivedId} name={receivedname} />
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
                    type="button" // Change type to "button"
                    className="w-[70%] sm:w-auto sm:px-5 sm:py-3 py-2.5 bg-green-500 text-white rounded-md hover:bg-backGround self-center sm:self-auto sm:mt-8 font-semibold"
                    onClick={handleSubmit} // Attach handleSubmit to onClick
                  >
                    Get Started
                  </button>
                </div>
              </div>
              <div className="w-full sm:w-[100%] overflow-y-scroll flex flex-wrap  mb-2 border-backGround rounded-lg justify-center mt-3.5">
                {WorkerData.map((d, index) => {
                  return (
                    <Card
                      num={index}
                      onLearnMore={handleLearnMoreClick}
                      name={d.firstName + d.lastName}
                      work={d.work}
                      desc={d.desc}
                      key={index}
                    />
                  );
                })}
              </div>
              {popup && (
                <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50 z-50">
                  {popup}
                </div>
              )}
            </div>
          </div>
        </div>
        <Footer Uid={receivedId} name={receivedname} />
      </div>
    </>
  );
};

export default HomePage;
