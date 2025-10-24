import React from 'react'
import Link from 'next/link'

type Props = {
    href : string
    navigateMessage : string
}

const NavigateToServices = ({ href, navigateMessage } : Props) => {
  return (
    <Link
        href={href}
        className='mt-20 flex items-center px-4 py-2 rounded-full text-xl border-2 border-gray-200 shadow-2xl'
    >
        {navigateMessage}
    </Link>
  )
}

export default NavigateToServices