import React from "react";
import Navbar from "../../components/Navbar";
import Card from "../../components/Card";
import Footer from "../../components/Footer";
import WorkerPopUpCard from "../../components/WorkerPopUpCard";
import { useState } from "react";

const WorkerData = [
  {
    index: 1,
    name: "mani",
    work: "cleaning",
    desc: "saapittu vittu thoonguvathu",
    gender: "Male",
    country: "India",
    state: "TamilNadu",
    district: "ranipet",
    contactno:9090909090,
    email: "mani420@gmail.com",
    hrate: "20",
    wrate: "30",
    mrate: "40",
    skills: "Web dev",
    language: "Urdu",
    exp: "2 years",
  },

  {
    index: 2,
    name: "moni",
    work: "sweeping",
    desc: "saapittu vittu thoonguvathu",
    gender: "Male",
    country: "India",
    state: "TamilNadu",
    district: "kanchipuram",
    contactno:9090909090,
    email: "mani421@gmail.com",
    hrate: "20",
    wrate: "30",
    mrate: "40",
    skills: "Web dev",
    language: "Urdu",
    exp: "2 years",
  },

  {
    index: 3,
    name: "meni",
    work: "cooking",
    desc: "saapittu vittu thoonguvathu",
    gender: "Male",
    country: "India",
    state: "TamilNadu",
    district: "kundrathur",
    contactno:9090909090,
    email: "mani422@gmail.com",
    hrate: "20",
    wrate: "30",
    mrate: "40",
    skills: "Web dev",
    language: "Urdu",
    exp: "2 years",
  },

  {
    index: 4,
    name: "mani",
    work: "sweeping",
    desc: "saapittu vittu thoonguvathu",
    gender: "Male",
    country: "India",
    state: "TamilNadu",
    district: "kanchipuram",
    contactno:9090909090,
    email: "mani420@gmail.com",
    hrate: "20",
    wrate: "30",
    mrate: "40",
    skills: "Web dev",
    language: "Urdu",
    exp: "2 years",
  },

  {
    index: 5,
    name: "mani",
    work: "sweeping",
    desc: "saapittu vittu thoonguvathu",
    gender: "Male",
    country: "India",
    state: "TamilNadu",
    district: "kanchipuram",
    contactno:9090909090,
    email: "mani420@gmail.com",
    hrate: "20",
    wrate: "30",
    mrate: "40",
    skills: "Web dev",
    language: "Urdu",
    exp: "2 years",
  },

  {
    index: 6,
    name: "mani",
    work: "sweeping",
    desc: "saapittu vittu thoonguvathu",
    gender: "Male",
    country: "India",
    state: "TamilNadu",
    district: "kanchipuram",
    contactno:9090909090,
    email: "mani420@gmail.com",
    hrate: "20",
    wrate: "30",
    mrate: "40",
    skills: "Web dev",
    language: "Urdu",
    exp: "2 years",
  },
];
const HomePage = () => {
  const [location, setLocation] = useState("");
  const [work, setWork] = useState("");
  const [popup, setpopup] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Performing Backend Operations
    console.log("Location:", location);
    console.log("Work:", work);
  };

  const [showWorkerPopUp, setShowWorkerPopUp] = useState(false);

  const handleCloseWorkerPopUp = () => {
    setShowWorkerPopUp(false);
    setpopup(null);
  };

  const handleLearnMoreClick = (e) => {
    setShowWorkerPopUp(true);
    setpopup(
      <WorkerPopUpCard
        name={WorkerData[e - 1].name}
        gender={WorkerData[e - 1].gender}
        country={WorkerData[e - 1].country}
        state={WorkerData[e-1].state}
        district={WorkerData[e-1].district}
        contactno={WorkerData[e-1].contactno}
        email={WorkerData[e-1].email}
        hrate={WorkerData[e-1].hrate}
        wrate={WorkerData[e-1].wrate}
        mrate={WorkerData[e-1].mrate}
        skills={WorkerData[e-1].skills}
        language={WorkerData[e-1].language}
        exp={WorkerData[e-1].exp}      
        onClose={handleCloseWorkerPopUp}
        num={e-1}
      />
    );
  };


  return (
    <>
      <div className="bg-backGround">
        <Navbar home="true" />
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
                {WorkerData.map((d, index) => {
                  return (
                    <>
                      <Card
                        num={d.index}
                        onLearnMore={handleLearnMoreClick}
                        name={d.name}
                        work={d.work}
                        desc={d.desc}
                        key={index}
                      />
                      {popup}
                    </>
                  );
                })}

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
