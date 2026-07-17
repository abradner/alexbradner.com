export const site = {
  name: 'Alex Bradner',
  monogram: 'AB',
  tagline: 'Entrepreneur. Full-stack developer. Skill collector.',
  revision: '2026.07',
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
    title: 'Software',
    points: [
      "Code is read more than it's written. Write code that the reader can understand, even if that's future you.",
      'Write as little code as possible to solve the task.',
      'Understanding why you’re doing something is far more important than what.',
    ],
  },
  {
    title: 'Business',
    points: [
      'Figure out what the problem is before you start building solutions.',
      "Look after your juniors. Their insights aren't constrained by the boundaries we've learnt.",
    ],
    long: {
      intro:
        "Validate and/or test before you build. Validate and test once you've built. Analyse and understand the differences. I call this Hypothesis-driven development — a logical extension of the scientific method, which goes a little like this:",
      steps: [
        'Analyse the problem space',
        'Build a hypothesis',
        'Describe a metric that tests it in isolation',
        'Attempt to validate or disprove it before building anything non-trivial',
        'Refine the hypothesis and metrics with any discoveries if it seems valid',
        'Build the minimum viable product required to fully test this hypothesis',
        'Gather real user data to finally validate the hypothesis',
        'Explore anything additional discovered in the process',
      ],
      outro:
        "The Lean Startup by Eric Ries had some great insight into this, but like all resources, it doesn't capture everything.",
    },
  },
  {
    title: 'Life',
    points: [
      "Don't use black boxes: learn how things work, even if you're never going to become an expert.",
      'Move fast and break things.',
      'Be nice.',
    ],
  },
];

export const outsideOfWork = [
  'I love to tinker, to build and to disassemble.',
  'I climb things.',
  'All my vehicles have two wheels.',
  'I prefer to game with friends: with cards, boards, dice and online.',
  'My kindle is never far.',
  'I hate filling out these things and would prefer to just introduce myself.',
];

export const skillScale = [
  [1, "I've written some code that executes"],
  [2, "I've played with it but never completed a non-trivial project"],
  [3, "I've completed simple projects but nothing too taxing"],
  [4, "I've done something a little complicated with guidance"],
  [5, "I've done something a little complicated without guidance"],
  [6, 'I can solve most problems with guidance'],
  [7, 'I have a basic mastery'],
  [8, "I can solve most things without Stack Overflow open"],
  [9, 'I have mastery of the skill — I understand the ecosystem and all its subtleties. Only esoteric things might require documentation'],
  [10, 'Total mastery. This is unattainable.'],
] as const;

export const skills = {
  languages: {
    topLevel: [
      { name: 'Ruby', level: 9, children: [{ name: 'Rails', level: 9 }] },
      {
        name: 'JS / TS',
        level: 9,
        children: [
          { name: 'EmberJS', level: 9 },
          { name: 'React', level: 8 },
          { name: 'Node', level: 8 },
        ],
      },
      { name: 'Haskell', level: 7 },
      { name: 'Python', level: 6 },
    ],
    markup: [
      { name: 'CSS / Sass', level: 7 },
      { name: 'HTML', level: 8 },
    ],
    learning: [
      { name: 'Elixir / Phoenix', level: 3 },
      { name: 'Swift', level: 2 },
      { name: 'Apex', level: 3 },
      { name: 'Clojure', level: 1 },
      { name: 'Serverless / AWS Lambda', level: 2 },
      { name: 'Redux', level: 3 },
      { name: 'React Native', level: 3 },
      { name: 'React + Apollo', level: 4 },
    ],
    dormant: [
      { name: 'C / C++', level: 6 },
      { name: 'Java', level: 7 },
      { name: 'C#', level: 6 },
    ],
  },
  development: {
    tools: ['AWS', 'Git'],
    soft: [
      'User Experience',
      'API Development',
      'Big Data',
      'Bash / Shell',
      'Care about code quality',
      'Spike, dogfood, refactor process',
    ],
  },
  business: ['Leadership', 'Raising Capital', 'Growth Hacking', 'Impact Analysis', 'Lean methodology'],
  misc: {
    general: ['Any / Every OS. UI Optional'],
    adobe: ['Premiere', 'Photoshop', 'InDesign', 'After Effects', 'Lightroom'],
  },
};

export const education = [
  { qualification: 'BSc (Computer Science)', institution: 'University of New South Wales (Australia)' },
  { qualification: 'Language Certificate HSK 4', institution: 'Central China Normal University' },
];

export const hobbies = [
  'Internet of Things & Hardware Hacking',
  'Rock Climbing & Bouldering',
  '3D Modelling & Printing',
  'Cycling',
  'Videography',
  'Urban Garden Hacking',
];

export const languages = ['English', '中文 — 普通话 (Mandarin Chinese)', 'Español (Spanish)'];
