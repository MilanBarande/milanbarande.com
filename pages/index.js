import Head from 'next/head';
import { useState, useEffect } from 'react';
import wording from '../constants/wording';
import { skillsData, languagesData } from '../constants/data';
import {
  Informations,
  LanguageButtons,
  StyledList,
  ProfileCard,
  MainContent
} from '../components';

export default function Home() {
  const [language, setLanguage] = useState('FR');

  useEffect(function getBrowserLanguage() {
    const browserLanguage = window.navigator.language.split('-')[0];
    if (browserLanguage === 'FR') {
      return setLanguage('FR');
    }
    // fallback to english for any other browser language
    setLanguage('EN');
  }, []);

  const getWordingByKey = wordingKey => wording[language][wordingKey];

  const { skills, languages } = wording[language];

  return (
    <>
      <Head>
        <title>Milan Barande</title>
        <meta name="description" content="Personal website of Milan Barande" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className="main-container">
        <div className="grid gap-5 lg:grid-cols-3">
          <div className="space-y-5">
            <ProfileCard getWordingByKey={getWordingByKey} />
            <Informations getWordingByKey={getWordingByKey} />
            <StyledList title={skills} elements={skillsData} />
            <StyledList
              title={languages}
              elements={languagesData}
              getWordingByKey={getWordingByKey}
            />
          </div>
          <MainContent getWordingByKey={getWordingByKey} />
        </div>
        <LanguageButtons language={language} setLanguage={setLanguage} />
      </main>
    </>
  );
}
