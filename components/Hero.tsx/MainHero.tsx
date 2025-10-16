import React from 'react'

type Props = {
    subHero : string
}

const MainHero = ({ subHero } : Props) => {


  return (
    <div className='w-full max-w-5xl px-10 py-2 mx-auto flex flex-col items-center'>
        <h1 className='text-4xl md:text-6xl text-center font-semibold'>Interim Management</h1>
        <div className="relative w-[70%] h-[6px] mx-auto mt-4 mb-4">
            <div className="absolute inset-0 bg-black rounded-full shadow-[0_0_20px_rgba(0,0,0,1)]"></div>
        </div>
        <div className='flex items-center gap-2'>
            <p className='text-md md:text-2xl text-gray-700'>{subHero}</p>
        </div>
    </div>
  )
}

export default MainHero