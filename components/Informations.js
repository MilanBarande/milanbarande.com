import getYearsOfExperience from '../helpers/getYearsOfExperience';

export default function Informations({ getWordingByKey }) {
  const years = getWordingByKey('yearsWord');
  const yearsOfExperience = `${getYearsOfExperience()} ${years}`;
  return (
    <div className="p-7 block-section">
      <h2 className="block-title">{getWordingByKey('informations')}</h2>
      <div className="space-y-4">
        <div className="flex justify-between">
          <div className="text-gray-400">{getWordingByKey('location')}</div>
          <div className="font-medium text-right text-gray-600">
            {getWordingByKey('amsterdam')}
          </div>
        </div>
        <div className="flex justify-between">
          <div className="text-gray-400">{getWordingByKey('experience')}</div>
          <div className="font-medium text-right text-gray-600">
            {yearsOfExperience}
          </div>
        </div>
        {/* <div className="flex justify-between">
          <div className="text-gray-400">{getWordingByKey('availability')}</div>
          <div className="font-medium text-right text-gray-600">
            {getWordingByKey('availabilityTime')}
          </div>
        </div> */}
        <div className="flex justify-between">
          <div className="text-gray-400">
            {getWordingByKey('openToFullRemote')}
          </div>
          <div className="font-medium text-right text-gray-600">
            {getWordingByKey('yes')}
          </div>
        </div>
        <div className="flex justify-between">
          <div className="text-gray-400">
            {getWordingByKey('openToPartTime')}
          </div>
          <div className="font-medium text-right text-gray-600">
            {getWordingByKey('yes')}
          </div>
        </div>
      </div>
    </div>
  );
}
