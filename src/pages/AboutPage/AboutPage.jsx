import React from "react";
import Navbar from "../../components/Navbar";
import AboutImg from "../../assets/images/Group 312.png";
import Footer from "../../components/Footer";

const AboutPage = () => {
  return (
    <div className="w-full h-screen ">
      <Navbar about="true" />
      <div className="w-full sm:h-[70%] h-[85%] bg-backGround flex  flex-col">
        <div className="w-full h-20 flex items-center ">
          <h1 className="font-semibold  text-3xl sm:text-5xl ml-[50%] sm:ml-[60%] text-white">
            About Us
          </h1>
        </div>
        <div className="flex sm:flex-row flex-col  w-full h-full   items-center justify-between ">
          <div className="sm:w-[40%] w-full h-full flex flex-col order-2  sm:order-1 items-center justify-center ">
            <div className="w-[70%] h-[50%] flex flex-col   bg-backGround">
              <h1 className="text-white text-3xl sm:text-5xl font-bold mb-2 ">
                We are on a mission
              </h1>
              <p className="text-sm text-gray-300">
                We improve people’s lives by connecting them to meaningful work
              </p>
            </div>
          </div>
          <div className="sm:w-[60%] w-[90%] flex flex-col h-full order-1 sm:order-2  items-center justify-center sm:mt-40 mt-10">
            <img src={AboutImg} alt="" className="" />
          </div>
        </div>
      </div>

      <div className="mt-[15%] w-full sm:h-[55%] h-[100%]  flex sm:items-start items-center  flex-col ">
        <div className="sm:w-[50%] w-[80%]  h-full flex flex-col sm:items-start items-center  sm:ml-24 ">
          <div className="mb-10  w-full">
            <h1 className="text-4xl font-semibold ">
              {" "}
              We are AI-Powered talent acquisition automation platform
            </h1>
          </div>
          <div className="flex flex-col font-medium ">
            <p className="mb-3">
              Over the years, recruitment presented many challenges.
            </p>
            <p className="mb-3">
              The difficulty of finding the right set of skills, the inability
              to properly leverage data, the looming global talent gap issue,
              and the sheer amount of effort that goes into traditional
              recruitment.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
              quam. Magni asperiores ipsa aut repellat, voluptas ratione non eum
              alias corporis, suscipit necessitatibus quod consequatur dolorem
              maxime impedit saepe quia.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full h-[90%] bg-red-200 flex  items-center justify-center mb-16">
        <div className="w-[90%] sm:w-[70%] sm:h-full h-[90%] bg-orange-200 flex items-center justify-center"></div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutPage;
