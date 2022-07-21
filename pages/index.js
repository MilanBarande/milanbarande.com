import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useState, useEffect } from 'react';
import wording from '../constants/wording';
import { skillsData, languagesData } from '../constants/data';
import {
  Resume,
  Portfolio,
  SocialLinks,
  Informations,
  LanguageButtons,
  StyledList,
  Tabs,
  DownloadCvButton
} from '../components';

export default function Home() {
  const [selectedSection, setSelectedSection] = useState('resume');
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

  const {
    jobTitle,
    status,
    skills,
    aboutMe,
    aboutMeText,
    languages,
    downloadCV
  } = wording[language];

  return (
    <div className={styles.container}>
      <Head>
        <title>Milan Barande</title>
        <meta name="description" content="Personal website of Milan Barande" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className="main-container">
        <div className="grid gap-5 lg:grid-cols-3">
          <div className="space-y-5">
            <div className="shadow rounded-xl overflow-hidden">
              <div className={`h-32 bg-cover ${styles.cover}`} />
              <div className="pt-14 p-7 bg-white relative">
                <span className="status-badge bg-green-400">{status}</span>
                <img src="/avatar.jpeg" alt="Avatar" className="user-photo" />
                <div className="text-lg font-semibold mb-1.5">
                  Milan Barande
                </div>
                <div className="text-sm text-gray-400 mb-5">{jobTitle}</div>
                <SocialLinks />
                <DownloadCvButton language={language} ctaWording={downloadCV} />
              </div>
            </div>
            <Informations getWordingByKey={getWordingByKey} />
            <StyledList title={skills} elements={skillsData} />
            <StyledList
              title={languages}
              elements={languagesData}
              getWordingByKey={getWordingByKey}
            />
          </div>
          <div className="space-y-5 lg:col-span-2">
            <div className="p-7 pb-0 block-section">
              <h2 className="block-title">{aboutMe}</h2>
              <p
                className="text-gray-600 mb-5 text-justify"
                dangerouslySetInnerHTML={{ __html: aboutMeText }}
              />
              <div className="border-t border-gray-200 my-5"></div>
              <Tabs
                sections={['resume', 'portfolio']}
                selectedSection={selectedSection}
                setSelectedSection={setSelectedSection}
                getWordingByKey={getWordingByKey}
              />
            </div>
            {selectedSection === 'resume' ? (
              <Resume getWordingByKey={getWordingByKey} />
            ) : (
              <Portfolio getWordingByKey={getWordingByKey} />
            )}
          </div>
        </div>
        <LanguageButtons language={language} setLanguage={setLanguage} />
      </main>
    </div>
  );
}
