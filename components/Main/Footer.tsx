'use client'
import React from 'react'
import { useTranslations } from 'next-intl'
import Link from 'next/link' 
import Image from 'next/image'

type Props = {
  locale : string
}

const Footer = ({ locale } : Props) => {

  const t = useTranslations()

  return (
    <section className='bg-black px-4 py-10 text-gray-300 flex flex-col items-center justify-between gap-10 lg:flex-row lg:gap-0 text-lg rounded-t-4xl'>
      <Image 
        src={'/smteam.webp'}
        width={100}
        height={100}
        alt='Interim Management Budapest'
        className='rounded-full'
      />
      
      <Link
        href={`/${locale}`}
      >
        {t('homeLink')}
      </Link>

      <Link
        href={`/${locale}/rolunk`}
      >
        {t('aboutLink')}
      </Link>

      <Link
        href={`/${locale}/szolgaltatas`}
      >
        {t('serviceLink')}
      </Link>

      <Link
        href={`/${locale}/kapcsolat`}
      >
        {t('contactLink')}
      </Link>
      <p className='mt-10 lg:mt-0'>{t('copyRight')}</p>
    </section>
  )
}

export default Footer