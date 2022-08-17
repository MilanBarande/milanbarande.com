import { SocialLinks, DownloadCvButton } from './index';
import { useRouter } from 'next/router';

export default function ProfileCard({ getWordingByKey }) {
  const router = useRouter();
  const { locale } = router;
  return (
    <div className="shadow rounded-xl overflow-hidden">
      <div className="h-32 bg-cover cover" />
      <div className="pt-14 p-7 bg-white relative">
        <span className="status-badge bg-green-400">
          {getWordingByKey('status')}
        </span>
        <img src="/avatar.jpeg" alt="Avatar" className="user-photo" />
        <div className="text-lg font-semibold mb-1.5">Milan Barande</div>
        <div className="text-sm text-gray-400 mb-5">
          {getWordingByKey('jobTitle')}
        </div>
        <SocialLinks />
        <DownloadCvButton
          locale={locale}
          ctaWording={getWordingByKey('downloadCV')}
        />
      </div>
    </div>
  );
}
