import React from 'react'
import Link from 'next/link'

type Props = {
    href : string,
    linkPlaceHolder : string
}

const ButtonBlack = ({ href, linkPlaceHolder } : Props) => {
  return (
    <Link href={href} className='bg-blue-700 border-2 border-blue-700 text-white px-6 py-2 rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 text-lg font-bold'>
        {linkPlaceHolder}
    </Link>
  )
}

export default ButtonBlack