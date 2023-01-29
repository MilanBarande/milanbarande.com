import { Resume, Portfolio, Tabs } from './index';
import { useState } from 'react';
import getYearsOfExperience from '../helpers/getYearsOfExperience';

export default function MainContent({ getWordingByKey }) {
  const [selectedSection, setSelectedSection] = useState('resume');
  const yearsWording = getWordingByKey('years');
  const years = getWordingByKey('yearsWord');
  const aboutMeText = getWordingByKey('aboutMeText').replace(
    yearsWording,
    `${getYearsOfExperience()} ${years}`
  );
  return (
    <div className="space-y-5 lg:col-span-2">
      <div className="pb-0 p-7 block-section">
        <h2 className="block-title">{getWordingByKey('aboutMe')}</h2>
        <p
          className="mb-5 text-justify text-gray-600"
          dangerouslySetInnerHTML={{ __html: aboutMeText }}
        />
        <div className="my-5 border-t border-gray-200"></div>
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
  );
}
