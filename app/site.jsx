'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH;
const storageKey = 'faithbound-language';
const translations = {
  en: {
    language: 'Language', navigation: 'Main navigation', privacy: 'Privacy Policy', home: 'Back to home',
    intro: 'This policy covers the Faithbound website.',
    storageTitle: 'Language preference',
    storage: 'When you select a language, this site saves your choice in your browser so it can remember it on later visits. You can clear this preference in your browser’s site data settings.',
    hostingTitle: 'Hosting',
    hosting: 'GitHub Pages hosts this site. See the GitHub Privacy Statement for information about how GitHub processes personal data.',
    github: 'GitHub Privacy Statement',
  },
  'pt-BR': {
    language: 'Idioma', navigation: 'Navegação principal', privacy: 'Política de Privacidade', home: 'Voltar ao início',
    intro: 'Esta política se aplica ao site do Faithbound.',
    storageTitle: 'Preferência de idioma',
    storage: 'Ao selecionar um idioma, o site salva a escolha no seu navegador para lembrar dela em visitas futuras. Você pode apagar essa preferência nas configurações de dados do site do navegador.',
    hostingTitle: 'Hospedagem',
    hosting: 'Este site é hospedado no GitHub Pages. Consulte a Declaração de Privacidade do GitHub para saber como o GitHub trata dados pessoais.',
    github: 'Declaração de Privacidade do GitHub',
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
          <h1>{copy.privacy}</h1>
          <p>{copy.intro}</p>
          <h2>{copy.storageTitle}</h2>
          <p>{copy.storage}</p>
          <h2>{copy.hostingTitle}</h2>
          <p>{copy.hosting}</p>
          <p><a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement">{copy.github}</a></p>
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
