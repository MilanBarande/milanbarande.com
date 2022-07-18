import cn from 'classnames';

export default function Tabs({
  getWordingByKey,
  sections,
  selectedSection,
  setSelectedSection
}) {
  return (
    <ul className="flex space-x-8 font-medium">
      {sections.map(section => (
        <li key={section}>
          <button
            onClick={() => setSelectedSection(section)}
            className={cn('menu-link menu-link-hover cursor-pointer', {
              'menu-link-active': selectedSection === section
            })}
          >
            {getWordingByKey(section)}
          </button>
        </li>
      ))}
    </ul>
  );
}
