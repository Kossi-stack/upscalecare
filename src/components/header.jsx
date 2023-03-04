import React from 'react';
import { Link, NavLink } from 'react-router-dom'
import { images } from '../constants';


const activeClassName = "relative before:content-['->'] before:-top-6 before:left-1/2 before:-ml-1 before:absolute before:text-blue-900"

const Header = () => {
  return (
    <header className='grid grid-cols-2 md:grid-cols-[180px_1fr_180px]
     border-y-2 z-50 sticky top-0 w-full border-black bg-white'>

      <Link to='/' className='flex align-middle justify-center border-black border-r-2'>
        <img src={images.healthcare} alt='Raddy' width='137' height='15' />
      </Link>

      <Link to='/contact' className='md:col-start-3 border-black md:border-l-2
      flex gap-2 items-center justify-center text-lg
      bg-black text-white hover:bg-yellow-500 ease-in-out duration-75
      '>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
        </svg>
        Appointment
      </Link>

      <nav className='col-span-2 md:row-start-1 md:col-start-2
      md:col-end-3 border-t-2 border-black md:border-t-0 flex items-center
      justify-center'>

        <ul className='flex gap-6 max-w-sm overflow-auto
          snap-always p-4 text-lg
        '>
          <li>
            <NavLink to='/'
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/about' className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to='/services' className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }>
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to='/contact' className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }>
              Contact
            </NavLink>
          </li>
        </ul>

      </nav>
    </header>
  )
}

export default Header