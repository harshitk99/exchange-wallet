import React from 'react'

function Nav() {
  return (
    <div className='w-full h-24 bg-slate-200  flex justify-between items-center'>
        <div className='flex items-center p-5 text-white text-2xl bg-blue-500 rounded-md p-2 ml-4'>
            <img className='w-18 h-10 object-cover' src="https://images.ctfassets.net/c5bd0wqjc7v0/5o0IbUnXunFKmiSC31gK6j/c9da092eda3ebc34941dfa3d107437f4/Type_Circles_4x.png?fm=webp&q=100&w=1180" alt="" />
        <h1 className='rounded-md font-semibold '>DC-EXCHANGE </h1>
        </div>
        <div className='flex gap-x-2 mr-7'>
        <button className='px-4 py-2 rounded-full bg-blue-500 text-white font-semibold '>Login</button>
        <button className='px-4 py-2 rounded-full bg-blue-500 text-white font-semibold '>Signup</button>
        </div>
    </div>
  )
}

export default Nav