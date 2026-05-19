import React,{useState} from 'react'
import { Link } from 'react-router-dom'

function Navbar() {

  return (
    <>
    <nav className='bg-blue-500'>
      <div className='h-16 items-center flex justify-between'>
          {/* logo */}
          <div className='text-2xl text-white font-bold px-4 hover:text-blue-50' >Pradeep Bhosle</div>
          <div className='hidden sm:block'>
            <Link to="/" className='text-gray-100 text-lg px-8 hover:text-zinc-950'>Home</Link>
            <Link to="/housie" className='text-gray-100 text-lg px-4 hover:text-zinc-950'>Housie</Link>
            <Link to="/ticket" className='text-gray-100 text-lg px-4 hover:text-zinc-950'>ticket</Link>
            <Link to="/tailwindcss" className='text-gray-100 text-lg px-4 hover:text-zinc-950'>Tailwind CSS</Link>
          </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar