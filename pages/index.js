import Head from 'next/head';
import { skillsData, languagesData } from '../constants/data';
import {
  Informations,
  LanguageButtons,
  StyledList,
  ProfileCard,
  MainContent
} from '../components';
import wordingObject from '../constants/wording';

export default function Home({ wording, locale }) {
  const getWordingByKey = key => wording[key];

  const { skills, languages } = wording;

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
        <LanguageButtons locale={locale} />
      </main>
    </>
  );
}

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      wording: wordingObject[locale],
      locale
    }
  };
};
