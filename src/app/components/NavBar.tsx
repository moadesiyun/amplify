import React from 'react'
import Image from 'next/image'
import logo from '../assets/images/logo.png'
import { relative } from 'path'
const NavBar = () => {
  return (
    <nav>
      <div className='flex flex-1 items-center justify-center md:items-stretch md:justify-start'>
          <a
            className='flex flex-shrink-0 items-center mr-4'
            >
              <Image src={logo} width={50} objectPosition='relative' objectFit='contains' alt='Custom Rug Maker' />
              <span className='hidden md:block text-white text-2xl font-bold ml-2'>
                Amplify.
              </span>
            </a>
            
          <a href='/index.html'
          className='text-white bg-purple hover:bg-purple-900 hover:text-white rounded-md px-3 py-2'
          >
            Library
          </a>
        <a href='/index.html'
          className='text-white hover:bg-purple-900 hover:text-white rounded-md px-3 py-2'
          >
            Recommender
          </a>
        <a href='/index.html'
          className='text-white hover:bg-purple-900 hover:text-white rounded-md px-3 py-2'
          >
            Profile
          </a>    
      </div>
    </nav>
  )
}

export default NavBar