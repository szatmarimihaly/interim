import React from 'react'
import { Metadata } from 'next'

export const metadata : Metadata = {
  title: "Kapcsolat | SMTEAM Interim Management Budapest",
  description: "Lépjen kapcsolatba az SMTEAM csapatával, hogy interim management szolgáltatásainkról érdeklődjön vagy árajánlatot kérjen.",
  keywords : ["interim management kapcsolat", "kapcsolat SMTEAM", "Budapesti interim vezető", "interim szolgáltatás érdeklődés", "árajánlat kérése","átmeneti vezető elérhetőség", "Budapest"],
  openGraph: {
    title: "Kapcsolat | SMTEAM Interim Management Budapest",
    description: "Lépjen kapcsolatba az SMTEAM csapatával Budapesten, hogy interim management szolgáltatásainkról érdeklődjön vagy árajánlatot kérjen.",
    url: "https://www.smteam.hu/kapcsolat",
    siteName: "SMTEAM",
    locale: "hu_HU",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
}

const Page = () => {
  return (
    <div>Kapcsolat</div>
  )
}

export default Page