const paris = 'Paris, France';

export const experiencesData = [
  {
    jobTitle: 'frontendDeveloper',
    employer: 'Parfums Christian Dior',
    location: paris,
    dates: 'timePcd',
    status: 'freelance',
    time: 'fullTime',
    logo: 'pcd'
  },
  {
    jobTitle: 'frontendDeveloper',
    employer: 'Christian Dior Couture',
    location: paris,
    dates: 'timeCdcFree',
    status: 'freelance',
    time: 'fullTime',
    logo: 'cdc'
  },
  {
    jobTitle: 'frontendDeveloper',
    employer: 'Christian Dior Couture',
    location: paris,
    dates: 'timeCdcCdi',
    status: 'cdi',
    time: 'fullTime',
    logo: 'cdc',
    description: 'descriptionCdcCdi'
  },
  {
    jobTitle: 'workshopLead',
    employer: 'Le Wagon Paris',
    location: paris,
    dates: 'timeWagon',
    status: 'freelance',
    description: 'descriptionWagon',
    logo: 'wagon',
    time: 'occasional'
  },
  {
    jobTitle: 'frontendDeveloper',
    employer: 'Bluenove',
    location: paris,
    dates: 'timeBluenove',
    status: 'cdi',
    time: 'fullTime',
    description: 'descriptionBluenove',
    logo: 'bluenove'
  }
];

const Montreal = 'Montréal, Québec';

export const studiesData = [
  {
    title: 'webDevBootcamp',
    dates: '2017',
    location: Montreal,
    logo: 'wagon',
    school: 'Le Wagon Montréal'
  },
  {
    title: 'researchAssistant',
    dates: '2016 - 2017',
    location: Montreal,
    logo: 'concordia',
    school: 'Concordia University'
  },
  {
    title: 'mastersNeuroscience',
    dates: '2016 - 2017',
    location: Montreal,
    logo: 'udem',
    school: 'Université de Montréal'
  },
  {
    title: 'bachelorKinesiology',
    dates: '2013 - 2016',
    location: Montreal,
    logo: 'udem',
    school: 'Université de Montréal'
  }
];

export const skillsData = [
  'JavaScript',
  'HTML5',
  'CSS3',
  'React',
  'NextJS',
  'TypeScript',
  'GraphQL',
  'NodeJS',
  'Redux',
  'Git',
  'ExpressJS',
  'Python',
  'React Native',
  'TailwindCSS',
  'Jest',
  'Puppeteer'
];

export const languagesData = ['french', 'english', 'german', 'portuguese'];

export const portfolioData = [
  {
    id: 'assembl',
    year: '2017-2019',
    title: 'assembl',
    subtitle: 'bluenove',
    description: 'assemblDescription',
    stack: ['React', 'Redux', 'SCSS', 'NextJS', 'Flow', 'GraphQL', 'Python'],
    github: 'https://github.com/assembl/assembl',
    youtubeId: '_hg3WvRdmUU',
    imageSrc: '/assembl.webp',
    alt: 'Assembl illustration',
    link: 'https://bluenove.com/offres/assembl/'
  },
  {
    id: 'ticketswoop',
    year: '2021',
    title: 'ticketswoop',
    subtitle: 'personalProject',
    description: 'ticketswoopDescription',
    stack: ['Puppeteer', 'JavaScript'],
    github: 'https://github.com/MilanBarande/ticketswoop',
    youtubeId: '-W2q28VXvxg',
    imageSrc: '/ticketswoop.webp',
    alt: 'Ticketswoop illustration'
  },
  {
    id: 'thisWebsite',
    year: '2022',
    title: 'thisWebsite',
    subtitle: 'personalProject',
    description: 'thisWebsiteDescription',
    stack: ['NextJS', 'React', 'TailwindCSS', 'Vercel'],
    github: 'https://github.com/MilanBarande/milanbarande.com',
    imageSrc: '/thisWebsite.webp',
    link: 'https://www.milanbarande.com'
  },
  {
    id: 'mettaway',
    year: '2021',
    title: 'mettaway',
    subtitle: 'personalProject',
    description: 'mettawayDescription',
    stack: ['React', 'TypeScript', 'SCSS', 'NextJS', 'Vercel'],
    imageSrc: '/mettaway.webp',
    images: [{ src: '/mettaway.webp', alt: 'Mettaway illustration' }],
    link: 'https://www.mettaway.voyage',
    github: 'https://github.com/MilanBarande/mettaway'
  },
  {
    id: 'hashverse',
    year: '2021',
    title: 'hashverseStudio',
    subtitle: 'personalProject',
    description: 'hashverseStudioDescription',
    stack: [
      'NextJS',
      'React',
      'Vercel',
      'TypeScript',
      'Ethereum',
      'Ethers.js',
      'Hardhat',
      'Web3 Modal'
    ],
    imageSrc: '/hashverse.webp',
    link: 'https://www.hashverse.studio',
    youtubeId: 'AWnZIpNYIgM'
  },
  {
    id: 'wasis-rb',
    year: '2017',
    title: 'wasisRb',
    subtitle: 'personalProject',
    description: 'wasisRbDescription',
    stack: [
      'Ruby on Rails',
      'jQuery',
      'Google Maps API',
      'PostgreSQL',
      'Heroku'
    ],
    github: 'https://github.com/MilanBarande/wasis-legacy',
    imageSrc: '/wasis-rb.jpg',
    images: ['/oasis1.webp', '/oasis2.webp', '/oasis3.webp'],
    alt: 'Wasis RB illustration'
  },
  // {
  //   id: 'leon-the-singer',
  //   year: '2018',
  //   title: 'leonTheSinger',
  //   subtitle: 'personalProject',
  //   description: 'leonTheSingerDescription',
  //   stack: ['Gatsby', 'React', 'Netlify'],
  //   github: 'https://github.com/MilanBarande/leon-gatsby',
  //   imageSrc: '/leonthesinger.webp',
  //   alt: 'leonthesinger.com illustration',
  //   link: 'https://leonthesinger.com'
  // },
  {
    id: 'navigation',
    year: '2022',
    title: 'navigation',
    subtitle: 'pcd',
    description: 'navigationDescription',
    youtubeId: 'riaOWSRuUDs',
    stack: ['React', 'SCSS', 'NextJS', 'TypeScript', 'Jest', 'Storybook'],
    imageSrc: '/navigation.webp',
    link: 'https://www.dior.com'
  },
  // {
  //   id: 'lineSso',
  //   title: 'lineSso',
  //   subtitle: 'pcd',
  //   description: 'lineSsoDescription',
  //   stack: ['React', 'TypeScript', 'SCSS', 'NodeJS', 'GraphQL', 'NextJS']
  // },
  // {
  //   id: 'checkout',
  //   year: '2019',
  //   title: 'checkout',
  //   subtitle: 'cdc',
  //   description: 'checkoutDescription',
  //   stack: ['React', 'Redux', 'RxJS', 'SCSS', 'Jest', 'Storybook', 'REST API'],
  //   link: 'https://www.dior.com'
  // },
  // {
  //   id: 'exchangeAndReturns',
  //   year: '2020',
  //   title: 'exchangeAndReturns',
  //   subtitle: 'cdc',
  //   description: 'exchangeAndReturnsDescription',
  //   stack: [
  //     'React',
  //     'SCSS',
  //     'NextJS',
  //     'TypeScript',
  //     'GraphQL',
  //     'NodeJS',
  //     'Apollo',
  //     'Jest',
  //     'Storybook'
  //   ],
  //   link: 'https://www.dior.com'
  // },
  {
    id: 'personalization',
    year: '2022',
    title: 'personalization',
    subtitle: 'pcd',
    description: 'pcdPersonalizationDescription',
    stack: [
      'React',
      'SCSS',
      'NextJS',
      'TypeScript',
      'GraphQL',
      'NodeJS',
      'Apollo',
      'Jest',
      'Storybook'
    ],
    youtubeId: 'qUaZVBvgSpc',
    imageSrc: '/perso.webp',
    alt: 'Perfume personalization illustration',
    link: 'https://www.dior.com'
  }
];
