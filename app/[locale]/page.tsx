// app/[locale]/page.tsx
import { getTranslations } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { Metadata } from 'next';

type Locale = (typeof routing.locales)[number];

export const metadata : Metadata = {
  title : "SMTEAM Interim Management Budapest | Professzionális átmeneti cégvezetők",
  description : "SMTEAM interim management szolgáltatás Budapesten. Tapasztalt átmeneti vezetőink segítik cégeket stratégiai és operatív kihívások megoldásában.",
  keywords : ["interim management", "interim vezető", "átmeneti vezető", "átmeneti menedzsment", "ideiglenes vezető", "projektvezető", "üzleti tanácsadás", "vezetői támogatás", "vállalati átmenet", "vezetői átmenet", "cégátmenet", "Budapest"],
  openGraph: {
    title: "SMTEAM Interim Management Budapest | Professzionális átmeneti cégvezetők",
    description: "SMTEAM interim management szolgáltatás Budapesten. Tapasztalt átmeneti vezetőink segítik cégeket stratégiai és operatív kihívások megoldásában.",
    url: "https://www.smteam.hu/",
    siteName: "SMTEAM",
    locale: "hu_HU",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },

}

export default async function Page({ params }: { params: { locale: Locale } }) {
  const { locale } = await Promise.resolve(params);
  const t = await getTranslations({ locale });

  return (
    <>

    </>
  );
}
