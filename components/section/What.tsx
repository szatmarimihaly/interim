import React from 'react'
import Image from 'next/image'

type Props = {
    whatDo : string
    whatP : string
}

const What = ({ whatDo, whatP } : Props) => {
  return (
    <div className='bg-black text-white px-4 py-10 flex flex-col justify-evenly lg:flex-row items-center gap-10'>
        <div className='flex flex-col'>
            <h1 className='border-l-6 rounded border-w px-8 py-6 text-3xl lg:text-4xl'>{whatDo}</h1>
            <p className='text-gray-400 mt-10 text-justify leading-relaxed px-4 text-lg'>{whatP}</p>
        </div>

        <Image 
            src={"/table.webp"}
            width={400}
            height={400}
            alt='Mit csinál egy projetkvezető?'
            className='rounded'
        />
    </div>
  )
}

export default What