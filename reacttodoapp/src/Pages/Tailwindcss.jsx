import React from 'react'
import { IoCloseCircleOutline } from "react-icons/io5";


const Tailwindcss = () => {
  return (
    <>
      <div>
        <main>
          <div className='grid grid-cols-4 gap-1 mt-1 p-1 max-sm:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6'>
            <div className='bg-red-300  py-3 text- font-bold text-center'>
              <h5>1</h5>
            </div>

            <div className='bg-blue-300 py-3 font-bold text-center'>
              <h5>2</h5>
            </div>

            <div className='bg-green-300 py-3 font-bold text-center '>
              <h5>3</h5>
            </div>

            <div className='bg-orange-300 py-3 font-bold text-center'>
              <h5>4</h5>
            </div>

            <div className='bg-teal-300 py-3 font-bold text-center'>
              <h5>5</h5>
            </div>

            <div className='bg-yellow-300 py-3 font-bold text-center'>
              <h5>6</h5>
            </div>

            <div className='bg-slate-300 py-3 font-bold text-center'>
              <h5>7</h5>
            </div>

            <div className='bg-pink-300 py-3 font-bold text-center'>
              <h5>8</h5>
            </div>

            <div className='bg-amber-300 py-3 font-bold text-center'>
              <h5>9</h5>
            </div>

            <div className='bg-violet-300 py-3 font-bold text-center hover:bg-amber-500 focus:bg-red-500 active:bg-green-500 cursor-pointer'>
              <h5>10</h5>
            </div>

            <div className='bg-cyan-300 py-3 font-bold text-center'>
              <h5>11</h5>
            </div>

            <div className='bg-fuchsia-300 py-3 font-bold text-center'>
              <h5>12</h5>
            </div>

            
          </div>

         
        </main>

         <div className='flex flex-row gap-1 p-1'>
            <div className='bg-cyan-300 py-3 font-bold text-center w-sm'>
              <h5>11</h5>
            </div>

            <div className='bg-fuchsia-300 py-3 font-bold text-center w-sm'>
              <h5>12</h5>
            </div>

            <div className='bg-amber-300 py-3 font-bold text-center w-sm'>
              <h5>13</h5>
            </div>

            <div className='bg-blue-300 py-3 font-bold text-center w-sm'>
              <h5>14</h5>
            </div>

          </div>

          <div className='container m-auto w-125'>
            <form className='group'>
              <div className='flex flex-col space-y-4'>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" className='focus:ring-2 focus:ring-blue-500 border p-2 rounded hover:border border-green-300' />

              </div>
            </form>
            
          </div>

          <div className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative p-4'>
            <strong className='font-bold'>Error ! </strong>
            <span className='block sm:inline'>This is an error message.</span>
            <span className='absolute top-0 bottom-0 right-0 px-4 py-3'>
              <IoCloseCircleOutline className='fill-current h-6 w-6 text-red-500' />
            </span>
          </div>


    
      </div>
    </>
  )
}

export default Tailwindcss