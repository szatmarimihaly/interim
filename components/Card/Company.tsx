import React from 'react'
import { getTranslations } from 'next-intl/server'
import Image from 'next/image'

interface CompanyItem {
  id: number
  title: string
  description: string
  image : string
  locale : string
}

interface CompanyProps {
  locale: string
}

const Company = async ({ locale } : CompanyProps) => {
  const t = await getTranslations({ locale })
  
  // A fordított adatok lekérése
  const companies = t.raw('companies') as CompanyItem[]

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 mx-2'>
      {companies.map((item: CompanyItem) => (
        <article
          key={item.id}
          className='border-2 border-gray-400 rounded shadow-xl py-8 px-4 flex flex-col items-center transition-all duration-300 hover:scale-102'
        >
          <h5 className='text-xl lg:text-3xl font-bold mb-8'>{item.title}</h5>
          <p>{item.description}</p>
          <Image
            src={`/company/${item.image}.svg`}
            width={100}
            height={100}
            alt='Miért jó egy átmeneti vezető?'
          />
        </article>
      ))}
    </div>
  )
}

export default Company