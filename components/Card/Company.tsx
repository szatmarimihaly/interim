import React from 'react'
import { getTranslations } from 'next-intl/server'
import Image from 'next/image'
import NavigateToServices from '../Button/NavigateToServices'

interface CompanyItem {
  id: number
  title: string
  description: string
  image : string
  locale : string
}

interface CompanyProps {
  locale: string
  navigateMessage : string
}

const Company = async ({ locale, navigateMessage } : CompanyProps) => {
  const t = await getTranslations({ locale })
  
  // A fordított adatok lekérése
  const companies = t.raw('companies') as CompanyItem[]

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 mx-2'>
      {companies.map((item: CompanyItem) => (
        <article
          key={item.id}
          className='bg-white rounded-xl shadow-sm hover:shadow-lg py-10 px-6 flex flex-col items-center transition-all duration-300 hover:-translate-y-1 border border-gray-100'
        >
          <Image
            src={`/company/${item.image}.svg`}
            width={100}
            height={100}
            alt='Miért jó egy átmeneti vezető?'
          />
          <h5 className='text-xl lg:text-2xl font-semibold mb-4 text-gray-900 text-center'>
            {item.title}
          </h5>
          <p className='text-gray-600 text-center leading-relaxed text-sm lg:text-base'>
            {item.description}
          </p>
          <div className='flex items-center justify-end w-full'>
            <NavigateToServices href={`${locale}/szolgaltatas`} navigateMessage={navigateMessage}/>
          </div>
        </article>
      ))}
    </div>
  )
}

export default Company