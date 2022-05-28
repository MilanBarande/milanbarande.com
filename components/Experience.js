import Image from 'next/image';

export default ({ jobTitle, employer, location, dates, status, time, description, logo, }) => (
  <div className="item-section mb-5">
    <Image
      src={`/${logo}.jpeg`}
      className='company-logo rounded-md'
      width={48}
      height={48}
    />

    <div className="w-full space-y-5">
      <div className="item-header">
        <div className="space-y-1.5">
          <div className="font-medium">{jobTitle}</div>
          <div className="flex space-x-5">
            <div className="item-header-info">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span>{employer}</span>
            </div>
            <div className="item-header-info">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span>{location}</span>
            </div>
          </div>
        </div>
        <div className="space-y-2 sm:text-right">
          <div>
            <div className="job-item-badge mr-2">{status}</div>
            {time && <div className="job-item-badge">{time}</div>}
          </div>
          <div className="item-header-info flex justify-start sm:justify-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <p dangerouslySetInnerHTML={{ __html: dates }} />
          </div>
        </div>
      </div>
     {description && <p className="text-gray-600 text-justify" dangerouslySetInnerHTML={{__html: description }} />}
    </div>
  </div>
)
