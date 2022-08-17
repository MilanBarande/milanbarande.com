export default function DownloadCvButton({ locale, ctaWording }) {
  return (
    <a
      href={`/CV Milan Barande ${locale}.pdf`}
      alt="alt text"
      target="_blank"
      rel="noopener noreferrer"
      download
      className="flex group mt-5"
    >
      <button className="download-btn">{ctaWording}</button>
      <button className="download-btn-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
          />
        </svg>
      </button>
    </a>
  );
}
