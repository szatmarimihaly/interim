'use client';


import Link from 'next/link';
import { useParams } from 'next/navigation'
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined'

export default function LanguageSwitcher() {
  const { locale } = useParams();
  const nextLocale = locale === 'en' ? 'hu' : 'en';

  return (
    <Link 
  href={`/${nextLocale}`} 
  prefetch
  className="group relative flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 hover:border-gray-300 transition-all duration-200 hover:shadow-md"
>
  <PublicOutlinedIcon 
    className="text-gray-600 group-hover:text-gray-900 transition-colors duration-200" 
    sx={{ fontSize: 20 }}
  />
  <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs font-medium text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
    {locale === 'en' ? 'HU' : 'EN'}
  </span>
</Link>
  );
}
