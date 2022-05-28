import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useState, useMemo, Fragment, useCallback, useEffect } from 'react';
import cn from 'classnames';
import wording from '../constants/wording';
import { Github, Linkedin, Email } from '../components/Icons';
import Experience from '../components/Experience';
import Studies from '../components/Studies';
import useMobileDetect from 'use-mobile-detect-hook';
import {
  experiencesData,
  skillsData,
  studiesData,
  languagesData
} from '../constants/data';

export default function Home() {
  const [selectedSection, setSelectedSection] = useState('resume');
  const [language, setLanguage] = useState('fr');

  useEffect(function getBrowserLanguage() {
    const browserLanguage = window.navigator.language.split('-')[0];
    if (browserLanguage === 'fr') {
      return setLanguage('fr');
    }
    // fallback to english for any other browser language
    setLanguage('en');
  }, []);

  const { isMobile } = useMobileDetect();

  const isFrench = language === 'fr';
  const isEnglish = language === 'en';

  const getWording = useCallback(
    wordingKey => wording[language][wordingKey],
    [language]
  );

  const {
    resume,
    portfolio,
    jobTitle,
    status,
    informations,
    skills,
    location,
    experience,
    years,
    availability,
    availabilityTime,
    openToFullRemote,
    yes,
    aboutMe,
    aboutMeText,
    openToPartTime,
    education,
    languages
  } = useMemo(() => wording[language], [language]);

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
                <span className="status-badge bg-gray-400">{status}</span>
                <img src="/avatar.jpeg" alt="Avatar" className="user-photo" />
                <div className="text-lg font-semibold mb-1.5">
                  Milan Barande
                </div>
                <div className="text-sm text-gray-400 mb-5">{jobTitle}</div>
                <ul className="flex space-x-5">
                  <li>
                    <a
                      href="https://github.com/MilanBarande"
                      className="social-link-hover"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Github height={20} width={20} />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/milan-barande/"
                      className="social-link-hover"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Linkedin height={20} width={20} />
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:milan.barande@gmail.com"
                      className="social-link-hover"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Email height={20} width={20} />
                    </a>
                  </li>
                </ul>
                {/* <div className="flex group">
                  <button className="download-btn">{downloadCV}</button>
                  <button className="download-btn-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.8"
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>
                  </button>
                </div> */}
              </div>
            </div>

            <div className="p-7 block-section">
              <h2 className="block-title">{informations}</h2>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <div className="text-gray-400">{location}</div>
                  <div className="font-medium text-right text-gray-600">
                    Paris, France
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="text-gray-400">{experience}</div>
                  <div className="font-medium text-right text-gray-600">
                    {years}
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="text-gray-400">{availability}</div>
                  <div className="font-medium text-right text-gray-600">
                    {availabilityTime}
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="text-gray-400">{openToFullRemote}</div>
                  <div className="font-medium text-right text-gray-600">
                    {yes}
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="text-gray-400">{openToPartTime}</div>
                  <div className="font-medium text-right text-gray-600">
                    {yes}
                  </div>
                </div>
              </div>
            </div>

            <div className="p-7 block-section flow-root">
              <h2 className="block-title">{skills}</h2>
              <div className="-m-2 flex flex-wrap">
                {skillsData.map(skill => (
                  <span className="skill-tag" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-7 block-section flow-root">
              <h2 className="block-title">{languages}</h2>
              <div className="-m-2 flex flex-wrap">
                {languagesData.map(l => (
                  <span className="skill-tag" key={getWording(l)}>
                    {getWording(l)}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-5 lg:col-span-2">
            <div className="p-7 pb-0 block-section">
              <h2 className="block-title">{aboutMe}</h2>
              <p
                className="text-gray-600 mb-5 pb-5 text-justify"
                dangerouslySetInnerHTML={{ __html: aboutMeText }}
              />

              <div className="border-t border-gray-200 my-5"></div>
              <ul className="flex space-x-8 font-medium">
                <li>
                  <button
                    onClick={() => setSelectedSection('resume')}
                    className={cn('menu-link menu-link-hover cursor-pointer', {
                      'menu-link-active': selectedSection === 'resume'
                    })}
                  >
                    {resume}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setSelectedSection('portfolio')}
                    className={cn('menu-link menu-link-hover cursor-pointer', {
                      'menu-link-active': selectedSection === 'portfolio'
                    })}
                  >
                    {portfolio}
                  </button>
                </li>
              </ul>
            </div>
            {selectedSection === 'resume' ? (
              <>
                <div className="p-7 block-section">
                  <h2 className="block-title">{experience}</h2>
                  {experiencesData.map(
                    (
                      {
                        jobTitle,
                        employer,
                        location,
                        description,
                        dates,
                        status,
                        time,
                        logo,
                        withSeparator
                      },
                      index
                    ) => (
                      <Fragment key={`${jobTitle}-${index}`}>
                        <Experience
                          jobTitle={getWording(jobTitle)}
                          employer={employer}
                          location={location}
                          dates={getWording(dates)}
                          time={getWording(time)}
                          status={getWording(status)}
                          description={getWording(description)}
                          logo={logo}
                        />
                        {withSeparator && (
                          <div className="border-b border-gray-200 mb-5 mt-5" />
                        )}
                      </Fragment>
                    )
                  )}
                </div>
                <div className="p-7 block-section">
                  <h2 className="block-title">{education}</h2>
                  {studiesData.map(
                    ({ title, dates, location, logo, school }, index) => (
                      <Studies
                        title={getWording(title)}
                        dates={dates}
                        location={location}
                        logo={logo}
                        school={school}
                        key={getWording(title)}
                        isLast={index + 1 === studiesData.length}
                      />
                    )
                  )}
                </div>
              </>
            ) : (
              <div className="ml-7">Coming soon</div>
            )}
          </div>
        </div>
        <div className="flex justify-between space-x-3 text-2xl fixed top-2.5 right-5">
          <button
            className={cn('cursor-pointer', {
              ['opacity-100']: isFrench,
              ['opacity-40']: !isFrench,
              ['text-3xl']: isMobile(),
              ['text-2xl']: !isMobile()
            })}
            onClick={() => setLanguage('fr')}
          >
            🇫🇷
          </button>
          <button
            className={cn('cursor-pointer', {
              ['opacity-100']: isEnglish,
              ['opacity-40']: !isEnglish,
              ['text-3xl']: isMobile(),
              ['text-2xl']: !isMobile()
            })}
            onClick={() => setLanguage('en')}
          >
            🇬🇧
          </button>
        </div>
      </main>
    </div>
  );
}
