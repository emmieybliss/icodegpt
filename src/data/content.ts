export const DOMAIN = 'iCodeGPT.com'
export const BRAND = 'iCodeGPT'
export const PRICE = 4995
export const PRICE_LABEL = '$4,995'
export const SELLER_EMAIL = 'sales@allbiohub.com'
export const MAILTO = `mailto:${SELLER_EMAIL}?subject=${encodeURIComponent('Inquiry about iCodeGPT.com')}`
export const ACQUIRE_URL =
  'https://forsale.godaddy.com/forsale/icodegpt.com?utm_source=TDFS_BINNS2&utm_medium=parkedpages&utm_campaign=x_corp_tdfs-binns2_base&traffic_type=TDFS_BINNS2&traffic_id=binns2'

export const NAV_LINKS = [
  { label: 'Vision', href: '#vision' },
  { label: 'Possibilities', href: '#possibilities' },
  { label: 'Why iCodeGPT', href: '#why' },
  { label: 'Valuation', href: '#valuation' },
  { label: 'FAQ', href: '#faq' },
] as const

export type ConceptKey = 'assistant' | 'agent' | 'platform' | 'academy' | 'api' | 'ide'

export const POSSIBILITIES: { key: ConceptKey; title: string; body: string }[] = [
  { key: 'assistant', title: 'AI Coding Assistant', body: 'Generate, explain, refactor and debug code with AI.' },
  { key: 'agent', title: 'Autonomous Coding Agent', body: 'Turn development tasks into AI-powered workflows.' },
  { key: 'platform', title: 'AI Developer Platform', body: 'Build a complete suite of intelligent tools for modern engineering teams.' },
  { key: 'academy', title: 'AI Coding Academy', body: 'Teach the next generation of developers with AI-assisted learning.' },
  { key: 'api', title: 'Developer API', body: 'Power your own applications with intelligent coding capabilities.' },
  { key: 'ide', title: 'AI-Powered IDE', body: 'Reimagine the development environment around intelligent assistance.' },
]

export const NAME_PARTS = [
  {
    token: 'iCode',
    lead: 'Immediately signals',
    points: ['coding', 'software', 'developers', 'programming'],
  },
  {
    token: 'GPT',
    lead: 'Recognizable shorthand associated with',
    points: ['generative AI', 'language models', 'intelligent software'],
  },
  {
    token: '.COM',
    lead: 'A globally recognized',
    points: ['commercial extension', 'default for startups', 'easy to say and type'],
  },
] as const

export type SaleKind = 'completed' | 'asking'

export interface Comparable {
  domain: string
  price: string
  kind: SaleKind
  detail: string
  source: { label: string; url: string }
}

// Only figures traceable to a public source are listed. Unverified figures are left out on purpose.
export const COMPARABLES: Comparable[] = [
  {
    domain: 'ZipChat.com',
    price: '$40,000',
    kind: 'completed',
    detail: 'Private sale · reported Jul 27, 2026',
    source: {
      label: 'NamePros / NameBio report',
      url: 'https://www.namepros.com/threads/zipchat-com-sold-for-40-000.1393897/',
    },
  },
  {
    domain: 'Codi.com',
    price: '$40,000',
    kind: 'completed',
    detail: 'Sedo · reported Mar 2020',
    source: {
      label: 'Domain Name Wire',
      url: 'https://domainnamewire.com/2020/03/06/13-end-user-domain-name-sales-codi/',
    },
  },
  {
    domain: 'OneGraph.com',
    price: '$3,766',
    kind: 'completed',
    detail: 'GoDaddy · reported Jul 27, 2026',
    source: {
      label: 'NamePros / NameBio report',
      url: 'https://www.namepros.com/threads/zipchat-com-sold-for-40-000-inversor-com-for-17-000.1394026/',
    },
  },
  {
    domain: 'Compost.ai',
    price: '$1,725',
    kind: 'completed',
    detail: 'Namecheap · reported Jul 27, 2026',
    source: {
      label: 'NamePros / NameBio report',
      url: 'https://www.namepros.com/threads/zipchat-com-sold-for-40-000-inversor-com-for-17-000.1394026/',
    },
  },
  {
    domain: 'Code7.com',
    price: '$38,000',
    kind: 'asking',
    detail: 'Current Buy Now listing · not a completed sale',
    source: {
      label: 'GoDaddy listing',
      url: 'https://forsale.godaddy.com/forsale/code7.com',
    },
  },
]

export const AUDIENCE = [
  'AI startup founders',
  'Developer-tool companies',
  'SaaS entrepreneurs',
  'Software companies',
  'AI agencies',
  'EdTech companies',
  'Developer communities',
  'Domain investors',
  'Technology brands',
  'Venture-backed startups',
] as const

export const HOMEPAGE_CONCEPTS = [
  { headline: 'Your AI coding partner.', cta: 'Start Building', hue: 'blue' },
  { headline: 'Ship software at the speed of thought.', cta: 'Meet your coding agent', hue: 'violet' },
  { headline: 'AI infrastructure for modern developers.', cta: 'Explore the platform', hue: 'cyan' },
] as const

export const STEPS = [
  { n: '01', title: 'Acquire', body: 'Purchase iCodeGPT.com through Afternic.' },
  { n: '02', title: 'Transfer', body: 'Complete the domain transfer process through the marketplace.' },
  { n: '03', title: 'Build', body: 'Turn iCodeGPT into your AI product, company or developer brand.' },
] as const

export const FAQS: { q: string; a: string; link?: { label: string; href: string } }[] = [
  { q: 'Is iCodeGPT.com for sale?', a: 'Yes. The domain is currently available for acquisition.' },
  { q: 'How much is iCodeGPT.com?', a: 'The current asking price is $4,995 USD.' },
  {
    q: 'Where can I purchase it?',
    a: 'Through the Afternic listing, which handles checkout and the domain transfer.',
    link: { label: 'Open the Afternic listing', href: ACQUIRE_URL },
  },
  {
    q: 'Can I make an offer?',
    a: `Yes. Buyers can contact the seller at ${SELLER_EMAIL}.`,
    link: { label: `Email ${SELLER_EMAIL}`, href: MAILTO },
  },
  {
    q: 'Is iCodeGPT an existing AI product?',
    a: 'No. This website is a conceptual presentation of what could be built around the domain. The domain itself is the asset being offered for acquisition.',
  },
  {
    q: 'Is iCodeGPT affiliated with OpenAI?',
    a: 'No. iCodeGPT.com is independently offered for sale and has no stated affiliation with OpenAI, ChatGPT, or any other AI company.',
  },
  {
    q: 'What could the domain be used for?',
    a: 'AI coding assistants, developer tools, AI IDEs, coding agents, developer SaaS, programming education, APIs, AI agencies and other technology products.',
  },
  {
    q: 'Is the $4,995 valuation guaranteed?',
    a: 'No. Domain valuations are subjective. $4,995 is the current asking price, not an independent appraisal.',
  },
]
