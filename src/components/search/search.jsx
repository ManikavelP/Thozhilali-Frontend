import React from 'react'
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineCloseCircle } from "react-icons/ai";
const Search = () => {
  return (
    <div className='searchDiv grid gp-10 right-100px bg-greyIris rounded-[1px] p-[3rem]'>
      <from action="">
        <div className='flex justify-between  rounded-[8px] 
        bg-white p-5 shadow-lg shadow-greyIris-50'>

          <div className='flex gap-2 items-center'>
          <AiOutlineSearch  className='text-[25px] icon'/>
          <input type='text' className='bg-transparent text-green-500 focus:outline-none w-[100%]
          ' placeholder='Search Location...'/>
          <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6] 
          hover:text-textColor icon'/>
          </div>
          <div className='flex gap-2 items-center'>
          <AiOutlineSearch  className='text-[25px] icon'/>
          <input type='text' className='bg-transparent text-green-500 focus:outline-none w-[100%]
          ' placeholder='Search Location...'/>
          <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6] 
          hover:text-textColor icon'/>
          </div>
          <div className='flex gap-2 items-center'>
          <h1>GET START</h1>
          </div>
          </div>
          
      </from>

    </div>
  )
}

export default Search