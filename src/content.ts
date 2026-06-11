// All copy pulled directly from the Infoproduct.io Roadmap document.

// Primary booking link — every Book A Call CTA points here.
export const BOOK_CALL_URL = 'https://tidycal.com/charliedoubtfire/bookyourcall';
// Direct line for questions / queries.
export const TELEGRAM_URL = 'https://t.me/cdoubtfire';

// Hero artwork — requested at high resolution to stay crisp on retina displays.
export const BG_IMAGE_1 =
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260609_195923_b0ba8ace-1d1d-4f2c-9a28-1ab84b330680.png&w=2560&q=92';

export const BG_IMAGE_2 =
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260609_201152_bba90a12-bf12-459f-91f0-51f237dbaf3b.png&w=2560&q=92';

export interface Module {
  title: string;
  description?: string;
  points: string[];
  comingSoon?: boolean;
}

export interface Week {
  numeral: string;
  icon: string;
  title: string;
  description: string;
  modules: Module[];
}

export const WEEKS: Week[] = [
  {
    numeral: 'I',
    icon: 'Brain',
    title: 'Mindset Design',
    description:
      'Success is algorithmic. You will only be as successful as your ability to execute the algorithm. Here, we optimise your ability to execute…',
    modules: [
      {
        title: 'LAYERS',
        description:
          'Most mindset ‘training’ does more harm than good — it creates new LAYERS. You become an actor, a character, a walking lie. Overthinker? Perfectionist? Lazy? These are all symptoms of LAYERS that must be removed.',
        points: [
          'What are LAYERS',
          'How to identify and remove your LAYERS',
          'The MYTH of introversion and extroversion',
          'The secret to unlimited energy (via Layer removal)',
          'What life free from LAYERS will look like for you…',
        ],
      },
      {
        title: 'Core Life Philosophy',
        description:
          'Download the fundamental philosophies synthesised from absorbing the mindsets of 7, 8 and 9-figure business owners. When you change how you think, you change how you act.',
        points: [
          'Nothing Bad Can Happen',
          'Action & Reaction Mindframe',
          'Mental Alchemy (the secret to unlimited willpower)',
          'Linguistic ‘Spells’',
          'ReFraming losses',
          'The secret to ‘Zen-like’ emotional regulation',
        ],
      },
      {
        title: 'Lifestyle Design',
        description:
          'Success is individually defined. With the socially induced programming removed, you can now define what success authentically means to YOU.',
        points: [
          'Defining Success',
          'Who has this already?',
          'Enter a new reality in under 30 days…',
          '[REDACTED]’s simple technique…',
        ],
      },
      {
        title: 'Personal Magnetism (Fundamentals)',
        description:
          'Ever wondered why Tate was dramatically more influential than anyone else in the space? The explanation is Nerve Force, aka Personal Magnetism, aka AURA. I know the man who disclosed these well-guarded secrets to him.',
        points: [
          'An introduction to Personal Magnetism',
          'Winning and Competence',
          'Energy Assessment — exercises & assignments',
        ],
      },
    ],
  },
  {
    numeral: 'II',
    icon: 'Repeat',
    title: 'Systemising Success',
    description:
      'This week is about making success inevitable through systems and getting you where you want to be as quickly and easily as possible…',
    modules: [
      {
        title: 'Lifestyle Detoxification',
        description:
          'Your internals are reflected by the external, the externals are reflected by the internal — learn to take advantage of this symbiotic relationship.',
        points: [
          'Detoxing the physical environment',
          'Detoxing the digital environment',
          'Building a Digital Shield',
        ],
      },
      {
        title: 'Scheduling Success',
        description:
          '“Give me a lever long enough and a fulcrum on which to place it, and I shall move the world.” — Archimedes. It’s not about the time you have, just the efficiency and leverage you use within it.',
        points: [
          'How to work less and achieve more',
          'The lazy method to becoming successful',
          'Practical applications for every aspect of life',
          'Practical applications for an unfair advantage in business',
        ],
      },
      {
        title: 'Peak Performance Morning Routine',
        description:
          'Imagine having so much energy you simply want to work to burn it off — that’s what you’ll experience here.',
        points: [
          'Optimal morning routine made by a professional Holistic Health Advisor',
          'Reach peak productivity, peak energy, remove ‘brain fog’',
          'BONUS: Enter ‘Flow State’ on command [NLP Technique]',
        ],
      },
      {
        title: 'Success With Sleep',
        points: [
          'Optimal night-time routine made by a certified Holistic Health Advisor',
          'BONUS: Hypnosis audio to easily sleep on ‘off nights’',
        ],
      },
      {
        title: 'CEO Workflow',
        points: [
          'The optimal way to create ‘To Do Lists’ and organise daily workflows',
          'How to never ‘second-guess’ what work you should be doing',
          'How to never run out of work',
          'Best tools to use & access to these tools — [REDACTED] Map Strategy',
        ],
      },
    ],
  },
  {
    numeral: 'III',
    icon: 'Blocks',
    title: 'Defining & Building Your Offer',
    description:
      'Build magnetic offers harnessing dark psychological principles, biological human desires, and neuroscience — the dark magick you can’t find anywhere else.',
    modules: [
      {
        title: 'Building Your Offer',
        description:
          'Attention and brand building without a clearly defined offer that appeals to all core and derivative neurologically wired human desires is a waste of time.',
        points: [
          'Reverse engineering success — design the offer to suit the life and income you authentically desire',
          'Niche selection and client avatar congruency (aka product-market fit)',
          'Building magnetic offers (NeuroSales) — the human mind has just ONE core desire; communicate that your offer fulfils it, and everyone buys over a long enough timeframe',
          'Reverse engineering offer mechanics',
          'Offer refinement & sales ammunition',
          'Pricing & preselling — mitigate every costly pricing and timing risk',
        ],
      },
      {
        title: 'Funnel Infrastructure',
        description:
          'Belief is the prerequisite to action. There are 6 beliefs a prospect must hold in order to buy — fail to install one and the prospect simply will not close.',
        points: [
          'The TRUE purpose of content',
          'Hierarchy of Influence — the 6 methods of communication, ranked',
          'The ONLY two goals of marketing',
          '(KEY) Systematic Belief System Installation — the exact playbook of all 6 beliefs and the action plans to install them',
          'Where to send traffic & the purpose of each funnel stage',
          'Funnel breakdown — the simple four stages to a funnel with 9-figure potential',
        ],
      },
      {
        title: 'Asset Creation',
        description:
          'Your sales assets are the most important core of any information business. Done right, they take someone from zero awareness to desperately scrambling for their credit card…',
        points: [
          'VSL Magic — a VSL formula used to generate 9 figures with a single info offer. I will PERSONALLY write your VSL in full, plus a custom-built VSL AI for the future',
          'Content filming & production — film scripted content whilst appearing ‘off the cuff’',
          'Site copy and design — the psychology of optimal brand design, plus the custom Site Copy AI',
          'Telegram techniques',
          'Email AI — upload a transcript and a voice note; get world-class conversion-optimised email copy in a MINUTE',
        ],
      },
    ],
  },
  {
    numeral: 'IV',
    icon: 'Magnet',
    title: 'Client Acquisition',
    description:
      'Imagine leads consistently pouring into your funnel, never to leave and to buy all the upsells — that is what you unlock here (no prior audience required).',
    modules: [
      {
        title: 'Client Acquisition Channels',
        points: [
          'Purpose of each platform',
          'The best platform to conquer first — featuring the most cutting-edge Traffic Exploits',
          'When to start on each platform — get this wrong and you destroy brand perception',
          'What content to produce, depending on your offer — what ACTUALLY converts, across niches, demographics and ticket prices',
        ],
      },
      {
        title: 'Content Mastery',
        points: [
          'Social media setup',
          'Scientific Marketing Plan — generate unlimited video topics optimised to install the correct beliefs and reach peak niche virality',
          'Video structure outline — the optimal structure for YouTube content (the BEST platform for generating sales)',
          'YouTube AI — trained on Belief System Installation, optimal structure, hypnotic language patterns and sales techniques; better than ANY human, in minutes',
          'Title strategies & the Video Title AI — credited to an owner generating high 6 – low 7 figures monthly',
          'Hook mastery, opening psychological loops, talking points, compelling CTAs',
        ],
      },
      {
        title: 'Advanced Content Techniques',
        points: [
          'Tonality & cadence',
          'Body language — Spatial Neuro-Linguistic Programming',
          'Influence via the Iris — secrets from a high-ranking ex-member of the Cobratate team',
          'Advanced Covert Conversation Hypnosis/NLP Playbook — 19 plug-and-play techniques with examples',
        ],
      },
    ],
  },
  {
    numeral: 'V',
    icon: 'Wand2',
    title: 'Conversion Process',
    description:
      'Master sales. If you cannot sell 1:1, how can you hope to sell 1:Millions? Even if you think you are amazing at sales already, there are advanced techniques you don’t yet know exist…',
    modules: [
      {
        title: 'Mindset For Sales',
        description: 'Sales is life. If you can sell, you will never be poor.',
        points: [
          'Why people buy & when people buy',
          'How to remove any anxiety around sales',
          'How to build (and test) unshakeable conviction in your product',
          'How to kill ‘impostor’s syndrome’',
        ],
      },
      {
        title: 'Sales Fundamentals',
        points: [
          'The Doctor Archetype and how to use it',
          'Four criteria for lead quality — and how to extract maximum value from each',
          'Sales process overview',
          'The Four-Stage Sale',
        ],
      },
      {
        title: 'Sample Sales Script',
        description:
          'EXACT language patterns you can use to progress the sale forward with ease and kill any objection effortlessly… often before they even come up.',
        points: [],
      },
      {
        title: 'Advanced Sales Secrets',
        points: [
          'The magic of follow-ups, done the right way',
          'How to close clients easily over text — the secret sauce of how The War Room sales team closes $8,000 clients exclusively via text',
          'How & when to build a sales team — find A-Players, conduct interviews, manage and make your team world-class',
        ],
      },
    ],
  },
  {
    numeral: 'VI',
    icon: 'Gift',
    title: 'After Sales & Fulfilment',
    description:
      'Decrease your fulfilment workload whilst maximising value for clients — and introduce sidesells, upsells and downsells that clients thank you for…',
    modules: [
      {
        title: 'Producing SOPs',
        points: [
          'Decreasing your workload through automation',
          'Increasing professionalism and product quality through SOPs',
        ],
      },
      {
        title: 'Hosting & Producing Great Program Content',
        points: [
          'Creating content that creates impactful, lasting change in clients',
          'Content refinement/ideation process to build the best content on the market',
          'Reaching deeper stages of product-market-fit',
        ],
      },
      {
        title: 'Improving Client Retention Rates',
        points: [
          'The exact formula for ridiculously low churn on subscription-based products',
          'How to quickly win clients back if they have to leave for unavoidable reasons',
        ],
      },
      {
        title: 'Revenue Maximisation',
        points: [
          'Introduce upsells, downsells, side sells, affiliate links and more to drastically increase client LTV — in a way clients actually thank you for',
        ],
      },
    ],
  },
  {
    numeral: 'VII',
    icon: 'Sparkles',
    title: 'Scaling Secrets & Esoteric Techniques',
    description:
      'The advanced secrets and esoteric techniques to drastically amplify your success — this is the dark magick you will never find anywhere else…',
    modules: [
      {
        title: 'Advanced Sales Techniques',
        description:
          '33 techniques in total revealed inside this module; many cannot be mentioned here. Each includes examples, explanations, and plug-and-play frameworks.',
        points: [
          'Increase your close rate by up to 76% via this science-backed tactic',
          'The Mirror Method [NLP], Embedded Commands, Language Traps',
          'The Illusion of Free Will, Burden of Proof, Hypnotist’s Trick for Credibility',
          'X or Y, When To Strike, Destroying The Price Objection',
          'Rick Ross Sales, Future Pacing, Curveballs, Mystery Sell, [Redacted]…',
        ],
      },
      {
        title: '33 Most Hypnotic Language Patterns',
        comingSoon: true,
        points: [
          'Examples and explanations for each',
          'Plug & play frameworks for each',
          'How to install these into your everyday language effortlessly',
        ],
      },
      {
        title: 'Advanced Business Techniques',
        description:
          'Exactly how to take your business to unimaginable heights. These lessons are only possible to absorb via direct transmission — in person, or via 1:1 calls.',
        points: [],
      },
      {
        title: 'Secrets Of Nerve-Force & Personal Magnetism',
        comingSoon: true,
        description:
          'Place 100 random people in a room and force them to select a leader. It wouldn’t be the tallest, smartest, or richest — it would be the individual with the most plentiful supply of NERVE FORCE. Like all skills, this can be learned.',
        points: [
          'The ethics of this power',
          'The mental & physical phases of Personal Magnetism — practical exercises & implementations',
          'Absorption & projection of Nerve Force',
          'The Direct Flash Technique & Contact Magnetism Technique',
          'Practical defence, Influence via the Iris, [REDACTED], much more…',
        ],
      },
      {
        title: 'Mystery Module',
        description: 'I just wish I could share this with you…',
        points: [],
      },
    ],
  },
];

export interface AITool {
  icon: string;
  name: string;
  process: string;
  without: string;
  withIP: string;
  boost: string;
}

export const AI_TOOLS: AITool[] = [
  {
    icon: 'FlaskConical',
    name: 'Scientific Marketing Plan AI',
    process: 'Creating scientific marketing plans / video topics',
    without: '2–4 hours',
    withIP: '10–15 minutes',
    boost: '14x',
  },
  {
    icon: 'Clapperboard',
    name: 'YouTube Script AI',
    process: 'YouTube video scripting',
    without: '3–5 hours',
    withIP: '15–20 minutes',
    boost: '14x',
  },
  {
    icon: 'Type',
    name: 'YouTube Title AI',
    process: 'YouTube video title generation',
    without: '30 minutes',
    withIP: '2–3 minutes',
    boost: '12x',
  },
  {
    icon: 'Mail',
    name: 'Email Copy AI',
    process: 'Email copywriting',
    without: '1–3 hours',
    withIP: '5 minutes',
    boost: '24x',
  },
  {
    icon: 'Search',
    name: 'YouTube SEO AI',
    process: 'YouTube SEO keyword hashing',
    without: '25 minutes',
    withIP: '2 minutes',
    boost: '12x',
  },
  {
    icon: 'ScrollText',
    name: 'VSL Scripting AI',
    process: 'Video Sales Letter scripting',
    without: '5–7 days',
    withIP: '1–2 days, polished',
    boost: '4x',
  },
  {
    icon: 'LayoutTemplate',
    name: 'Site Copy AI',
    process: 'Landing page copywriting',
    without: '1–3 days',
    withIP: '1–2 hours',
    boost: '11x',
  },
];

export interface ComparisonRow {
  topic: string;
  competition: boolean;
}

export const COMPARISON: ComparisonRow[] = [
  { topic: '6 months text & call based 1:1 consulting with founder', competition: false },
  { topic: 'Mindset training (the right way)', competition: false },
  { topic: 'Systems for success', competition: false },
  { topic: 'Offer building workbook', competition: true },
  { topic: 'Neuroscience-based offer building system', competition: false },
  { topic: 'Complete action plan to program your audience’s minds', competition: false },
  { topic: 'VSL scripting strategy', competition: true },
  { topic: 'VSL Scripting AI + founder-written VSL', competition: false },
  { topic: 'Highly converting site copy training', competition: true },
  { topic: 'Site Copy AI', competition: false },
  { topic: 'Email copywriting training', competition: true },
  { topic: 'Email Copywriting AI', competition: false },
  { topic: 'Scientific Marketing Plan AI', competition: false },
  { topic: 'YouTube video structure & title strategies', competition: true },
  { topic: 'YouTube Script AI & Title AI', competition: false },
  { topic: 'How to master oration', competition: false },
  { topic: 'Basic sales training', competition: true },
  { topic: 'Text-based & advanced sales training (lessons from top closers)', competition: false },
  { topic: 'How to build & lead a team of A-Players', competition: false },
  { topic: '33 hypnotic language patterns for maximum persuasion', competition: false },
  { topic: 'Advanced business techniques to scale beyond your wildest dreams', competition: false },
  { topic: 'Advanced secrets of Nerve Force & Personal Magnetism', competition: false },
  { topic: 'Mystery Module…', competition: false },
];

export interface FAQItem {
  q: string;
  a: string[];
}

export const FAQS: FAQItem[] = [
  {
    q: '“It’s too expensive for me!”',
    a: [
      'And that’s exactly why you need INFOPRODUCT.IO more than ever.',
      'Sure, you can buy a cheap program, get cheap quality, get no results and complain that nothing works. You can burn your money, time, and self-belief in the process —',
      'Or, you can pay the 5★ price now and get the 5★ results now. It’s a bigger investment for you today, but once you have applied everything inside it will be literally pennies for you.',
    ],
  },
  {
    q: '“I’m 100% going to join, just not right now…”',
    a: [
      'The longer you wait, the further your competitors program your prospective leads. It becomes increasingly difficult to rewire their prior programming. They take more sales that could have been yours.',
      'Right now, we have a window of arbitrage before these AI efficiency boosters become common practice. Why not start whilst you have the most unfair advantage?',
    ],
  },
  {
    q: '“How do I know this will work for me?”',
    a: [
      'INFOPRODUCT.IO works when you do.',
      'You are given the most straightforward path possible to success, along with my 1:1 consulting for 6 months. Do you see how that gives you everything you need?',
      'If this is not enough for you, then nothing is.',
    ],
  },
  {
    q: '“I’ve had bad experiences with other agencies/programs”',
    a: [
      'We are unlike anything you’ve ever experienced. Why are you comparing us? The results themselves are enough to separate us, if not for the content of the course itself.',
      'Not to mention, you get direct access to a world-class Marketer/Salesman/Presenter on tap for 6 months. Take advantage of everything, apply it, and success is guaranteed. The only way you can fail is if you don’t take action.',
    ],
  },
  {
    q: '“How much free time do I need?”',
    a: [
      'The amount of work and dedication you put in will be the same; the only difference will be that you will save loads of time instead of trying to figure things out yourself.',
      'All you have to do is follow the roadmap, ask questions, get feedback, iterate, and you will experience the most rapid and straightforward path to success. With the cutting-edge AI technology you will find inside, there is literally no quicker, easier way.',
    ],
  },
  {
    q: '“Is this a course or a mentorship? What is it?”',
    a: [
      'This is a Course AND Consulting/Mentorship. You get the full 7 weeks of lessons & assignments, and you also get 6 months of Consulting/Mentorship with me. All are included in the one-time fee.',
      'The goal is that after 6 months, I will have downloaded my brain into yours, and you will no longer need me.',
    ],
  },
  {
    q: '“Can I take advantage of this if I am speaking in another language?”',
    a: [
      'Absolutely. All the information inside applies to every language; in most cases, market sophistication is lower in non-English speaking countries, making it easier for you to dominate.',
      'We have clients speaking many different languages based all across the globe — Azerbaijan, Morocco, France, Italy, Thailand, Spain, just to name a few.',
    ],
  },
];

export interface Deliverable {
  icon: string;
  title: string;
  points: string[];
}

export const DELIVERABLES: Deliverable[] = [
  {
    icon: 'Map',
    title: '7-Week Transformation Program',
    points: [
      'Nothing is held back inside. No secret sauce left to unlock. It’s worked for us countless times, it’s going to work for you.',
      'Lessons and assignments designed to download my brain into yours as efficiently as possible.',
      'Lifetime access to ALL program updates.',
      'Structured to take any beginner to elite level, from 0 to 100. This is the last training you will ever need…',
    ],
  },
  {
    icon: 'UserRound',
    title: '6 Months of Unlimited 1:1 Consulting',
    points: [
      'Unlimited text access with me directly.',
      'Unlimited 1:1 calls for any questions too complex to be answered via text.',
      'If we are ever in the same country, we will cover the direct-transmission lessons together in person.',
      'This is where the highest value is — you WILL have questions and you WILL need feedback. You need to be led by a skilled master, 1:1.',
    ],
  },
  {
    icon: 'Cpu',
    title: 'AI Tool Suite',
    points: [
      'Scientific Marketing Plans, YouTube Videos, YouTube SEO, YouTube Titles, VSL Scripts, Landing Page Copy, Email Copy, and more…',
    ],
  },
  {
    icon: 'PenTool',
    title: '1x Founder-Written VSL',
    points: [
      'The most important core of an information business — written personally, in full, using a formula that has generated 9 figures with a single info offer.',
    ],
  },
  {
    icon: 'Handshake',
    title: 'Access to My Personal Industry Connections',
    points: [
      'Payment processing solutions — guaranteed to beat your current fee structure, white glove service.',
      'In-house dispute resolution team with veterans from Wells Fargo, Chase, and Bank of America — writes detailed evidence packages and wins.',
      'Social media un-banners and brokers — Meta, YouTube, Twitter and so on…',
    ],
  },
  {
    icon: 'Gift',
    title: 'Complimentary Welcome Gifts',
    points: ['Delivered directly to you — wherever you are in the world…'],
  },
];
