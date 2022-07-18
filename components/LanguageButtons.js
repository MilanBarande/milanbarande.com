import useMobileDetect from 'use-mobile-detect-hook';
import cn from 'classnames';

export default function LanguageButtons({ language, setLanguage }) {
  const isFrench = language === 'FR';
  const isEnglish = language === 'EN';
  const { isMobile } = useMobileDetect();

  return (
    <div className="flex justify-between space-x-3 text-2xl fixed top-2.5 right-5">
      <button
        className={cn('cursor-pointer', 'opacity-100', 'text-2xl', {
          ['opacity-40']: !isFrench,
          ['text-3xl']: isMobile()
        })}
        onClick={() => setLanguage('FR')}
      >
        🇫🇷
      </button>
      <button
        className={cn('cursor-pointer', 'opacity-100', 'text-2xl', {
          ['opacity-40']: !isEnglish,
          ['text-3xl']: isMobile()
        })}
        onClick={() => setLanguage('EN')}
      >
        🇬🇧
      </button>
    </div>
  );
}
