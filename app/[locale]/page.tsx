// app/[locale]/page.tsx
import { getTranslations } from 'next-intl/server'
import { routing } from '@/i18n/routing'
import { Metadata } from 'next';

import MainHero from '@/components/Hero.tsx/MainHero'
import ButtonWhite from '@/components/Button/ButtonWhite'
import ButtonBlack from '@/components/Button/ButtonBlack'
import What from '@/components/section/What';

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
      <section className='mt-20 flex flex-col items-center'>
        <MainHero subHero={t('subHero')}/>
        <div className='flex items-center gap-4 mt-8'>
          <ButtonBlack href={`/${locale}/szolgaltatas`} linkPlaceHolder={t("toSzolgaltatas")}/>
          <ButtonWhite href={`/${locale}/kapcsolat`} linkPlaceHolder={t("toKapcsolat")}/>
        </div>
      </section>

      <section className='mt-20'>
        <What whatDo={t('whatDo')} whatP={t('whatP')}/>
      </section>
    </>
  );
}
