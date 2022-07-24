import { Resume, Portfolio, Tabs } from './index';
import { useState } from 'react';

export default function MainContent({ getWordingByKey }) {
  const [selectedSection, setSelectedSection] = useState('resume');

  return (
    <div className="space-y-5 lg:col-span-2">
      <div className="p-7 pb-0 block-section">
        <h2 className="block-title">{getWordingByKey('aboutMe')}</h2>
        <p
          className="text-gray-600 mb-5 text-justify"
          dangerouslySetInnerHTML={{ __html: getWordingByKey('aboutMeText') }}
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
  );
}
