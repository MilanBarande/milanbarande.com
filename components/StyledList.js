export default function StyledList({ title, elements, getWordingByKey }) {
  return (
    <div className="p-7 block-section flow-root">
      <h2 className="block-title">{title}</h2>
      <div className="-m-2 flex flex-wrap">
        {elements.map(element => (
          <span className="skill-tag" key={element}>
            {getWordingByKey ? getWordingByKey(element) : element}
          </span>
        ))}
      </div>
    </div>
  );
}
