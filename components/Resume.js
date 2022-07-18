import Experience from './Experience';
import Studies from './Studies';
import { experiencesData, studiesData } from '../constants/data';
import { Fragment } from 'react';

export default function Resume({ getWordingByKey }) {
  return (
    <>
      <div className="p-7 block-section">
        <h2 className="block-title">{getWordingByKey('experience')}</h2>
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
              logo
            },
            index
          ) => (
            <Fragment key={`${jobTitle}-${index}`}>
              <Experience
                jobTitle={getWordingByKey(jobTitle)}
                employer={employer}
                location={location}
                dates={getWordingByKey(dates)}
                time={getWordingByKey(time)}
                status={getWordingByKey(status)}
                description={getWordingByKey(description)}
                logo={logo}
              />
              {index + 1 < experiencesData.length && (
                <div className="border-b border-gray-200 mb-5 mt-5" />
              )}
            </Fragment>
          )
        )}
      </div>
      <div className="p-7 block-section">
        <h2 className="block-title">{getWordingByKey('education')}</h2>
        {studiesData.map(({ title, dates, location, logo, school }, index) => (
          <Studies
            title={getWordingByKey(title)}
            dates={dates}
            location={location}
            logo={logo}
            school={school}
            key={getWordingByKey(title)}
            isLast={index + 1 === studiesData.length}
          />
        ))}
      </div>
    </>
  );
}
