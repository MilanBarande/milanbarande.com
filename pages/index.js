import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useState, useMemo } from 'react';
import cn from 'classnames';
import wording from '../constants/wording';
import { Github, Linkedin, Email } from '../components/Icons';
import Experience from '../components/Experience';
import Studies from '../components/Studies';
import useMobileDetect from 'use-mobile-detect-hook';

export default function Home() {
  const [selectedSection, setSelectedSection] = useState('resume');
  const [language, setLanguage] = useState('fr');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const { isMobile } = useMobileDetect();

  const isFrench = language === 'fr';
  const isEnglish = language === 'en';

  const { jobTitle, status, downloadCV, informations, skills, location, experience, years, availability, availabilityTime, openToFullRemote, yes, aboutMe, aboutMeText, workshopLead, resume, products, experiences, frontendDeveloper, fullTime, timePcd, timeCdcFree, timeCdcCdi, freelance, cdi, descriptionPcd, descriptionCdcCdi, descriptionWagon, timeWagon, timeBluenove, descriptionBluenove, mastersNeuroscience, bachelorKinesiology, education } = useMemo(() => wording[language],[language])

  return (
    <div className={styles.container}>
      <Head>
        <title>Milan Barande</title>
        <meta name="description" content="Personal website of Milan Barande" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main-container">
        <div className="grid gap-5 lg:grid-cols-3">
          <div className="space-y-5">
            <div className="shadow rounded-xl overflow-hidden">
              <div
                className={`h-32 bg-cover ${styles.cover}`}
              />
              <div className="pt-14 p-7 bg-white relative">
                <span className="status-badge bg-gray-400">{status}</span>
                <img
                  src="/avatar.png"
                  alt="Avatar"
                  className="user-photo"
                />
                <div className="text-lg font-semibold mb-1.5">
                  Milan Barande
                </div>
                <div className="text-sm text-gray-400 mb-5">
                  {jobTitle}
                </div>
                <ul className="flex space-x-5 mb-5">
                  <li>
                    <a href="https://github.com/MilanBarande" className="social-link-hover" target='_blank'>
                      <Github height={20} width={20} />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/milan-barande/" className="social-link-hover" target='_blank'>
                      <Linkedin height={20} width={20} />
                    </a>
                  </li>
                  <li>
                    <a href="mailto:milan.barande@gmail.com" className="social-link-hover" target='_blank'>
                      <Email height={20} width={20} />
                    </a>
                  </li>
                </ul>
                <div className="flex group">
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
                </div>
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
                  <div className="font-medium text-right text-gray-600">{yes}</div>
                </div>
                <div className="flex justify-between">
                  <div className="text-gray-400">Ouvert au temps partiel</div>
                  <div className="font-medium text-right text-gray-600">{yes}</div>
                </div>
              </div>
            </div>

            <div className="p-7 block-section flow-root">
              <h2 className="block-title">{skills}</h2>
              <div className="-m-2 flex flex-wrap">
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">HTML/CSS</span>
                <span className="skill-tag">React</span>
                <span className="skill-tag">NextJS</span>
                <span className="skill-tag">TypeScript</span>
                <span className="skill-tag">GraphQL</span>
                <span className="skill-tag">NodeJS</span>
                <span className="skill-tag">Python</span>
                <span className="skill-tag">React Native</span>
                <span className="skill-tag">Tailwind</span>
                <span className="skill-tag">Ethereum</span>
                <span className="skill-tag">Web 3</span>

                {/* TODO: ADD LOGO OF EACH TECHNOLOGY? */}
              </div>
            </div>
          </div>

          <div className="space-y-5 lg:col-span-2">
            <div className="p-7 pb-0 block-section">
              <h2 className="block-title">{aboutMe}</h2>
              <p className="text-gray-600 mb-5 pb-5 text-justify" dangerouslySetInnerHTML={{ __html: aboutMeText }} />

              {/* <div className="flex flex-col space-y-4 pb-5">
                <a href="#0" className="mail-link social-link-hover">
                  <i className="bx bx-at text-xl"></i>
                  <span>milan.barande@gmail.com</span>
                </a>
              </div> */}

              {/* <div className="border-t border-gray-200 my-5"></div>

              <ul className="flex space-x-8 font-medium">
                <li>
                  <span
                    className="menu-link menu-link-hover cursor-pointer"
                  >
                    {resume}
                  </span>
                </li>
                <li>
                  <span
                    className="menu-link menu-link-hover cursor-pointer"
                    // manage 'currently open state'
                  >
                    {products}
                  </span>
                </li>
              </ul> */}
            </div>
            <div className="p-7 block-section">
              <h2 className="block-title">{experience}</h2>
              <Experience
                jobTitle={frontendDeveloper}
                employer="Parfums Christian Dior"
                location="Paris, France"
                dates={timePcd}
                status={freelance}
                time={fullTime}
                logo='pcd'
              />
              <div className="border-b border-gray-200 mb-5 mt-5"></div>
              <Experience
                jobTitle={frontendDeveloper}
                employer="Christian Dior Couture"
                location="Paris, France"
                dates={timeCdcFree}
                status={freelance}
                time={fullTime}
                logo='cdc'
              />
              <div className="border-b border-gray-200 mb-5 mt-5"></div>
              <Experience
                jobTitle={frontendDeveloper}
                employer="Christian Dior Couture"
                location="Paris, France"
                dates={timeCdcCdi}
                status={cdi}
                time={fullTime}
                description={descriptionCdcCdi}
                logo='cdc'
              />
              <div className="border-b border-gray-200 mb-5 mt-5"></div>
              <Experience
                jobTitle={workshopLead}
                employer="Le Wagon Paris"
                location="Paris, France"
                dates={timeWagon}
                status={freelance}
                description={descriptionWagon}
                logo='wagon'
              />
              <Experience
                jobTitle={frontendDeveloper}
                employer="Bluenove"
                location="Paris, France"
                dates={timeBluenove}
                status={cdi}
                time={fullTime}
                description={descriptionBluenove}
                logo='bluenove'
              />
            </div>

            <div className="p-7 block-section">
              <h2 className="block-title">{education}</h2>
              <Studies
                title='Web Development Bootcamp'
                dates='2017'
                location='Montréal, Québec'
                logo='wagon'
                school='Le Wagon Montréal'
              />
              <Studies
                title="Research Assistant at the PERFORM Center Sleep Lab"
                logo='concordia'
                school='Concordia University'
                location='Montréal, Québec'
                dates='2016 - 2017'
              />
              <Studies
                title={mastersNeuroscience}
                school='Université de Montréal'
                dates='2016 - 2017'
                location='Montréal, Québec'
                logo='udem'
              />
              <Studies
                title={bachelorKinesiology}
                school='Université de Montréal'
                dates='2013 - 2016'
                location='Montréal, Québec'
                logo='udem'
              />
            </div>
          </div>
        </div>
        <div className='flex justify-between space-x-3 text-2xl fixed top-2.5 right-5'>
          <span className={cn('cursor-pointer', {['opacity-100']: isFrench, ['opacity-40']: !isFrench, ['text-3xl']: isMobile(), ['text-2xl']: !isMobile() })} onClick={() => setLanguage('fr')}>🇫🇷</span>
          <span className={cn('cursor-pointer', {['opacity-100']: isEnglish, ['opacity-40']: !isEnglish, ['text-3xl']: isMobile(), ['text-2xl']: !isMobile() })} onClick={() => setLanguage('en')}>🇬🇧</span>
        </div>
      </main>
    </div>
  );
}
