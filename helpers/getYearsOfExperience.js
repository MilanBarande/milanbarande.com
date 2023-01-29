import formatDistanceStrict from 'date-fns/formatDistanceStrict'

export default function() {
  const start = new Date("2017-09-04");
  const today = new Date();
  const distance = formatDistanceStrict(today, start);
  const yearsOfExperience = distance.split(' ')[0];
  return yearsOfExperience;
}
