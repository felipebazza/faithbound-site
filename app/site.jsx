'use client';

import Image from 'next/image';
import Link from 'next/link';
import PrivacyContent from './privacy-policy/content';
import { useEffect, useState } from 'react';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH;
const storageKey = 'faithbound-language';
const translations = {
  en: {
    language: 'Language', navigation: 'Main navigation', privacy: 'Privacy Policy', home: 'Back to home',
  },
  'pt-BR': {
    language: 'Idioma', navigation: 'Navegação principal', privacy: 'Política de Privacidade', home: 'Voltar ao início',
  },
};

export default function Site({ privacy = false }) {
  const [locale, setLocale] = useState('en');
  const copy = translations[locale];

  useEffect(() => {
    try {
      if (localStorage.getItem(storageKey) === 'pt-BR') setLocale('pt-BR');
    } catch {
      // The selector still works when storage is unavailable.
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.title = privacy ? `${copy.privacy} | Faithbound` : 'Faithbound';
  }, [locale, privacy, copy.privacy]);

  function changeLanguage(event) {
    const value = event.target.value;
    setLocale(value);
    try {
      localStorage.setItem(storageKey, value);
    } catch {
      // The current language remains active until navigation.
    }
  }

  return (
    <div className={`site ${privacy ? 'policy-page' : ''}`}>
      <Image className="scene" src={`${basePath}/valley.webp`} alt="" fill preload sizes="100vw" />
      <div className="shade" aria-hidden="true" />
      <div className="frame" aria-hidden="true" />
      <header className="topbar">
        <div className="language">
          <span className="globe" aria-hidden="true" />
          <select aria-label={copy.language} value={locale} onChange={changeLanguage}>
            <option value="en" lang="en">English</option>
            <option value="pt-BR" lang="pt-BR">Português</option>
          </select>
        </div>
      </header>
      {privacy ? (
        <main className="policy">
          <h1>{copy.privacy} — Faithbound</h1>
          <PrivacyContent locale={locale} />
          <Link className="menu-link" href="/">{copy.home}</Link>
        </main>
      ) : (
        <main className="home">
          <Image className="crest" src={`${basePath}/faithbound-logo.webp`} alt="" width={850} height={492} preload />
          <h1>Faithbound</h1>
          <div className="divider" aria-hidden="true"><span /></div>
          <nav className="floating-menu" aria-label={copy.navigation}>
            <Link className="menu-link" href="/privacy-policy/">
              <span className="lock" aria-hidden="true" />
              {copy.privacy}
            </Link>
          </nav>
        </main>
      )}
    </div>
  );
}
