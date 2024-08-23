import React from 'react'

function Page() {
  return (
    <div bg-zinc-100>
        <div className='flex justify-center items-center  w-full h-full'>
        
        <div className='p-20'>
        <h1 className='text-7xl font-semibold '>The future of <span className='text-blue-500'>money </span>is here</h1>
        <p className='text-xl mt-3 text-slate-600'>We're the most trusted place for people and businesses to buy, sell, and manage crypto.</p>

        <div className='flex p-12 justify-center '>
            <button className='px-5 py-3 text-xl text-white font-semibold rounded-md  bg-blue-600 '>Google Sign In</button>
        </div>
        </div>
        <img className='w-1/3 h-2/3 absolute top-2/4' src="https://images.ctfassets.net/c5bd0wqjc7v0/6TEOvIYU6qtgLm87Y4mK5s/4171df02eabc835c518884c2b3476380/hero_3x_B.png?fm=webp&q=100&w=1180" alt="" />
        </div>

        
    </div>
  )
}

export default Page