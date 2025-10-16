import React from 'react'
import { Metadata } from 'next'

export const metadata : Metadata = {
  title: "Szolgáltatások | SMTEAM Interim Management Budapest",
  description : "Fedezze fel SMTEAM interim management szolgáltatásait: átmeneti vezetői támogatás, projektmenedzsment, üzleti fejlesztés Budapesten.",
  keywords : ["interim management szolgáltatás", "átmeneti vezetői támogatás", "projektmenedzsment", "operatív interim vezető", "HR interim vezető","stratégiai tanácsadás", "változásmenedzsment", "üzleti fejlesztés", "Budapest interim management"],
  openGraph: {
    title: "Szolgáltatások | SMTEAM Interim Management Budapest",
    description: "Ismerje meg SMTEAM interim management szolgáltatásait: átmeneti vezetői támogatás, projektmenedzsment, üzleti fejlesztés Budapesten.",
    url: "https://www.smteam.hu/szolgaltatasok",
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
    <div>Szolgáltatások</div>
  )
}

export default Page