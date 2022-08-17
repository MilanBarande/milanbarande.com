import useMobileDetect from 'use-mobile-detect-hook';
import cn from 'classnames';
import { useRouter } from 'next/router';

export default function LanguageButtons({ locale }) {
  const isFrench = locale === 'fr' || locale === 'default';
  const isEnglish = locale === 'en';
  const { isMobile } = useMobileDetect();
  const router = useRouter();

  return (
    <div className="flex justify-between space-x-3 text-2xl fixed top-2.5 right-5">
      <button
        className={cn('cursor-pointer', 'opacity-100', 'text-2xl', {
          ['opacity-40']: !isFrench,
          ['text-3xl']: isMobile()
        })}
        onClick={() => router.push('/', '/', { locale: 'fr' })}
      >
        🇫🇷
      </button>
      <button
        className={cn('cursor-pointer', 'opacity-100', 'text-2xl', {
          ['opacity-40']: !isEnglish,
          ['text-3xl']: isMobile()
        })}
        onClick={() => router.push('/', '/', { locale: 'en' })}
      >
        🇬🇧
      </button>
    </div>
  );
}
