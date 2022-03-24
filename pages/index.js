import Head from 'next/head';
// import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Milan Barande</title>
        <meta name="description" content="Personal website of Milan Barande" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main-container">
        <div className="grid gap-5 lg:grid-cols-3">
          <div className="space-y-5">
            <div className="shadow rounded-xl overflow-hidden">
              <div
                className="h-32 bg-cover"
                style={{ backgroundImage: "url('../assets/img/cover.jpg')" }}
              ></div>
              <div className="pt-14 p-7 bg-white relative">
                <span className="status-badge bg-gray-400">Busy</span>
                <a href="/">
                  <img
                    src="../assets/img/avatar.jpg"
                    alt="Avatar"
                    className="user-photo"
                  />
                </a>
                <div className="text-lg font-semibold mb-1.5">
                  Milan Barande
                </div>
                <div className="text-sm text-gray-400 mb-7">
                  Front-end Developer
                </div>
                <div className="flex group">
                  <button className="download-btn">Download CV</button>
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
                </div>
              </div>
            </div>

            <div className="p-7 block-section">
              <h2 className="block-title">Information</h2>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <div className="text-gray-400">Location</div>
                  <div className="font-medium text-right text-gray-600">
                    London
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="text-gray-400">Experience</div>
                  <div className="font-medium text-right text-gray-600">
                    3+ years
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="text-gray-400">Availability</div>
                  <div className="font-medium text-right text-gray-600">
                    1 week
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="text-gray-400">Relocation</div>
                  <div className="font-medium text-right text-gray-600">No</div>
                </div>
              </div>
            </div>

            <div className="p-7 block-section flow-root">
              <h2 className="block-title">Skills</h2>
              <div className="-m-2 flex flex-wrap">
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">React</span>
                <span className="skill-tag">Vue</span>
                <span className="skill-tag">SQL</span>
                <span className="skill-tag">HTML/CSS</span>
                <span className="skill-tag">Java</span>
              </div>
            </div>
          </div>

          <div className="space-y-5 lg:col-span-2">
            <div className="p-7 pb-0 block-section">
              <h2 className="block-title">About me</h2>
              <p className="text-gray-600 mb-5">
                Libero quas veritatis nulla distinctio fuga nihil temporibus et.
                Quia dicta sapiente qui porro molestiae nobis incidunt
                voluptatem. Et voluptas sunt nihil. At perferendis voluptatem
                dolores nulla. Adipisci dolore non. Praesentium ipsa magnam ut
                quia explicabo voluptates.
              </p>

              <div className="flex flex-col space-y-4">
                <a href="#0" className="mail-link social-link-hover">
                  <i className="bx bx-at text-xl"></i>
                  <span>milan.barande@gmail.com</span>
                </a>

                <ul className="flex space-x-5">
                  <li>
                    <a href="#0" className="social-link-hover">
                      <i className="bx bxl-facebook-circle text-2xl"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#0" className="social-link-hover">
                      <i className="bx bxl-twitter text-2xl"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#0" className="social-link-hover">
                      <i className="bx bxl-github text-2xl"></i>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="border-t border-gray-200 my-5"></div>

              <ul className="flex space-x-8 font-medium">
                <li>
                  <a
                    href="/public/index.html"
                    className="menu-link-active menu-link-hover"
                  >
                    Resume
                  </a>
                </li>
                <li>
                  <a
                    href="/public/products.html"
                    className="menu-link menu-link-hover"
                  >
                    Products
                  </a>
                </li>
                <li>
                  <a
                    href="/public/blog.html"
                    className="menu-link menu-link-hover"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div className="p-7 block-section">
              <h2 className="block-title">Experience</h2>
              <div className="mb-5 item-section">
                <div
                  className="company-logo"
                  style={{ backgroundColor: '#1DA1F2' }}
                >
                  <i className="bx bxl-twitter text-3xl"></i>
                </div>

                <div className="w-full space-y-5">
                  <div className="item-header">
                    <div className="space-y-1.5">
                      <div className="font-medium">Senior Developer</div>
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
                          <span>Twitter</span>
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
                          <span>London</span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2 sm:text-right">
                      <div className="job-item-badge">Full time</div>
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
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        <span>June 2019 – Present</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    Aut omnis voluptatem sit sequi. Voluptatem temporibus
                    repellat voluptatem voluptatibus enim voluptas
                    necessitatibus. Aut quasi sunt dolor. Commodi dolores saepe
                    asperiores beatae voluptate corporis est ea voluptatem. Enim
                    quo sed et sint aspernatur distinctio qui quam.
                  </p>
                  <div className="border-b border-gray-200"></div>
                </div>
              </div>

              <div className="mb-5 item-section">
                <div
                  className="company-logo"
                  style={{ backgroundColor: '#0061FF' }}
                >
                  <i className="bx bxl-dropbox text-3xl"></i>
                </div>

                <div className="w-full space-y-5">
                  <div className="item-header">
                    <div className="space-y-1.5">
                      <div className="font-medium">Middle Developer</div>
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
                          <span>Dropbox</span>
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
                          <span>London</span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2 sm:text-right">
                      <div className="job-item-badge">Full time</div>
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
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        <span>April 2018 – June 2019</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    Aut omnis voluptatem sit sequi. Voluptatem temporibus
                    repellat voluptatem voluptatibus enim voluptas
                    necessitatibus. Aut quasi sunt dolor. Commodi dolores saepe
                    asperiores beatae voluptate corporis est ea voluptatem. Enim
                    quo sed et sint aspernatur distinctio qui quam.
                  </p>
                  <div className="border-b border-gray-200"></div>
                </div>
              </div>

              <div className="item-section">
                <div
                  className="company-logo"
                  style={{ backgroundColor: '#FC4F08' }}
                >
                  <i className="bx bxl-blogger text-3xl"></i>
                </div>

                <div className="w-full space-y-5">
                  <div className="item-header">
                    <div className="space-y-1.5">
                      <div className="font-medium">Junior Developer</div>
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
                          <span>Blogger</span>
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
                          <span>London</span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2 sm:text-right">
                      <div className="job-item-badge">Full time</div>
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
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        <span>December 2017 – March 2018</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    Aut omnis voluptatem sit sequi. Voluptatem temporibus
                    repellat voluptatem voluptatibus enim voluptas
                    necessitatibus. Aut quasi sunt dolor. Commodi dolores saepe
                    asperiores beatae voluptate corporis est ea voluptatem. Enim
                    quo sed et sint aspernatur distinctio qui quam.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-7 block-section">
              <h2 className="block-title">Education</h2>
              <div className="mb-5 item-section">
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-xl bg-cover"
                  style={{
                    backgroundImage: "url('../assets/img/bu-logo.jpg')"
                  }}
                ></div>

                <div className="w-full space-y-5">
                  <div className="item-header items-end">
                    <div className="space-y-1.5">
                      <div className="font-medium">
                        Master in Software Engineering
                      </div>
                      <div className="flex space-x-5">
                        <div className="item-header-info">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path d="M12 14l9-5-9-5-9 5 9 5z" />
                            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                            />
                          </svg>
                          <span>Brunel University</span>
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
                          <span>London</span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-1.5 sm:text-right">
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
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        <span>September 2017 – May 2019</span>
                      </div>
                    </div>
                  </div>
                  <div className="border-b border-gray-200"></div>
                </div>
              </div>

              <div className="item-section">
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-xl bg-cover"
                  style={{
                    backgroundImage: "url('../assets/img/bu-logo.jpg')"
                  }}
                ></div>

                <div className="w-full space-y-5">
                  <div className="item-header items-end">
                    <div className="space-y-1.5">
                      <div className="font-medium">
                        Master in Software Engineering
                      </div>
                      <div className="flex space-x-5">
                        <div className="item-header-info">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path d="M12 14l9-5-9-5-9 5 9 5z" />
                            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                            />
                          </svg>
                          <span>Brunel University</span>
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
                          <span>London</span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-1.5 sm:text-right">
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
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        <span>September 2013 – May 2017</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
