import Card from './Card';
import { portfolioData } from '../constants/data';
import ProjectDetails from './ProjectDetails';
import Modal from './Modal';
import { useState } from 'react';

const getProjectData = projectId =>
  portfolioData.find(({ id }) => id === projectId);

export default function Portfolio({ getWordingByKey }) {
  const [projectModalId, setProjectModalId] = useState();
  const closeModal = () => setProjectModalId(undefined);

  return (
    <>
      <p
        className="px-7 text-justify text-gray-600"
        dangerouslySetInnerHTML={{
          __html: getWordingByKey('portfolioIntro')
        }}
      />
      <div className="flex gap-6 flex-wrap">
        {portfolioData.map(data => (
          <Card
            {...data}
            key={data.id}
            onClick={() => setProjectModalId(data.id)}
            title={getWordingByKey(data.title)}
            subtitle={getWordingByKey(data.subtitle)}
            cta={getWordingByKey(data.cta)}
          />
        ))}
      </div>
      <Modal isOpen={!!getProjectData(projectModalId)} closeModal={closeModal}>
        <ProjectDetails
          {...getProjectData(projectModalId)}
          getWordingByKey={getWordingByKey}
        />
      </Modal>
    </>
  );
}
