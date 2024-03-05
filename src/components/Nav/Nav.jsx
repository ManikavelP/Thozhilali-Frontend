import React from 'react'

const Nav = () => {
  return (
    <div className='navBar flex justify-between items-center p-[3rem]'>
      <div className='logoDiv'>
        <h1 className='logo text-[25px] text-[green] '>
          <strong>THOZHILALI</strong>
        </h1>
      </div>
      <div className='menu flex gap-8'>
        <li className='menuList text-[000] hover:text-[green]'>HOME</li>
        <li className='menuList text-[000] hover:text-[green]'>MY BOOKINGS</li>
        <li className='menuList text-[000] hover:text-[green]'>SERVICES</li>
        <li className='menuList text-[000] hover:text-[green]'>ABOUT</li>

      </div>
      <div className='menu flex gap-8'><li className='menuList text-[000] hover:text-[green]'>Profile</li></div>
    </div>
  )
}

export default Nav