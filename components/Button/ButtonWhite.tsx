import React from 'react'
import Link from 'next/link'

type Props = {
    href : string,
    linkPlaceHolder : string
}

const ButtonWhite = ({ href, linkPlaceHolder } : Props) => {
  return (
    <Link href={href} className='border-2 border-gray-600 px-4 py-2 rounded shadow-lg transition-all duration-300 hover:scale-105 text-lg font-bold'>
        {linkPlaceHolder}
    </Link>
  )
}

export default ButtonWhite