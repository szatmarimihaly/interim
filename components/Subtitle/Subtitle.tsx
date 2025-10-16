import React from 'react'

type Props = {
    subtitleText : string
}

const Subtitle = ({ subtitleText } : Props) => {
  return (
    <>
        <h3 className='text-3xl text-center font-bold lg:text-6xl'>{subtitleText}</h3>
        <div className="relative w-[70%] h-[6px] mx-auto mt-4 mb-4">
            <div className="absolute inset-0 bg-black rounded-full shadow-[0_0_20px_rgba(0,0,0,1)]"></div>
        </div>
    </>
  )
}

export default Subtitle