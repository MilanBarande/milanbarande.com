import Image from 'next/image';
import { Github, WebsiteLink } from '../components/Icons';

export default function Card({
  title,
  subtitle,
  imageSrc,
  alt,
  year,
  onClick,
  id,
  cta,
  github,
  link
}) {
  return (
    <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 card">
      <button onClick={() => onClick(id)}>
        <Image
          className="rounded-t-lg"
          src={imageSrc ?? '/image-test.jpeg'}
          alt={alt ?? 'image'}
          width={382}
          height={255}
        />
      </button>
      <div className="px-4 py-2">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title ?? 'title'}
        </h5>
        <h6 className="mb-3 text-l text-gray-700 dark:text-gray-400">
          {subtitle ?? 'subtitle'} {year && `(${year})`}
        </h6>
        <div className="flex items-center space-x-5 mt-3 mb-2">
          <button
            onClick={() => onClick(id)}
            className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none see-more-btn"
          >
            {cta ?? 'Read more'}
          </button>
          {github && (
            <a
              href={github}
              className="social-link-hover"
              target="_blank"
              rel="noreferrer"
            >
              <Github height={25} width={25} />
            </a>
          )}
          {link && (
            <a
              href={link}
              className="social-link-hover"
              target="_blank"
              rel="noreferrer"
            >
              <WebsiteLink height={25} width={25} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
