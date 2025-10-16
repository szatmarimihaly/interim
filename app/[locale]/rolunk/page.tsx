import React from 'react'
import { Metadata } from 'next'


export const metadata : Metadata = {
  title: "Rólunk | SMTEAM Interim Management Budapest",
  description : "Ismerje meg az SMTEAM csapatát, tapasztalt interim vezetőinket, akik Budapesten segítik vállalatok sikerét átmeneti vezetői pozíciókban.",
  keywords : [ "interim vezetők Budapesten", "tapasztalt interim vezetők", "SMTEAM csapat", "átmeneti menedzsment", "üzleti tanácsadás", "cégvezetés támogatás", "Budapest"],
  openGraph: {
    title: "Rólunk | SMTEAM Interim Management Budapest",
    description: "Ismerje meg az SMTEAM csapatát, tapasztalt interim vezetőinket, akik Budapesten segítik vállalatok sikerét átmeneti vezetői pozíciókban.",
    url: "https://www.smteam.hu/rolunk",
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
    <div>Rólunk</div>
  )
}

export default Page