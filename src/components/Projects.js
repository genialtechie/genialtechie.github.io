import JARentals from '../images/jai.png';
import loudr from '../images/loudr.png';
import magpollo from '../images/magpollo.png';

export const FEATURED = [
  {
    title: 'Magpollo',
    desc: 'Website for Magpollo, my digital agency.',
    image: magpollo,
    tools: ['Nextjs', 'Tailwind', 'Nodemailer'],
    github: 'https://github.com/genialtechie/magpollo-landing',
    preview: 'https://magpollo.com',
    right: true,
  },
  {
    title: 'JA Inflatables',
    desc: 'E-commerce website for a kids event rental company. It features a shop, payment processing and uses the square seller dashboard.',
    image: JARentals,
    tools: ['Nextjs', 'Prisma', 'MongoDB', 'Square API'],
    github: 'https://github.com/genialtechie/event-replan',
    preview: 'https://jumparoundinfl.com',
    right: false,
  },
  {
    title: 'loudronline',
    desc: 'Landing page for loudronline, a media platform that connects emerging creators and brands.',
    image: loudr,
    tools: ['React', 'Tailwind', 'Firebase'],
    github: 'https://github.com/genialtechie/loudr-landing',
    preview: 'https://www.loudr.online',
    right: true,
  },
];

export const PROJECTS = [
  {
    title: 'No-Comment',
    desc: 'A gpt powered comment generator for Visual Studio Code. It generates comments for your code based on the context.',
    github: 'https://github.com/genialtechie/no-comment',
    tools: ['Node.js', 'TypeScript', 'VSCode Extension', 'OpenAI API'],
  },
  {
    title: 'Spotify API',
    desc: 'Visualize your Spotify top artists and tracks.',
    github: 'https://github.com/genialtechie/spotify-api',
    tools: ['React', 'Express', 'Serverless-Functions', 'Spotify API'],
  },
  {
    title: 'Dapp Starter kit',
    desc: 'A beginner-friendly decentralized app starter kit.',
    github: 'https://github.com/genialtechie/dapp-starter-kit',
    tools: ['Solidity', 'Node.js', 'Web3.js', 'Truffle'],
  },
  {
    title: 'Web3 Auth',
    desc: 'This is an api I built to implement how login with MetaMask can be used on a regular web app.',
    github: 'https://github.com/genialtechie/web3-auth',
    tools: ['Node.js', 'MongoDB', 'MetaMask'],
  },
  {
    title: 'Crypto Crowdsale',
    desc: 'This is an erc-20  token I designed using Solidity, Truffle & Web3js.',
    github: 'https://github.com/genialtechie/erc20-compliant-token',
    tools: ['HTML', 'CSS', 'VanillaJS', 'Solidity'],
  },
  {
    title: 'Twitter Bot',
    desc: 'Converts your tweet to a meme and replies to you.',
    github: 'https://github.com/genialtechie/twitter-bot',
    tools: ['APIs', 'Node.js'],
  },
  {
    title: 'Algorithms',
    desc: 'A repository of algorithms solved by me.',
    github: 'https://github.com/genialtechie/algo-practice',
    tools: ['Data Structures', 'Algorithms'],
  },
  {
    title: 'Analog Clock',
    desc: 'An analog clock I designed using css and javascript.',
    github: 'https://github.com/genialtechie/css-js-clock',
    tools: ['HTML', 'CSS', 'VanillaJS'],
  },
  {
    title: 'Decentralized wallet',
    desc: 'Connect to MetaMask and send/recieve test tokens/eth.',
    github: 'https://github.com/genialtechie/decentralized-wallet',
    tools: ['Solidity', 'Node.js', 'Web3.js', 'Truffle'],
  },
  {
    title: 'Portfolio v2',
    desc: 'Codebase for this site.',
    github: 'https://github.com/genialtechie/portfolio-v2',
    tools: ['React', 'Tailwind'],
  },
];
