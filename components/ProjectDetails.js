import { Carousel } from 'flowbite-react';
import Image from 'next/image';
import useMobileDetect from 'use-mobile-detect-hook';
import { Github, WebsiteLink } from '../components/Icons';

export default function ProjectDetails({
  title,
  subtitle,
  year,
  description,
  stack,
  images,
  youtubeId,
  getWordingByKey,
  link,
  github
}) {
  const hasSeveralMedias = images && [youtubeId, ...images].length > 1;
  const { isMobile } = useMobileDetect();
  const isMobileDevice = isMobile();
  return (
    <div className="p-3 lg:px-10 relative">
      <div className="lg:px-7">
        <h2 className="mb-2 text-2xl">{getWordingByKey(title)}</h2>
        {subtitle && (
          <div className="mb-4 flex items-center space-x-5">
            <h3 className="text-xl font-semibold">
              {getWordingByKey(subtitle)} {year && `(${year})`}
            </h3>
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
        )}
        <p className="mb-4">{getWordingByKey(description)} </p>
      </div>
      <>
        {(images || youtubeId) && (
          <div className="lg:px-7">
            {hasSeveralMedias ? (
              <div className="carousel-container">
                <Carousel slide={!youtubeId} slideInterval={3000}>
                  {images.map(src => (
                    <img src={src} alt={src} key={src} />
                  ))}
                </Carousel>
              </div>
            ) : youtubeId ? (
              <div className="flex justify-center mt-5">
                <iframe
                  width={isMobileDevice ? '315' : '100%'}
                  height={isMobileDevice ? '309' : '400'}
                  src={`https://www.youtube-nocookie.com/embed/${youtubeId}?controls=0`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              <Image src={images[0].src} alt={images[0].alt} />
            )}
          </div>
        )}
      </>
      {stack && (
        <div className="pt-5 lg:p-7 flow-root">
          <h3 className="block-title">{getWordingByKey('techStack')}</h3>
          <div className="-m-2 flex flex-wrap">
            {stack.map(technology => (
              <span className="skill-tag" key={technology}>
                {technology}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
