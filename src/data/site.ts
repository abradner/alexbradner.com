export const site = {
  name: 'Alex Bradner',
  monogram: 'AB',
  tagline: 'Engineering leader. Founder. Skill collector.',
  revision: '2026.07',
  evergreenCv: 'https://cv.alexbradner.com',
};

export const nav = [
  { href: '/about', label: 'About', num: '01' },
  { href: '/projects', label: 'Projects', num: '02' },
  { href: '/cv', label: 'CV', num: '03' },
];

export const social = [
  { label: 'GitHub', key: 'GH', href: 'https://github.com/abradner' },
  { label: 'LinkedIn', key: 'LI', href: 'https://www.linkedin.com/in/alexbradner/' },
  { label: 'Twitter', key: 'X', href: 'https://twitter.com/abradner' },
  { label: 'Blog', key: 'BLOG', href: 'http://www.ramblin.gs' },
];

export const philosophies = [
  {
    title: 'Toward People',
    points: [
      'Listen, understand, learn, grow.',
      'Be kind, clarify miscommunications and be willing to forgive.',
      'Uplift your peers and juniors to be their best.',
      'Be gentle but firm with your convictions — and be able to explain why you hold them.',
      "Be aware of your biases. They can add colour to your perspective, but don't let them harm others.",
      'Fostering diversity & inclusion is the responsibility of the already-included, not the diverse.',
    ],
  },
  {
    title: 'In Engineering',
    points: [
      "Don't use black boxes — understand the strengths and limitations of your tooling.",
      'Write code for the eventual reader: be expressive, clear and accessible.',
      'Optimise where relevant, but make those decisions obvious and easy to understand.',
    ],
  },
  {
    title: 'In Business',
    points: [
      "Always ask 'Why?' — and don't stop until there is a satisfying explanation.",
      'Hypothesize, validate and iterate. Ideally before any code is written.',
      'Maximise customer impact — we build products for customers, not for ourselves.',
      'Find opportunities for customer delight where possible.',
      'Understand both the opportunity cost and value of tradeoffs — and make them aggressively when it directly serves impact.',
    ],
  },
  {
    title: 'In Leadership',
    points: [
      'Culture is the environment that lets a team thrive: set a high bar, then rise to it together.',
      'Teach to fish — get into the weeds yourself, then step back and hand over the map.',
      'Create space for people to shine. Provide oversight without smothering.',
      'Egoless debate converges on better outcomes than any dictated design.',
      'If you do something manually three times, automate it — and that goes for processes, communication and behaviours, not just code.',
      'Never waste a crisis: shifting sands reveal more opportunities than they bury.',
    ],
  },
];

export const interests = {
  intro:
    'This is broad. The world is my niche, and I can find something interesting in almost any domain. Ask me about one of these — or throw me down a rabbit hole with something new.',
  categories: [
    {
      label: 'Technology & Engineering',
      items: [
        'Generative AI — designing, building, training and applying',
        'Electronics & circuit design',
        '3D CAD modelling & printing (FDM and resin)',
        'Mechanical engineering & the future of manufacturing',
        'Home automation & self-hosted SaaS',
        'Data modelling',
      ],
    },
    {
      label: 'The Mind & Body',
      items: [
        'Behavioural psychology & neurobiology',
        'Genetic expression, endocrinology & immunology',
        'Mental health, disorders and research developments',
      ],
    },
    {
      label: 'Social Impact',
      items: ['Political advocacy', 'Environmentalism', 'History'],
    },
    {
      label: 'Downtime',
      items: [
        'Sci-fi and fantasy epics — read and watched',
        'Gaming: board, tabletop RPG, PC, Switch',
        'Making (crappy) music',
        'Being a dog parent',
      ],
    },
    {
      label: 'Outside',
      items: ['Growing green things', 'Camping and disconnecting', 'Agritech'],
    },
    {
      label: 'Movement',
      items: [
        "Yoga (yes, I'm a walking stereotype sometimes — what's your point?)",
        'Cycling: road, mountain and motorbike',
        'Swimming & scuba diving',
      ],
    },
    {
      label: 'Creativity',
      items: ['Photography & videography'],
    },
  ],
};

export const experience = [
  {
    period: 'Mar 2025 — now',
    org: 'Optus',
    role: 'Engineering Manager',
    current: true,
    blurb:
      'Leading multiple software engineering teams at the start of an ambitious transformation: modernising and simplifying the Operational Support Systems stack with the best practices, standards and agentic-enabled engineering processes 2026 has to offer.',
  },
  {
    period: 'Aug 2024 — Mar 2025',
    org: 'Atlassian',
    role: 'Principal Engineer',
    blurb:
      'Teamwork Platform — the smart-linking layer that connects Jira, Confluence and third-party tools, and feeds the knowledge graph behind Atlassian’s AI. Stepped into Engineering Manager duties for a 15-person team from day zero during a parental leave.',
  },
  {
    period: 'Nov 2023 — now',
    org: 'Simplytics',
    role: 'Founder',
    current: true,
    blurb:
      'First as Simplytics AI — eight months building democratised, AI-assisted analytics, now parked. The entity lives on as the home of Spritz Events.',
    link: { href: '/projects/simplytics-ai', label: 'Project entry' },
  },
  {
    period: 'Sep 2022 — Nov 2023',
    org: 'AirRobe',
    role: 'Principal Engineer / Head of Engineering',
    blurb:
      'Circular-fashion marketplace. Built the end-to-end personalisation suite turning customer behaviour into curated feeds and emails — 10× the engagement of manual curation.',
  },
  {
    period: 'Apr — Sep 2022',
    org: 'CBA / x15 Ventures (Cheddar)',
    role: 'Principal Engineer',
    blurb:
      'Startup pace inside Australia’s biggest bank: architecture, strategy, mentoring and hands-on product engineering for a Gen-Z shopping platform.',
  },
  {
    period: '2017 — 2022',
    org: 'Airtasker',
    role: 'Senior Engineer → Technical Lead',
    blurb:
      'Five years, four teams led. The SEO engine still powering the primary acquisition channel, two recommendation systems with major conversion uplift, and international launches across the UK, NZ, Singapore and the US.',
  },
  {
    period: '2014 — 2017',
    org: 'Foogi',
    role: 'Co-founder & CTO',
    blurb:
      'Smart-scheduling startup — raised over US$400k in seed funding and came within a whisker of acquisition by Microsoft.',
    link: { href: '/projects/foogi', label: 'Project entry' },
  },
  {
    period: '2012 — 2013',
    org: 'Central China Normal University',
    role: 'English Teacher & CS Tutor',
    blurb: 'Taught English and tutored computer science during exchange in Wuhan.',
  },
  {
    period: '2010 — 2012',
    org: 'Intersect Australia',
    role: 'Sysadmin → QA → Junior Engineer',
    blurb: 'First industry steps, in eResearch infrastructure.',
  },
  {
    period: '2008 — 2010',
    org: 'Haymarket Media',
    role: 'Technical Copywriter',
    blurb: 'PC Authority, Atomic (Maximum Powered Computing) and ITNews.',
  },
];

export const pillars = [
  'Leadership — engineering & product',
  'Software engineering — bare metal to customer, including DevOps',
  'Architectural design of software systems',
  'Product development — discovery & UX research',
  'Data science — insights, warehousing, ML & AI',
  'Startups — SaaS, business administration & venture capital',
];

export const skills = {
  languages: [
    { name: 'TypeScript & JavaScript', detail: 'Node (Azure Functions, AWS Lambda), React & NextJS, React Native (Expo)' },
    { name: 'Kotlin & JVM', detail: 'Spring Boot, Armeria' },
    { name: 'Ruby', detail: 'Rails' },
    { name: 'Python', detail: 'TensorFlow, Pandas, NumPy, SciPy' },
  ],
  languagesNote: 'There are others — these are the ones I consider fresh.',
  technologies: [
    'Docker & Kubernetes',
    'SQL — Postgres, Snowflake, Hasura',
    'GraphQL & REST API design',
    'gRPC / Protobuf',
  ],
  data: ['Elasticsearch', 'Algolia / Search.io', 'Splunk', 'DBT', 'Amazon SageMaker'],
  devops: ['AWS', 'Azure', 'Terraform', 'Spinnaker CD', 'CircleCI', 'Prometheus & Grafana'],
  certifications: ['Certified Scrum Master', 'First Aid'],
};

export const leadershipPractice = [
  {
    title: 'Team Transformation',
    line: 'Turned a fragile, bottom-heavy team with a bus factor of one into an autonomous, cross-functional unit with a bus factor of two or more — while absorbing five graduates and a junior in a single year.',
  },
  {
    title: 'Democratising Knowledge',
    line: 'Defect-triage and release-manager rotations, show-and-tell sessions, and a What/Why/How review discipline that surfaces architectural problems before a line of code is read.',
  },
  {
    title: 'Delivery Engineering',
    line: 'Push-button, sub-ten-minute GitOps deployments that replaced tens of hours a month of manual release labour — and the errors that came with it.',
  },
  {
    title: 'Coaching & Growth',
    line: 'Structured 1:1s split into tactical and growth tracks, SMART growth portfolios, and specific before-and-after coaching on presentations and written communication.',
  },
  {
    title: 'Risk & Tradeoffs',
    line: 'Acting as the tech-debt circuit breaker, three questions at a time: what is the underlying problem, why are we solving it, and why are we solving it this way?',
  },
  {
    title: 'Deciding for Every Customer',
    line: 'Roadmap decisions weighed from every seat at the table — end users, support staff, regulators and the business itself — because good outcomes have to work for all of them.',
  },
];

export const education = [
  { qualification: 'BSc (Computer Science)', institution: 'University of New South Wales, Australia — 2013' },
  { qualification: 'Language Certificate HSK 4', institution: 'Central China Normal University' },
];

export const languages = ['English', '中文 — 普通话 (Mandarin Chinese)', 'Español (Spanish)'];
