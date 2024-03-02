import React from 'react'
import Navbar from '../../components/Navbar'
import AboutImg from '../../assets/images/Group 312.png';
import Footer from '../../components/Footer'

const AboutPage = () => {
  return (
    <div className='w-full h-screen '>
      <Navbar about = "true"/>
      <div className='w-full h-[70%] bg-backGround flex  flex-col'>
        <div className='w-full h-20 flex items-center '>
          <h1 className='font-semibold  text-3xl sm:text-5xl ml-[50%] sm:ml-[60%] text-white'>About Us</h1>
        </div>
        <div className='flex flex-row  w-full h-full   items-center justify-between '>
          <div className='w-[40%] h-full flex flex-col  items-center justify-center '>

            <div className='w-[70%] h-[50%] flex flex-col  '>
              <h1  className='text-white text-3xl sm:text-5xl font-bold mb-2 '>We are on a mission</h1>
              <p className='text-sm text-white'>We improve people’s lives by connecting them to meaningful work</p>
            </div>
            

          </div>
          <div className='w-[60%]  flex flex-col h-full items-center justify-center sm:mt-36 mt-10'>
            <img src={AboutImg} alt="" />



          </div>

        </div>
      </div>

    

      
    </div>
    
  )
}

export default AboutPage