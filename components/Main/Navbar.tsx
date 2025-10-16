'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import LanguageSwitcher from '../LanguageSwitcher'
import { useTranslations } from 'next-intl'

import DragHandleOutlinedIcon from '@mui/icons-material/DragHandleOutlined'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined'

const SUPPORTED_LOCALES = ['hu', 'en']

type Props = {
    locale : string
}

export default function Navbar({ locale } : Props) {
  const t = useTranslations()
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => setIsOpen(!isOpen)

  const normalizedPath = React.useMemo(() => {
    if (!pathname) return '/'
    const parts = pathname.split('/').filter(Boolean)
    const first = parts[0]
    if (SUPPORTED_LOCALES.includes(first)) {
      return '/' + (parts[1] ? parts.slice(1).join('/') : '')
    }
    return pathname
  }, [pathname])

  const getLinkClass = (path: string) => {
    const isHome =
      path === '/' && SUPPORTED_LOCALES.some(locale => pathname === `/${locale}`)
    const isActive = isHome || normalizedPath === path
    return `hover:text-blue-700 transition-all duration-300 ${
      isActive ? 'text-blue-700 font-bold' : ''
    }`
  }

  return (
    <nav className='mx-2 lg:mt-4 lg:mx-4'>
      <div className={`flex flex-col ${isOpen ? 'pb-4' : ''}`}>
        <div className='flex justify-between items-center'>
          <Image
            src='/smteam.webp'
            width={120}
            height={120}
            alt='Cégünk Interim Management területen tevékenykedik Budapesten'
            priority
          />

          <div className='hidden lg:flex space-x-8 text-xl'>
            <Link href='.' className={getLinkClass('/')}>
              {t('homeText')}
            </Link>
            <Link href={`/${locale}/rolunk`} className={getLinkClass('/rolunk')}>
              {t('aboutText')}
            </Link>
            <Link href={`/${locale}/szolgaltatas`} className={getLinkClass('/szolgaltatas')}>
              {t('serviceText')}
            </Link>
            <Link href={`/${locale}/kapcsolat`} className={getLinkClass('/kapcsolat')}>
              {t('contactText')}
            </Link>
          </div>

          <div className='hidden lg:block'>
            <LanguageSwitcher />
          </div>

          <div className='lg:hidden'>
            <button onClick={toggleMenu} aria-label='Toggle Menu'>
              {isOpen ? <CloseOutlinedIcon sx={{ fontSize:50 }}/> : <DragHandleOutlinedIcon sx={{ fontSize:50 }}/>}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className='flex flex-col items-start space-y-6 lg:hidden'>
            <Link href='/' onClick={() => setIsOpen(false)} className={getLinkClass('/')}>
              {t('homeText')}
            </Link>
            <Link href={`/${locale}/rolunk`} onClick={() => setIsOpen(false)} className={getLinkClass('/rolunk')}>
              {t('aboutText')}
            </Link>
            <Link href={`/${locale}/szolgaltatas`} onClick={() => setIsOpen(false)} className={getLinkClass('/szolgaltatas')}>
              {t('serviceText')}
            </Link>
            <Link href={`/${locale}/kapcsolat`} onClick={() => setIsOpen(false)} className={getLinkClass('/kapcsolat')}>
              {t('contactText')}
            </Link>
            <LanguageSwitcher />
          </div>
        )}
      </div>
    </nav>
  )
}
