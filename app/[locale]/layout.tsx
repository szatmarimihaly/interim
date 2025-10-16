// app/[locale]/layout.tsx
import { NextIntlClientProvider } from 'next-intl'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import type { ReactNode } from 'react'
import Navbar from '@/components/Main/Navbar'
import Footer from '@/components/Main/Footer'
import '../globals.css'
import { Poppins } from 'next/font/google'

const poppins  = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})


type Locale = (typeof routing.locales)[number];

export default async function LocaleLayout({
  children,
  params
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  const messages = (await import(`../../messages/${locale}.json`)).default;

  return (
    <html lang={locale} className={poppins.className}>
      <body>
        <NextIntlClientProvider locale={locale as Locale} messages={messages}>
          <header>
            <Navbar locale={locale}/>
          </header>
          <main>{children}</main>
          <footer className='mt-40'>
            <Footer />
          </footer>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
