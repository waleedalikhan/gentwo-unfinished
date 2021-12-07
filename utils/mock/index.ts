import {
  IExploreCards,
  IClientReview,
  INewsCard,
  IFeedCard,
  IVideoCard,
  IEcoPartnerCard,
  ITeamCard,
  ICareerCard
} from "@/utils/interfaces";

export const exploreCards: IExploreCards[] = [
  {
    id: 1,
    isVertical: true,
    cardImg: { default: "/img/explore-section/explore-1.jpg" },
    cardLogo: "/img/explore-section/explore-card-y-logos/logo-one.svg",
    cardTitle:
      "How Tavis Digital made promising blockchain business models investable",
    cardDate: "7 February 2021",
    cardSubtitle:
      "Tavis Digital is an innovative Swiss asset management company that focuses entirely on the portfolio management of digital assets...",
    cardTags: [
      {
        id: 1,
        bg: "bg-teal",
        text: "Client Spotlight"
      },
      {
        id: 2,
        bg: "bg-light-teal",
        text: "Digital Markets"
      },
      {
        id: 3,
        bg: "bg-light-secondary-body",
        text: "Asset Manager"
      }
    ],
    hasProductSpotlight: true,
    hasCaseStudy: false,
    cardClass: "card-one",
    animation: "fade-right"
  },
  {
    id: 2,
    isVertical: false,
    cardImg: { default: "side-img-one" },
    cardTitle: "DeFi: Decentralized Finance",
    cardSubtitle:
      "A flexible and effective solution to implement DeFi protocols into digital asset portfolios...",
    cardTags: [
      {
        id: 1,
        bg: "bg-medium-bronze",
        text: "Use Case"
      },
      {
        id: 2,
        bg: "bg-light-teal",
        text: "Digital Markets"
      },
      {
        id: 3,
        bg: "bg-light-secondary-body",
        text: "Trade Finance"
      }
    ],
    hasProductSpotlight: false,
    hasCaseStudy: true,
    cardClass: "card-two",
    animation: "fade-left"
  },
  {
    id: 3,
    isVertical: false,
    cardImg: { default: "side-img-two" },
    cardTitle: "Implement your Portfolio Strategy",
    cardSubtitle:
      "Individual and bespoke issuance solutions with an unlimited number of AMCs...",
    cardTags: [
      {
        id: 1,
        bg: "bg-medium-bronze",
        text: "Use Case"
      },
      {
        id: 2,
        bg: "bg-light-teal",
        text: "Private Markets"
      },
      {
        id: 3,
        bg: "bg-light-teal-lighter",
        text: "AMC"
      },
      {
        id: 4,
        bg: "bg-light-secondary-body",
        text: "Venture Capital "
      }
    ],
    hasProductSpotlight: false,
    hasCaseStudy: true,
    cardClass: "card-three",
    animation: "fade-right"
  },
  {
    id: 4,
    isVertical: true,
    cardImg: { default: "/img/explore-section/explore-4.jpg" },
    cardLogo: "/img/explore-section/explore-card-y-logos/logo-two.svg",
    cardTitle:
      "How Stableton is building the next generation managed marketplace for alternative investments",
    cardDate: "7 February 2021",
    cardSubtitle:
      "Stableton is building the next generation managed marketplace for alternative investments (think Amazon of alternative investments). They are connecting the whole ecosystem digitally, meaning across x... ",
    cardTags: [
      {
        id: 1,
        bg: "bg-teal",
        text: "Product Spotlight"
      },
      {
        id: 2,
        bg: "bg-medium-bronze",
        text: "Public Markets"
      },
      {
        id: 3,
        bg: "bg-medium-teal",
        text: "CLN"
      },
      {
        id: 4,
        bg: "bg-light-secondary-body",
        text: "Broker"
      }
    ],
    hasProductSpotlight: true,
    hasCaseStudy: false,
    cardClass: "card-four",
    animation: "fade-left"
  },
  {
    id: 5,
    isVertical: true,
    cardImg: { default: "/img/explore-section/explore-5.jpg" },
    cardLogo: "/img/explore-section/explore-card-y-logos/logo-three.svg",
    cardTitle: "How Barry Films has developed an investable film strategy",
    cardDate: "7 February 2021",
    cardSubtitle:
      "GenTwo’s actively managed certificate (AMC) helped us connect the film world to the finance world, giving investors access to an area that wasn't investible  before. It helped us to get the liquidity necessary... ",
    cardTags: [
      {
        id: 1,
        bg: "bg-teal",
        text: "Product Spotlight"
      },
      {
        id: 2,
        bg: "bg-light-teal",
        text: "Private Markets"
      },
      {
        id: 3,
        bg: "bg-light-teal-lighter",
        text: "AMC"
      }
    ],
    hasProductSpotlight: true,
    hasCaseStudy: false,
    cardClass: "card-five",
    animation: "fade-right"
  },
  {
    id: 6,
    isVertical: false,
    cardImg: { default: "side-img-three" },
    cardTitle: "Hotel Project Financing",
    cardSubtitle:
      "Unleash a network effect in a hotel project by securitizing a loan.",
    cardTags: [
      {
        id: 1,
        bg: "bg-medium-bronze",
        text: "Use Case"
      },
      {
        id: 2,
        bg: "bg-light-teal",
        text: "Public Markets"
      }
    ],
    hasProductSpotlight: false,
    hasCaseStudy: true,
    cardClass: "card-six",
    animation: "fade-left"
  }
];

export const exploreCardsTabs: IExploreCards[] = [
  {
    id: 1,
    isVertical: true,
    cardImg: { default: "/img/explore-section/explore-1.jpg" },
    cardLogo: "/img/explore-section/explore-card-y-logos/logo-one.svg",
    cardTitle:
      "How Tavis Digital made promising blockchain business models investable",
    cardDate: "7 February 2021",
    cardSubtitle:
      "Tavis Digital is an innovative Swiss asset management company that focuses entirely on the portfolio management of digital assets...",
    cardTags: [
      {
        id: 1,
        bg: "bg-teal",
        text: "Product Spotlight"
      },
      {
        id: 2,
        bg: "bg-light-teal",
        text: "Digital Markets"
      },
      {
        id: 3,
        bg: "bg-light-secondary-body",
        text: "Asset Manager"
      }
    ],
    hasProductSpotlight: true,
    hasCaseStudy: false,
    cardClass: "card-one",
    animation: "fade-right"
  },
  {
    id: 2,
    isVertical: false,
    cardImg: { default: "side-img-one" },
    cardTitle: "DeFi: Decentralized Finance",
    cardSubtitle:
      "A flexible and effective solution to implement DeFi protocols into digital asset portfolios...",
    cardTags: [
      {
        id: 1,
        bg: "bg-medium-bronze",
        text: "Use Case"
      },
      {
        id: 2,
        bg: "bg-light-teal",
        text: "Digital Markets"
      },
      {
        id: 3,
        bg: "bg-light-secondary-body",
        text: "Trade Finance"
      }
    ],
    hasProductSpotlight: false,
    hasCaseStudy: true,
    cardClass: "card-two",
    animation: "fade-left"
  },
  {
    id: 4,
    isVertical: true,
    cardImg: { default: "/img/explore-section/explore-4.jpg" },
    cardLogo: "/img/explore-section/explore-card-y-logos/logo-two.svg",
    cardTitle:
      "How Stableton is building the next generation managed marketplace for alternative investments",
    cardDate: "7 February 2021",
    cardSubtitle:
      "Stableton is building the next generation managed marketplace for alternative investments (think Amazon of alternative investments). They are connecting the whole ecosystem digitally, meaning across x... ",
    cardTags: [
      {
        id: 1,
        bg: "bg-teal",
        text: "Product Spotlight"
      },
      {
        id: 2,
        bg: "bg-medium-bronze",
        text: "Public Markets"
      },
      {
        id: 3,
        bg: "bg-medium-teal",
        text: "CLN"
      },
      {
        id: 4,
        bg: "bg-light-secondary-body",
        text: "Broker"
      }
    ],
    hasProductSpotlight: true,
    hasCaseStudy: false,
    cardClass: "card-four",
    animation: "fade-left"
  },
  {
    id: 3,
    isVertical: false,
    cardImg: { default: "side-img-two" },
    cardTitle: "Implement your Portfolio Strategy",
    cardSubtitle:
      "Individual and bespoke issuance solutions with an unlimited number of AMCs...",
    cardTags: [
      {
        id: 1,
        bg: "bg-medium-bronze",
        text: "Use Case"
      },
      {
        id: 2,
        bg: "bg-light-teal",
        text: "Private Markets"
      },
      {
        id: 3,
        bg: "bg-light-teal-lighter",
        text: "AMC"
      },
      {
        id: 4,
        bg: "bg-light-secondary-body",
        text: "Venture Capital "
      }
    ],
    hasProductSpotlight: false,
    hasCaseStudy: true,
    cardClass: "card-three",
    animation: "fade-right"
  },
  {
    id: 5,
    isVertical: true,
    cardImg: { default: "/img/explore-section/explore-5.jpg" },
    cardLogo: "/img/explore-section/explore-card-y-logos/logo-three.svg",
    cardTitle: "How Barry Films has developed an investable film strategy",
    cardDate: "7 February 2021",
    cardSubtitle:
      "GenTwo’s actively managed certificate (AMC) helped us connect the film world to the finance world, giving investors access to an area that wasn't investible  before. It helped us to get the liquidity necessary... ",
    cardTags: [
      {
        id: 1,
        bg: "bg-teal",
        text: "Product Spotlight"
      },
      {
        id: 2,
        bg: "bg-light-teal",
        text: "Private Markets"
      },
      {
        id: 3,
        bg: "bg-light-teal-lighter",
        text: "AMC"
      }
    ],
    hasProductSpotlight: true,
    hasCaseStudy: false,
    cardClass: "card-five",
    animation: "fade-right"
  },
  {
    id: 6,
    isVertical: false,
    cardImg: { default: "side-img-three" },
    cardTitle: "Hotel Project Financing",
    cardSubtitle:
      "Unleash a network effect in a hotel project by securitizing a loan.",
    cardTags: [
      {
        id: 1,
        bg: "bg-medium-bronze",
        text: "Use Case"
      },
      {
        id: 2,
        bg: "bg-light-teal",
        text: "Public Markets"
      }
    ],
    hasProductSpotlight: false,
    hasCaseStudy: true,
    cardClass: "card-six",
    animation: "fade-left"
  }
];

export const exploreCardsPhone: IExploreCards[] = [
  {
    id: 1,
    isVertical: true,
    cardImg: { default: "/img/explore-section/explore-1.jpg" },
    cardLogo: "/img/explore-section/explore-card-y-logos/logo-one.svg",
    cardTitle:
      "How Tavis Digital made promising blockchain business models investable",
    cardDate: "7 February 2021",
    cardSubtitle:
      "Tavis Digital is an innovative Swiss asset management company that focuses entirely on the portfolio management of digital assets...",
    cardTags: [
      {
        id: 1,
        bg: "bg-teal",
        text: "Product Spotlight"
      },
      {
        id: 2,
        bg: "bg-light-teal",
        text: "Digital Markets"
      },
      {
        id: 3,
        bg: "bg-light-secondary-body",
        text: "Asset Manager"
      }
    ],
    hasProductSpotlight: true,
    hasCaseStudy: false,
    cardClass: "card-one",
    animation: "fade-right"
  },
  {
    id: 2,
    isVertical: false,
    cardImg: { default: "side-img-one" },
    cardTitle: "DeFi: Decentralized Finance",
    cardSubtitle:
      "A flexible and effective solution to implement DeFi protocols into digital asset portfolios...",
    cardTags: [
      {
        id: 1,
        bg: "bg-medium-bronze",
        text: "Use Case"
      },
      {
        id: 2,
        bg: "bg-light-teal",
        text: "Digital Markets"
      },
      {
        id: 3,
        bg: "bg-light-secondary-body",
        text: "Trade Finance"
      }
    ],
    hasProductSpotlight: false,
    hasCaseStudy: true,
    cardClass: "card-two",
    animation: "fade-left"
  },
  {
    id: 4,
    isVertical: true,
    cardImg: { default: "/img/explore-section/explore-4.jpg" },
    cardLogo: "/img/explore-section/explore-card-y-logos/logo-two.svg",
    cardTitle:
      "How Stableton is building the next generation managed marketplace for alternative investments",
    cardDate: "7 February 2021",
    cardSubtitle:
      "Stableton is building the next generation managed marketplace for alternative investments (think Amazon of alternative investments). They are connecting the whole ecosystem digitally, meaning across x... ",
    cardTags: [
      {
        id: 1,
        bg: "bg-teal",
        text: "Product Spotlight"
      },
      {
        id: 2,
        bg: "bg-medium-bronze",
        text: "Public Markets"
      },
      {
        id: 3,
        bg: "bg-medium-teal",
        text: "CLN"
      },
      {
        id: 4,
        bg: "bg-light-secondary-body",
        text: "Broker"
      }
    ],
    hasProductSpotlight: true,
    hasCaseStudy: false,
    cardClass: "card-four",
    animation: "fade-left"
  },
  {
    id: 3,
    isVertical: false,
    cardImg: { default: "side-img-two" },
    cardTitle: "Implement your Portfolio Strategy",
    cardSubtitle:
      "Individual and bespoke issuance solutions with an unlimited number of AMCs...",
    cardTags: [
      {
        id: 1,
        bg: "bg-medium-bronze",
        text: "Use Case"
      },
      {
        id: 2,
        bg: "bg-light-teal",
        text: "Private Markets"
      },
      {
        id: 3,
        bg: "bg-light-teal-lighter",
        text: "AMC"
      },
      {
        id: 4,
        bg: "bg-light-secondary-body",
        text: "Venture Capital "
      }
    ],
    hasProductSpotlight: false,
    hasCaseStudy: true,
    cardClass: "card-three",
    animation: "fade-right"
  },
  {
    id: 5,
    isVertical: true,
    cardImg: { default: "/img/explore-section/explore-5.jpg" },
    cardLogo: "/img/explore-section/explore-card-y-logos/logo-three.svg",
    cardTitle: "How Barry Films has developed an investable film strategy",
    cardDate: "7 February 2021",
    cardSubtitle:
      "GenTwo’s actively managed certificate (AMC) helped us connect the film world to the finance world, giving investors access to an area that wasn't investible  before. It helped us to get the liquidity necessary... ",
    cardTags: [
      {
        id: 1,
        bg: "bg-teal",
        text: "Product Spotlight"
      },
      {
        id: 2,
        bg: "bg-light-teal",
        text: "Private Markets"
      },
      {
        id: 3,
        bg: "bg-light-teal-lighter",
        text: "AMC"
      }
    ],
    hasProductSpotlight: true,
    hasCaseStudy: false,
    cardClass: "card-five",
    animation: "fade-right"
  },
  {
    id: 6,
    isVertical: false,
    cardImg: { default: "side-img-three" },
    cardTitle: "Hotel Project Financing",
    cardSubtitle:
      "Unleash a network effect in a hotel project by securitizing a loan.",
    cardTags: [
      {
        id: 1,
        bg: "bg-medium-bronze",
        text: "Use Case"
      },
      {
        id: 2,
        bg: "bg-light-teal",
        text: "Public Markets"
      }
    ],
    hasProductSpotlight: false,
    hasCaseStudy: true,
    cardClass: "card-six",
    animation: "fade-left"
  }
];

export const clientReviews: IClientReview[] = [
  {
    id: 1,
    clientMsg:
      "The platform is a complete success. It allows us to quickly, easily and cost-effectively carry out securitizations that previously were not possible in this way. Within a short time, new customers were able to convince themselves of the platform and implement their first projects - the customer feedback is overwhelming.",
    clientImg: "/img/client-reviews/client-1.png",
    clientName: "Giuliano Glocker",
    clientRole: "Managing Partner CAT Financial Products"
  },
  {
    id: 2,
    clientMsg:
      'GenTwo’s solution combines flexibility and innovation. We develop and implement new ideas faster and cheaper than before. "Tailor-made" has never been easier.',
    clientImg: "/img/client-reviews/client-2.png",
    clientName: "Roger Ganz",
    clientRole: "Head Asset Management Clarus Capital Group AG"
  },
  {
    id: 3,
    clientMsg:
      "Until GenTwo came along, investing in digital assets was a mine field of operational difficulties. Once they put their best minds at solving this problem, the workflow has become as simple as traditional investments.",
    clientImg: "/img/client-reviews/client-3.png",
    clientName: "Ralf Glabischnig",
    clientRole: "Founding Member Swiss Blockchain Federation"
  },
  {
    id: 4,
    clientMsg:
      "The platform is a complete success. It allows us to quickly, easily and cost-effectively carry out securitizations that previously were not possible in this way. Within a short time, new customers were able to convince themselves of the platform and implement their first projects - the customer feedback is overwhelming.",
    clientImg: "/img/client-reviews/client-1.png",
    clientName: "Giuliano Glocker",
    clientRole: "Managing Partner CAT Financial Products"
  },
  {
    id: 5,
    clientMsg:
      'GenTwo’s solution combines flexibility and innovation. We develop and implement new ideas faster and cheaper than before. "Tailor-made" has never been easier.',
    clientImg: "/img/client-reviews/client-2.png",
    clientName: "Roger Ganz",
    clientRole: "Head Asset Management Clarus Capital Group AG"
  },
  {
    id: 6,
    clientMsg:
      "Until GenTwo came along, investing in digital assets was a mine field of operational difficulties. Once they put their best minds at solving this problem, the workflow has become as simple as traditional investments.",
    clientImg: "/img/client-reviews/client-3.png",
    clientName: "Ralf Glabischnig",
    clientRole: "Founding Member Swiss Blockchain Federation"
  }
];

export const latestNews: INewsCard[] = [
  {
    id: 1,
    cardTag: "News",
    cardDate: "3 June 2021",
    cardTitle: "Monthly Pulse — June ‘21",
    cardSubtitle:
      "Economic Outlook With price growth data in the US and Europe exceeding expectations, US President proposing more and more enormous spending plans - the latest one amounting to $6T - and omnipresent supply shortages...",
    cardImg: "/img/latest-news/news-1.jpg"
  },
  {
    id: 2,
    cardTag: "Insights",
    cardDate: "5 May 2021",
    cardTitle:
      "How shipping containers, films and Blockchain startups are finding their way into classic investment portfolios",
    cardSubtitle:
      "The Zurich securitization specialist GenTwo is disrupting the investment market. Any kind of traditional or innovative asset can be brought directly to the market today, via the company’s off-balance sheet....",
    cardImg: "/img/latest-news/news-2.jpg"
  },
  {
    id: 3,
    cardTag: "News",
    cardDate: "3 June 2021",
    cardTitle: "Monthly Pulse — June ‘21",
    cardSubtitle:
      "Economic Outlook With price growth data in the US and Europe exceeding expectations, US President proposing more and more enormous spending plans - the latest one amounting to $6T - and omnipresent supply shortages...",
    cardImg: "/img/latest-news/news-1.jpg"
  },
  {
    id: 4,
    cardTag: "Insights",
    cardDate: "5 May 2021",
    cardTitle:
      "How shipping containers, films and Blockchain startups are finding their way into classic investment portfolios",
    cardSubtitle:
      "The Zurich securitization specialist GenTwo is disrupting the investment market. Any kind of traditional or innovative asset can be brought directly to the market today, via the company’s off-balance sheet....",
    cardImg: "/img/latest-news/news-2.jpg"
  }
];

export const exploreTopicCards: IFeedCard[] = [
  {
    id: 1,
    cardImg: { default: "/img/pulse-page/explore-topic/img-one.svg" },
    cardTag: "News",
    cardDate: "16 June 2021",
    cardTitle: "ASSETRUSH 2021 Get your ticket now!",
    cardText:
      "ASSSETRUSH unites the community to build platforms of the next generation and explore how a modular solution can ben a cornerstone to grow your business...",
    animationDelay: "200",
    cardPath: "/pulse"
  },
  {
    id: 2,
    cardImg: { default: "/img/pulse-page/explore-topic/img-two.png" },
    cardTag: "Insights",
    cardDate: "5 May 2021",
    cardTitle:
      "How shipping containers, films and Blockchain startups  are finding their way into classic investment portfolios",
    cardText:
      "The Zurich securitization specialist GenTwo is disrupting the investment market...",
    animationDelay: "400",
    cardPath: "/pulse"
  },
  {
    id: 3,
    cardImg: { default: "/img/pulse-page/explore-topic/img-three.png" },
    cardTag: "Markets",
    cardDate: "3 June 2021",
    cardTitle: "Monthly Pulse — June ‘21",
    cardText:
      "Economic Outlook With price growth data in the US and Europe exceeding expectations, US President proposing more and more enormous spending plans...",
    animationDelay: "600",
    cardPath: "/pulse"
  },
  {
    id: 6,
    cardImg: { default: "/img/pulse-page/explore-topic/img-three.png" },
    cardTag: "Markets",
    cardDate: "3 June 2021",
    cardTitle: "Monthly Pulse — June ‘21",
    cardText:
      "Economic Outlook With price growth data in the US and Europe exceeding expectations, US President proposing more and more enormous spending plans...",
    animationDelay: "200",
    cardPath: "/pulse"
  },
  {
    id: 5,
    cardImg: { default: "/img/pulse-page/explore-topic/img-two.png" },
    cardTag: "Insights",
    cardDate: "5 May 2021",
    cardTitle:
      "How shipping containers, films and Blockchain startups  are finding their way into classic investment portfolios",
    cardText:
      "The Zurich securitization specialist GenTwo is disrupting the investment market...",
    animationDelay: "400",
    cardPath: "/pulse"
  },
  {
    id: 4,
    cardImg: { default: "/img/pulse-page/explore-topic/img-one.svg" },
    cardTag: "News",
    cardDate: "16 June 2021",
    cardTitle: "ASSETRUSH 2021 Get your ticket now!",
    cardText:
      "ASSSETRUSH unites the community to build platforms of the next generation and explore how a modular solution can ben a cornerstone to grow your business...",
    animationDelay: "600",
    cardPath: "/pulse"
  }
];

export const podcastCards: IVideoCard[] = [
  {
    id: 1,
    cardThumbnail: "/img/pulse-page/podcast-section/podcast-one.png",
    cardTitle:
      "How Solvium Capital created access to shipping containers and swap bodies",
    cardDate: "7 May 2021"
  },
  {
    id: 2,
    cardThumbnail: "/img/pulse-page/podcast-section/podcast-two.png",
    cardTitle: "How Barry Films has developed an investable film strategy",
    cardDate: "1 May 2021"
  },
  {
    id: 3,
    cardThumbnail: "/img/pulse-page/podcast-section/podcast-three.png",
    cardTitle: "GenTwo’s growth — Facts, figures & insights",
    cardDate: "23 April 2021"
  }
];

export const exploreNewsTopicCards: IFeedCard[] = [
  {
    id: 1,
    cardImg: { default: "/img/pulse-page/explore-topic/img-four.svg" },
    cardTag: "Press Release",
    cardDate: "16 June 2021",
    cardTitle:
      "InCore Bank launches new solution for crypto investment products",
    cardText:
      "InCore Bank’s new crypto asset solution, established with securitization platform provider GenTwo Digital, allows asset managers and banks for ...",
    animationDelay: "200",
    cardPath: "/pulse/news/press-release"
  },
  {
    id: 2,
    cardImg: { default: "/img/pulse-page/explore-topic/img-five.png" },
    cardTag: "Insights",
    cardDate: "5 May 2021",
    cardTitle:
      "GenTwo Digital featured in the Swiss Digital Asset and Wealth Management Report 2021",
    cardText:
      "GenTwo Digital is proud to be included in the first Swiss Digital Asset and Wealth...",
    animationDelay: "400",
    cardPath: "/pulse/news/insights"
  },
  {
    id: 3,
    cardImg: { default: "/img/pulse-page/explore-topic/img-six.png" },
    cardTag: "Markets",
    cardDate: "3 June 2021",
    cardTitle:
      "“We want to establish ourselves as a global player and step out of our current niche.”",
    cardText:
      "Jörg Bode, CEO of GenTwo, interviewed by moneycab,  discusses the changes in the financial industry, important projects...",
    animationDelay: "600",
    cardPath: "/pulse/news/insights-press-release"
  },
  {
    id: 4,
    cardImg: { default: "/img/pulse-page/explore-topic/img-seven.png" },
    cardTag: "Markets",
    cardDate: "5 May 2021",
    cardTitle:
      "The Swiss Longevity Valley: How Switzerland Will Become a Global Longevity Financial MegaHub by 2025",
    cardText:
      "Its specific strengths in international finance and FinTech in particular make it poised...",
    animationDelay: "200",
    cardPath: "/pulse/news/blog-longform"
  },
  {
    id: 5,
    cardImg: { default: "/img/pulse-page/explore-topic/img-two.png" },
    cardTag: "Insights",
    cardDate: "5 May 2021",
    cardTitle:
      "How shipping containers, films and Blockchain startups  are finding their way into classic investment portfolios",
    cardText:
      "The Zurich securitization specialist GenTwo is disrupting the investment market...",
    animationDelay: "400",
    cardPath: "/pulse"
  },
  {
    id: 6,
    cardImg: { default: "/img/pulse-page/explore-topic/img-one.svg" },
    cardTag: "News",
    cardDate: "16 June 2021",
    cardTitle: "ASSETRUSH 2021 Get your ticket now!",
    cardText:
      "ASSSETRUSH unites the community to build platforms of the next generation and explore how a modular solution can ben a cornerstone to grow your business...",
    animationDelay: "600",
    cardPath: "/pulse"
  },
  {
    id: 7,
    cardImg: { default: "/img/pulse-page/explore-topic/img-one.svg" },
    cardTag: "News",
    cardDate: "16 June 2021",
    cardTitle: "ASSETRUSH 2021 Get your ticket now!",
    cardText:
      "ASSSETRUSH unites the community to build platforms of the next generation and explore how a modular solution can ben a cornerstone to grow your business...",
    animationDelay: "200",
    cardPath: "/pulse"
  },
  {
    id: 8,
    cardImg: { default: "/img/pulse-page/explore-topic/img-two.png" },
    cardTag: "Insights",
    cardDate: "5 May 2021",
    cardTitle:
      "How shipping containers, films and Blockchain startups  are finding their way into classic investment portfolios",
    cardText:
      "The Zurich securitization specialist GenTwo is disrupting the investment market...",
    animationDelay: "400",
    cardPath: "/pulse"
  },
  {
    id: 9,
    cardImg: { default: "/img/pulse-page/explore-topic/img-three.png" },
    cardTag: "Markets",
    cardDate: "3 June 2021",
    cardTitle: "Monthly Pulse — June ‘21",
    cardText:
      "Economic Outlook With price growth data in the US and Europe exceeding expectations, US President proposing more and more enormous spending plans...",
    animationDelay: "600",
    cardPath: "/pulse"
  },
  {
    id: 10,
    cardImg: { default: "/img/pulse-page/explore-topic/img-three.png" },
    cardTag: "Markets",
    cardDate: "3 June 2021",
    cardTitle: "Monthly Pulse — June ‘21",
    cardText:
      "Economic Outlook With price growth data in the US and Europe exceeding expectations, US President proposing more and more enormous spending plans...",
    animationDelay: "200",
    cardPath: "/pulse"
  },
  {
    id: 11,
    cardImg: { default: "/img/pulse-page/explore-topic/img-two.png" },
    cardTag: "Insights",
    cardDate: "5 May 2021",
    cardTitle:
      "How shipping containers, films and Blockchain startups  are finding their way into classic investment portfolios",
    cardText:
      "The Zurich securitization specialist GenTwo is disrupting the investment market...",
    animationDelay: "400",
    cardPath: "/pulse"
  },
  {
    id: 12,
    cardImg: { default: "/img/pulse-page/explore-topic/img-one.svg" },
    cardTag: "News",
    cardDate: "16 June 2021",
    cardTitle: "ASSETRUSH 2021 Get your ticket now!",
    cardText:
      "ASSSETRUSH unites the community to build platforms of the next generation and explore how a modular solution can ben a cornerstone to grow your business...",
    animationDelay: "600",
    cardPath: "/pulse"
  }
];

export const spotlightsData: IExploreCards[] = [
  {
    id: 1,
    isVertical: true,
    cardImg: { default: "/img/explore-section/explore-1.jpg" },
    cardLogo: "/img/explore-section/explore-card-y-logos/logo-one.svg",
    cardTitle:
      "How Tavis Digital made promising blockchain business models investable",
    cardDate: "7 February 2021",
    cardSubtitle:
      "Tavis Digital is an innovative Swiss asset management company that focuses entirely on the portfolio management of digital assets...",
    cardTags: [
      {
        id: 1,
        bg: "bg-teal",
        text: "Product Spotlight"
      }
    ],
    hasProductSpotlight: true,
    hasCaseStudy: false,
    cardClass: "card-one",
    animation: "fade-right"
  },
  {
    id: 2,
    isVertical: true,
    cardImg: { default: "/img/explore-section/explore-5.jpg" },
    cardLogo: "/img/explore-section/explore-card-y-logos/logo-three.svg",
    cardTitle: "How Barry Films has developed an investable film strategy",
    cardDate: "7 February 2021",
    cardSubtitle:
      "GenTwo’s actively managed certificate (AMC) helped us connect the film world to the finance world, giving investors access to an area that wasn't investible  before. It helped us to get the liquidity necessary... ",
    cardTags: [
      {
        id: 1,
        bg: "bg-teal",
        text: "Product Spotlight"
      },
      {
        id: 2,
        bg: "bg-light-teal-lighter",
        text: "AMC"
      }
    ],
    hasProductSpotlight: true,
    hasCaseStudy: false,
    cardClass: "card-five",
    animation: "fade-up"
  },
  {
    id: 3,
    isVertical: true,
    cardImg: { default: "/img/explore-section/explore-4.jpg" },
    cardLogo: "/img/explore-section/explore-card-y-logos/logo-two.svg",
    cardTitle:
      "How Stableton is building the next generation managed marketplace for alternative investments",
    cardDate: "7 February 2021",
    cardSubtitle:
      "Stableton is building the next generation managed marketplace for alternative... ",
    cardTags: [
      {
        id: 1,
        bg: "bg-teal",
        text: "Product Spotlight"
      },
      {
        id: 2,
        bg: "bg-medium-bronze",
        text: "Public Markets"
      },
      {
        id: 3,
        bg: "bg-medium-teal",
        text: "CLN"
      },
      {
        id: 4,
        bg: "bg-light-secondary-body",
        text: "Broker"
      }
    ],
    hasProductSpotlight: true,
    hasCaseStudy: false,
    cardClass: "card-four",
    animation: "fade-left"
  },
  {
    id: 4,
    isVertical: true,
    cardImg: { default: "/img/explore-section/explore-5.jpg" },
    cardLogo: "/img/explore-section/explore-card-y-logos/logo-three.svg",
    cardTitle: "How Barry Films has developed an investable film strategy",
    cardDate: "7 February 2021",
    cardSubtitle:
      "GenTwo’s actively managed certificate (AMC) helped us connect the film world to the finance world, giving investors access to an area that wasn't investible  before. It helped us to get the liquidity necessary... ",
    cardTags: [
      {
        id: 1,
        bg: "bg-teal",
        text: "Product Spotlight"
      },
      {
        id: 2,
        bg: "bg-light-teal-lighter",
        text: "AMC"
      }
    ],
    hasProductSpotlight: true,
    hasCaseStudy: false,
    cardClass: "card-five",
    animation: "fade-up"
  },
  {
    id: 5,
    isVertical: true,
    cardImg: { default: "/img/explore-section/explore-4.jpg" },
    cardLogo: "/img/explore-section/explore-card-y-logos/logo-two.svg",
    cardTitle:
      "How Stableton is building the next generation managed marketplace for alternative investments",
    cardDate: "7 February 2021",
    cardSubtitle:
      "Stableton is building the next generation managed marketplace for alternative... ",
    cardTags: [
      {
        id: 1,
        bg: "bg-teal",
        text: "Product Spotlight"
      },
      {
        id: 2,
        bg: "bg-medium-bronze",
        text: "Public Markets"
      },
      {
        id: 3,
        bg: "bg-medium-teal",
        text: "CLN"
      },
      {
        id: 4,
        bg: "bg-light-secondary-body",
        text: "Broker"
      }
    ],
    hasProductSpotlight: true,
    hasCaseStudy: false,
    cardClass: "card-four",
    animation: "fade-left"
  },
  {
    id: 6,
    isVertical: true,
    cardImg: { default: "/img/explore-section/explore-1.jpg" },
    cardLogo: "/img/explore-section/explore-card-y-logos/logo-one.svg",
    cardTitle:
      "How Tavis Digital made promising blockchain business models investable",
    cardDate: "7 February 2021",
    cardSubtitle:
      "Tavis Digital is an innovative Swiss asset management company that focuses entirely on the portfolio management of digital assets...",
    cardTags: [
      {
        id: 1,
        bg: "bg-teal",
        text: "Product Spotlight"
      }
    ],
    hasProductSpotlight: true,
    hasCaseStudy: false,
    cardClass: "card-one",
    animation: "fade-right"
  },
  {
    id: 7,
    isVertical: true,
    cardImg: { default: "/img/explore-section/explore-1.jpg" },
    cardLogo: "/img/explore-section/explore-card-y-logos/logo-one.svg",
    cardTitle:
      "How Tavis Digital made promising blockchain business models investable",
    cardDate: "7 February 2021",
    cardSubtitle:
      "Tavis Digital is an innovative Swiss asset management company that focuses entirely on the portfolio management of digital assets...",
    cardTags: [
      {
        id: 1,
        bg: "bg-teal",
        text: "Product Spotlight"
      }
    ],
    hasProductSpotlight: true,
    hasCaseStudy: false,
    cardClass: "card-one",
    animation: "fade-right"
  },
  {
    id: 8,
    isVertical: true,
    cardImg: { default: "/img/explore-section/explore-4.jpg" },
    cardLogo: "/img/explore-section/explore-card-y-logos/logo-two.svg",
    cardTitle:
      "How Stableton is building the next generation managed marketplace for alternative investments",
    cardDate: "7 February 2021",
    cardSubtitle:
      "Stableton is building the next generation managed marketplace for alternative... ",
    cardTags: [
      {
        id: 1,
        bg: "bg-teal",
        text: "Product Spotlight"
      },
      {
        id: 2,
        bg: "bg-medium-bronze",
        text: "Public Markets"
      },
      {
        id: 3,
        bg: "bg-medium-teal",
        text: "CLN"
      },
      {
        id: 4,
        bg: "bg-light-secondary-body",
        text: "Broker"
      }
    ],
    hasProductSpotlight: true,
    hasCaseStudy: false,
    cardClass: "card-four",
    animation: "fade-left"
  },
  {
    id: 9,
    isVertical: true,
    cardImg: { default: "/img/explore-section/explore-5.jpg" },
    cardLogo: "/img/explore-section/explore-card-y-logos/logo-three.svg",
    cardTitle: "How Barry Films has developed an investable film strategy",
    cardDate: "7 February 2021",
    cardSubtitle:
      "GenTwo’s actively managed certificate (AMC) helped us connect the film world to the finance world, giving investors access to an area that wasn't investible  before. It helped us to get the liquidity necessary... ",
    cardTags: [
      {
        id: 1,
        bg: "bg-teal",
        text: "Product Spotlight"
      },
      {
        id: 2,
        bg: "bg-light-teal-lighter",
        text: "AMC"
      }
    ],
    hasProductSpotlight: true,
    hasCaseStudy: false,
    cardClass: "card-five",
    animation: "fade-up"
  },
  {
    id: 10,
    isVertical: true,
    cardImg: { default: "/img/explore-section/explore-5.jpg" },
    cardLogo: "/img/explore-section/explore-card-y-logos/logo-three.svg",
    cardTitle: "How Barry Films has developed an investable film strategy",
    cardDate: "7 February 2021",
    cardSubtitle:
      "GenTwo’s actively managed certificate (AMC) helped us connect the film world to the finance world, giving investors access to an area that wasn't investible  before. It helped us to get the liquidity necessary... ",
    cardTags: [
      {
        id: 1,
        bg: "bg-teal",
        text: "Product Spotlight"
      },
      {
        id: 2,
        bg: "bg-light-teal-lighter",
        text: "AMC"
      }
    ],
    hasProductSpotlight: true,
    hasCaseStudy: false,
    cardClass: "card-five",
    animation: "fade-up"
  },
  {
    id: 11,
    isVertical: true,
    cardImg: { default: "/img/explore-section/explore-1.jpg" },
    cardLogo: "/img/explore-section/explore-card-y-logos/logo-one.svg",
    cardTitle:
      "How Tavis Digital made promising blockchain business models investable",
    cardDate: "7 February 2021",
    cardSubtitle:
      "Tavis Digital is an innovative Swiss asset management company that focuses entirely on the portfolio management of digital assets...",
    cardTags: [
      {
        id: 1,
        bg: "bg-teal",
        text: "Product Spotlight"
      }
    ],
    hasProductSpotlight: true,
    hasCaseStudy: false,
    cardClass: "card-one",
    animation: "fade-right"
  },
  {
    id: 12,
    isVertical: true,
    cardImg: { default: "/img/explore-section/explore-4.jpg" },
    cardLogo: "/img/explore-section/explore-card-y-logos/logo-two.svg",
    cardTitle:
      "How Stableton is building the next generation managed marketplace for alternative investments",
    cardDate: "7 February 2021",
    cardSubtitle:
      "Stableton is building the next generation managed marketplace for alternative... ",
    cardTags: [
      {
        id: 1,
        bg: "bg-teal",
        text: "Product Spotlight"
      },
      {
        id: 2,
        bg: "bg-medium-bronze",
        text: "Public Markets"
      },
      {
        id: 3,
        bg: "bg-medium-teal",
        text: "CLN"
      },
      {
        id: 4,
        bg: "bg-light-secondary-body",
        text: "Broker"
      }
    ],
    hasProductSpotlight: true,
    hasCaseStudy: false,
    cardClass: "card-four",
    animation: "fade-left"
  }
];

export const spotlightsMobData: IExploreCards[] = [
  {
    id: 1,
    isVertical: true,
    cardImg: { default: "/img/explore-section/explore-1.jpg" },
    cardLogo: "/img/explore-section/explore-card-y-logos/logo-one.svg",
    cardTitle:
      "How Tavis Digital made promising blockchain business models investable",
    cardDate: "7 February 2021",
    cardSubtitle:
      "Tavis Digital is an innovative Swiss asset management company that focuses entirely on the portfolio management of digital assets...",
    cardTags: [
      {
        id: 1,
        bg: "bg-teal",
        text: "Product Spotlight"
      }
    ],
    hasProductSpotlight: true,
    hasCaseStudy: false,
    cardClass: "card-one",
    animation: "fade-up"
  },
  {
    id: 2,
    isVertical: true,
    cardImg: { default: "/img/explore-section/explore-5.jpg" },
    cardLogo: "/img/explore-section/explore-card-y-logos/logo-three.svg",
    cardTitle: "How Barry Films has developed an investable film strategy",
    cardDate: "7 February 2021",
    cardSubtitle:
      "GenTwo’s actively managed certificate (AMC) helped us connect the film world to the finance world, giving investors access to an area that wasn't investible  before. It helped us to get the liquidity necessary... ",
    cardTags: [
      {
        id: 1,
        bg: "bg-teal",
        text: "Product Spotlight"
      },
      {
        id: 2,
        bg: "bg-light-teal-lighter",
        text: "AMC"
      }
    ],
    hasProductSpotlight: true,
    hasCaseStudy: false,
    cardClass: "card-five",
    animation: "fade-up"
  },
  {
    id: 3,
    isVertical: true,
    cardImg: { default: "/img/explore-section/explore-4.jpg" },
    cardLogo: "/img/explore-section/explore-card-y-logos/logo-two.svg",
    cardTitle:
      "How Stableton is building the next generation managed marketplace for alternative investments",
    cardDate: "7 February 2021",
    cardSubtitle:
      "Stableton is building the next generation managed marketplace for alternative... ",
    cardTags: [
      {
        id: 1,
        bg: "bg-teal",
        text: "Product Spotlight"
      },
      {
        id: 2,
        bg: "bg-medium-bronze",
        text: "Public Markets"
      },
      {
        id: 3,
        bg: "bg-medium-teal",
        text: "CLN"
      },
      {
        id: 4,
        bg: "bg-light-secondary-body",
        text: "Broker"
      }
    ],
    hasProductSpotlight: true,
    hasCaseStudy: false,
    cardClass: "card-four",
    animation: "fade-left"
  },
  {
    id: 4,
    isVertical: true,
    cardImg: { default: "/img/explore-section/explore-5.jpg" },
    cardLogo: "/img/explore-section/explore-card-y-logos/logo-three.svg",
    cardTitle: "How Barry Films has developed an investable film strategy",
    cardDate: "7 February 2021",
    cardSubtitle:
      "GenTwo’s actively managed certificate (AMC) helped us connect the film world to the finance world, giving investors access to an area that wasn't investible  before. It helped us to get the liquidity necessary... ",
    cardTags: [
      {
        id: 1,
        bg: "bg-teal",
        text: "Product Spotlight"
      },
      {
        id: 2,
        bg: "bg-light-teal-lighter",
        text: "AMC"
      }
    ],
    hasProductSpotlight: true,
    hasCaseStudy: false,
    cardClass: "card-five",
    animation: "fade-up"
  },
  {
    id: 5,
    isVertical: true,
    cardImg: { default: "/img/explore-section/explore-4.jpg" },
    cardLogo: "/img/explore-section/explore-card-y-logos/logo-two.svg",
    cardTitle:
      "How Stableton is building the next generation managed marketplace for alternative investments",
    cardDate: "7 February 2021",
    cardSubtitle:
      "Stableton is building the next generation managed marketplace for alternative... ",
    cardTags: [
      {
        id: 1,
        bg: "bg-teal",
        text: "Product Spotlight"
      },
      {
        id: 2,
        bg: "bg-medium-bronze",
        text: "Public Markets"
      },
      {
        id: 3,
        bg: "bg-medium-teal",
        text: "CLN"
      },
      {
        id: 4,
        bg: "bg-light-secondary-body",
        text: "Broker"
      }
    ],
    hasProductSpotlight: true,
    hasCaseStudy: false,
    cardClass: "card-four",
    animation: "fade-left"
  },
  {
    id: 6,
    isVertical: true,
    cardImg: { default: "/img/explore-section/explore-1.jpg" },
    cardLogo: "/img/explore-section/explore-card-y-logos/logo-one.svg",
    cardTitle:
      "How Tavis Digital made promising blockchain business models investable",
    cardDate: "7 February 2021",
    cardSubtitle:
      "Tavis Digital is an innovative Swiss asset management company that focuses entirely on the portfolio management of digital assets...",
    cardTags: [
      {
        id: 1,
        bg: "bg-teal",
        text: "Product Spotlight"
      }
    ],
    hasProductSpotlight: true,
    hasCaseStudy: false,
    cardClass: "card-one",
    animation: "fade-right"
  }
];

export const useCasesData: IExploreCards[] = [
  {
    id: 1,
    isVertical: false,
    cardImg: { default: "side-img-one" },
    cardTitle: "DeFi: Decentralized Finance",
    cardSubtitle:
      "A flexible and effective solution to implement DeFi protocols into digital asset portfolios...",
    cardTags: [
      {
        id: 1,
        bg: "bg-medium-bronze",
        text: "Use Case"
      },
      {
        id: 2,
        bg: "bg-light-teal",
        text: "Digital Markets"
      },
      {
        id: 3,
        bg: "bg-light-secondary-body",
        text: "Trade Finance"
      }
    ],
    hasProductSpotlight: false,
    hasCaseStudy: true,
    cardClass: "card-two",
    animation: "fade-left"
  },
  {
    id: 2,
    isVertical: false,
    cardImg: { default: "side-img-two" },
    cardTitle: "Implement your Portfolio Strategy",
    cardSubtitle:
      "Individual and bespoke issuance solutions with an unlimited number of AMCs...",
    cardTags: [
      {
        id: 1,
        bg: "bg-medium-bronze",
        text: "Use Case"
      },
      {
        id: 2,
        bg: "bg-light-teal",
        text: "Private Markets"
      },
      {
        id: 3,
        bg: "bg-light-teal-lighter",
        text: "AMC"
      },
      {
        id: 4,
        bg: "bg-light-secondary-body",
        text: "Venture Capital "
      }
    ],
    hasProductSpotlight: false,
    hasCaseStudy: true,
    cardClass: "card-three",
    animation: "fade-right"
  },
  {
    id: 3,
    isVertical: false,
    cardImg: { default: "side-img-three" },
    cardTitle: "Hotel Project Financing",
    cardSubtitle:
      "Unleash a network effect in a hotel project by securitizing a loan.",
    cardTags: [
      {
        id: 1,
        bg: "bg-medium-bronze",
        text: "Use Case"
      },
      {
        id: 2,
        bg: "bg-light-teal",
        text: "Public Markets"
      }
    ],
    hasProductSpotlight: false,
    hasCaseStudy: true,
    cardClass: "card-six",
    animation: "fade-left"
  },
  {
    id: 4,
    isVertical: false,
    cardImg: { default: "side-img-one" },
    cardTitle: "DeFi: Decentralized Finance",
    cardSubtitle:
      "A flexible and effective solution to implement DeFi protocols into digital asset portfolios...",
    cardTags: [
      {
        id: 1,
        bg: "bg-medium-bronze",
        text: "Use Case"
      },
      {
        id: 2,
        bg: "bg-light-teal",
        text: "Digital Markets"
      },
      {
        id: 3,
        bg: "bg-light-secondary-body",
        text: "Trade Finance"
      }
    ],
    hasProductSpotlight: false,
    hasCaseStudy: true,
    cardClass: "card-two",
    animation: "fade-left"
  },
  {
    id: 5,
    isVertical: false,
    cardImg: { default: "side-img-two" },
    cardTitle: "Implement your Portfolio Strategy",
    cardSubtitle:
      "Individual and bespoke issuance solutions with an unlimited number of AMCs...",
    cardTags: [
      {
        id: 1,
        bg: "bg-medium-bronze",
        text: "Use Case"
      },
      {
        id: 2,
        bg: "bg-light-teal",
        text: "Private Markets"
      },
      {
        id: 3,
        bg: "bg-light-teal-lighter",
        text: "AMC"
      },
      {
        id: 4,
        bg: "bg-light-secondary-body",
        text: "Venture Capital "
      }
    ],
    hasProductSpotlight: false,
    hasCaseStudy: true,
    cardClass: "card-three",
    animation: "fade-right"
  },
  {
    id: 6,
    isVertical: false,
    cardImg: { default: "side-img-three" },
    cardTitle: "Hotel Project Financing",
    cardSubtitle:
      "Unleash a network effect in a hotel project by securitizing a loan.",
    cardTags: [
      {
        id: 1,
        bg: "bg-medium-bronze",
        text: "Use Case"
      },
      {
        id: 2,
        bg: "bg-light-teal",
        text: "Public Markets"
      }
    ],
    hasProductSpotlight: false,
    hasCaseStudy: true,
    cardClass: "card-six",
    animation: "fade-left"
  },
  {
    id: 7,
    isVertical: false,
    cardImg: { default: "side-img-one" },
    cardTitle: "DeFi: Decentralized Finance",
    cardSubtitle:
      "A flexible and effective solution to implement DeFi protocols into digital asset portfolios...",
    cardTags: [
      {
        id: 1,
        bg: "bg-medium-bronze",
        text: "Use Case"
      },
      {
        id: 2,
        bg: "bg-light-teal",
        text: "Digital Markets"
      },
      {
        id: 3,
        bg: "bg-light-secondary-body",
        text: "Trade Finance"
      }
    ],
    hasProductSpotlight: false,
    hasCaseStudy: true,
    cardClass: "card-two",
    animation: "fade-left"
  },
  {
    id: 8,
    isVertical: false,
    cardImg: { default: "side-img-two" },
    cardTitle: "Implement your Portfolio Strategy",
    cardSubtitle:
      "Individual and bespoke issuance solutions with an unlimited number of AMCs...",
    cardTags: [
      {
        id: 1,
        bg: "bg-medium-bronze",
        text: "Use Case"
      },
      {
        id: 2,
        bg: "bg-light-teal",
        text: "Private Markets"
      },
      {
        id: 3,
        bg: "bg-light-teal-lighter",
        text: "AMC"
      },
      {
        id: 4,
        bg: "bg-light-secondary-body",
        text: "Venture Capital "
      }
    ],
    hasProductSpotlight: false,
    hasCaseStudy: true,
    cardClass: "card-three",
    animation: "fade-right"
  },
  {
    id: 9,
    isVertical: false,
    cardImg: { default: "side-img-three" },
    cardTitle: "Hotel Project Financing",
    cardSubtitle:
      "Unleash a network effect in a hotel project by securitizing a loan.",
    cardTags: [
      {
        id: 1,
        bg: "bg-medium-bronze",
        text: "Use Case"
      },
      {
        id: 2,
        bg: "bg-light-teal",
        text: "Public Markets"
      }
    ],
    hasProductSpotlight: false,
    hasCaseStudy: true,
    cardClass: "card-six",
    animation: "fade-left"
  }
];

export const ecoPartners: IEcoPartnerCard[] = [
  {
    id: 1,
    cardImg: "/img/ecosystem-page/partners/partner01.png",
    cardButtonText: "Website",
    cardTitle: "DMA Investment Management",
    cardText:
      "DMA Investment Management Ltd. is an independent asset management company with its legal domicile in Zurich, Switzerland. Whilst many asset managers utilize individual...",
    cardLink: "https://www.dmaim.com/"
  },
  {
    id: 2,
    cardImg: "/img/ecosystem-page/partners/partner02.png",
    cardButtonText: "Website",
    cardTitle: "Turicum Asset Management",
    cardText:
      "Turicum Asset Management is a financial services company incorporated in Switzerland and serving clients globally. Accredited by the Swiss Association of Asset Manage...",
    cardLink: "http://www.turicum-am.com/"
  },
  {
    id: 3,
    cardImg: "/img/ecosystem-page/partners/partner03.png",
    cardButtonText: "Website",
    cardTitle: "Stableton",
    cardText:
      "Stableton is a platform for alternative investments, striving to become the global leading market network for qualified and institutional investors seeking exposure to liquid...",
    cardLink: "https://www.stableton.com/"
  },
  {
    id: 4,
    cardImg: "/img/ecosystem-page/partners/partner04.png",
    cardButtonText: "Website",
    cardTitle: "Clarus Capital",
    cardText:
      "Clarus Capital Group AG is one of the fastest-growing Asset Managers in Zurich's financial market both in terms of headcount as well as assets under management. The nam...",
    cardLink: "https://www.claruscapital.ch/"
  },
  {
    id: 5,
    cardImg: "/img/ecosystem-page/partners/partner05.png",
    cardButtonText: "Website",
    cardTitle: "Turicum Investment Management",
    cardText:
      "Turicum Investment Management AG (TIM) is a Vietnam-dedicated Investment and Research company with offices in Switzerland and HOChi Minh City and provides...",
    cardLink: "https://timvest.ch/"
  },
  {
    id: 6,
    cardImg: "/img/ecosystem-page/partners/partner06.png",
    cardButtonText: "Website",
    cardTitle: "Crowd4Cash",
    cardText:
      "Crowd4Cash is an innovative Crowdlending platform in Switzerland. Crowd4Cash is changing the market with high efficient processes, better interest rates and more...",
    cardLink: "https://crowd4cash.ch/"
  },
  {
    id: 7,
    cardImg: "/img/ecosystem-page/partners/partner07.png",
    cardButtonText: "Website",
    cardTitle: "Abeloo",
    cardText:
      "Abeloo Ltd is an independent company active in the field of asset management, life insurance and pension consulting with a strong advisor force, which offers a...",
    cardLink: "https://abeloo.swiss/"
  },
  {
    id: 8,
    cardImg: "/img/ecosystem-page/partners/partner08.png",
    cardButtonText: "Website",
    cardTitle: "Abalone Graff",
    cardText:
      "Abelone Graff AG is a Swiss Company, associated and supervised by PolyReg (a FINMA recognized SRO) delivering a full comprehensive set of wealth management...",
    cardLink: "https://abalonegroup.com/abalone-graff/"
  },
  {
    id: 9,
    cardImg: "/img/ecosystem-page/partners/partner09.png",
    cardButtonText: "Website",
    cardTitle: "Finaport",
    cardText:
      "Finaport is an independent and regulated Swiss Wealth Management Firm with offices in Switzerland, Singapore, and Liechtenstein. Finaport companies are licensed to...",
    cardLink: "https://www.finaport.com/"
  },
  {
    id: 10,
    cardImg: "/img/ecosystem-page/partners/partner10.png",
    cardButtonText: "Website",
    cardTitle: "Ermes Wealth Management",
    cardText:
      "Ermes Wealth Management AG is a Swiss company active in the finance sector with a focus on the structured products segment. Based on proprietary, high-powered...",
    cardLink: "https://www.ermeswm.com/"
  },
  {
    id: 11,
    cardImg: "/img/ecosystem-page/partners/partner11.png",
    cardButtonText: "Website",
    cardTitle: "SI Advisors",
    cardText:
      "SI advisors started its activities aiming to transform the real estate market in Sao Paulo, Brazil, helping in the exhausting experience of buying its own propery.",
    cardLink: "https://siadvisors.com.br/"
  },
  {
    id: 12,
    cardImg: "/img/ecosystem-page/partners/partner12.png",
    cardButtonText: "Website",
    cardTitle: "Aquila",
    cardText:
      "The Aquila platform is an alliance of independent Swiss asset management companies and family offices. Aquila platform partners are entrepreneurs in their own...",
    cardLink: "https://www.aquila.ch/"
  },
  {
    id: 13,
    cardImg: "/img/ecosystem-page/partners/partner13.png",
    cardButtonText: "Website",
    cardTitle: "Cat Financial Products",
    cardText:
      "CAT Financial Products is one of the leading independent Swiss providers of investment solutions and technologies in the market for structured products.",
    cardLink: "https://www.catfp.ch/"
  },
  {
    id: 14,
    cardImg: "/img/ecosystem-page/partners/partner14.png",
    cardButtonText: "Website",
    cardTitle: "Barry Films",
    cardText:
      "Barry Films is a production company based in Los Angeles, Berlin, and Zurich that specializes in producing film and TV content for the international marktes.",
    cardLink: "https://www.barryfilms.com/"
  },
  {
    id: 15,
    cardImg: "/img/ecosystem-page/partners/partner15.png",
    cardButtonText: "Website",
    cardTitle: "Solvium Capital",
    cardText:
      "The German company Solvium Capital, based in Hamburg, has been offering investments in containers and swap bodies to German investors since 2011 and is currently opening up t...",
    cardLink: "https://www.solvium-capital.de/"
  },
  {
    id: 16,
    cardImg: "/img/ecosystem-page/partners/partner16.png",
    cardButtonText: "Website",
    cardTitle: "Amgest SA",
    cardText:
      "Amgest is an independent asset management firm based in Switzerland, providing longterm portfolio management solutions and first-class advisory services.",
    cardLink: "https://amgest.ch/"
  },
  {
    id: 17,
    cardImg: "/img/ecosystem-page/partners/partner17.png",
    cardButtonText: "Website",
    cardTitle: "Alpina Capital",
    cardText:
      "Alpina Capital is a Swiss regulated Investment Manager with over 19 years of Investment experience and a proven track record in managing a wide range of...",
    cardLink: "https://www.alpina.capital/"
  },
  {
    id: 18,
    cardImg: "/img/ecosystem-page/partners/partner18.png",
    cardButtonText: "Website",
    cardTitle: "Fortune Financial Strategies",
    cardText:
      "Fortune is a company of financial services managing billions in client assets, focused on providing best-of-class wealth management, advisory solutions, and tailored service...",
    cardLink: "https://www.ffstrategies.net/"
  },
  {
    id: 19,
    cardImg: "/img/ecosystem-page/partners/partner19.png",
    cardButtonText: "Website",
    cardTitle: "Blue Capital",
    cardText:
      "Blue Capital SA is a Swiss-based company endowed of a sound technological amd financial know-how intended for the development and delivery of tailor-made...",
    cardLink: "https://bluecapitalsa.com/"
  },
  {
    id: 20,
    cardImg: "/img/ecosystem-page/partners/partner20.png",
    cardButtonText: "Website",
    cardTitle: "Lemvi",
    cardText:
      "The Lemvi strategies are socially responsable discretionary and systematic focusing on Crypto and Macro trading, Commodities, Equities, and derivatives. It involves...",
    cardLink: "https://lemvi.ch/"
  },
  {
    id: 21,
    cardImg: "/img/ecosystem-page/partners/partner21.png",
    cardButtonText: "Website",
    cardTitle: "Bonart Financial Performance",
    cardText:
      "BONART is an independent Swiss advisory and execution firm. They join forces with investors and entrepreneurs to navigate through the capital markets. They anticipate that...",
    cardLink: "https://www.bonart.financial/"
  },
  {
    id: 22,
    cardImg: "/img/ecosystem-page/partners/partner22.png",
    cardButtonText: "Website",
    cardTitle: "MRB Vermogensverwaltungs",
    cardText:
      "MRB was founded in Zurich (1979). Supervised by the FINMA as a manager of collective assets (funds) since the year 2009 MRB guarantees full compliance with the...",
    cardLink: "https://www.mrbpartner.ch/"
  },
  {
    id: 23,
    cardImg: "/img/ecosystem-page/partners/partner23.png",
    cardButtonText: "Website",
    cardTitle: "Eagle Capital International",
    cardText:
      "Eagle Capital Management, LLC is an asset management firm founded by Ravenel and Beth Curry. The firm's goal is to create an environment in which originalm thoughtful research...",
    cardLink: "https://www.eaglecap.com/"
  },
  {
    id: 24,
    cardImg: "/img/ecosystem-page/partners/partner24.png",
    cardButtonText: "Website",
    cardTitle: "PWA Private Wealth Advisors",
    cardText:
      "Private Wealth Advisor is a multi-family office and asset management firm based in Zug.",
    cardLink: "https://pwa-familyoffice.ch/"
  },
  {
    id: 25,
    cardImg: "/img/ecosystem-page/partners/partner25.png",
    cardButtonText: "Website",
    cardTitle: "Tavis Digital",
    cardText:
      "Tavis Digital is an asset manager focusing on investments in the tokenized space. They apply an institutional-grade investment process, including on-site due...",
    cardLink: "https://www.tavis-digital.com/"
  },
  {
    id: 26,
    cardImg: "/img/ecosystem-page/partners/partner26.png",
    cardButtonText: "Website",
    cardTitle: "FiCAS",
    cardText:
      "FiCAS is an investment company that offers investors the possibility to diversify their portfolios in the new crypto asset class. The investment style is discretionary. There is...",
    cardLink: "https://ficas.com/"
  },
  {
    id: 27,
    cardImg: "/img/ecosystem-page/partners/partner27.png",
    cardButtonText: "Website",
    cardTitle: "Dey Capital",
    cardText:
      "Dey Capital is an independent financial advisory firm that combines a deep understanding of investment banking, asset management and a hand's-on-knowledge of...",
    cardLink: "http://www.deycapital.com/"
  },
  {
    id: 28,
    cardImg: "/img/ecosystem-page/partners/partner28.png",
    cardButtonText: "Website",
    cardTitle: "Digital Value",
    cardText:
      "Digital Value is an SRO affiliated financial intermediary and digital asset investment consultant. A qualified, skilled and experienced team of advisors specialized in tailore...",
    cardLink: "https://digital-value.ch/"
  },
  {
    id: 29,
    cardImg: "/img/ecosystem-page/partners/partner29.png",
    cardButtonText: "Website",
    cardTitle: "SEBa Bank",
    cardText:
      "SEBA is a licensed and supervised Swiss bank providing a seamless, secure, and easy-to-use bridge between digital and traditional assets. It is now possible for...",
    cardLink: "https://www.seba.swiss/"
  },
  {
    id: 30,
    cardImg: "/img/ecosystem-page/partners/partner30.png",
    cardButtonText: "Website",
    cardTitle: "CVVC",
    cardText:
      "CV VC is an early-stage venture capital investor with a focus on startups that build on blockchain technology. In addition to the venture capital investments, CV VC operates...",
    cardLink: "https://cvvc.com/"
  },
  {
    id: 31,
    cardImg: "/img/ecosystem-page/partners/partner31.png",
    cardButtonText: "Website",
    cardTitle: "Chatila Rais Asset Management",
    cardText:
      "Chatila Rais Assets Management SA, also known as 'CRAM', is Swiss-based wealth management company. The founders of CRAM were convinced by th...",
    cardLink: "https://www.chatilarais.com/cram"
  },
  {
    id: 32,
    cardImg: "/img/ecosystem-page/partners/partner32.png",
    cardButtonText: "Website",
    cardTitle: "ISP Group",
    cardText:
      "ISP is a FINMA regulated, account keeping, Swiss Securities Dealer founded in 1993. They offer Paying Agent, Custody, Placement Agent, Wealth & Asset Management...",
    cardLink: "https://ispgroup.com/en/services/paying-agent/"
  },
  {
    id: 33,
    cardImg: "/img/ecosystem-page/partners/partner33.png",
    cardButtonText: "Website",
    cardTitle: "Crypto Broker",
    cardText:
      "Crypto Broker AG is a Swiss financial intermediary that enables participation for banks and institutional clients in the emerging digital asset class. A world leading secure and...",
    cardLink: "https://www.cryptofinance.ch/brokerage/"
  },
  {
    id: 34,
    cardImg: "/img/ecosystem-page/partners/partner34.png",
    cardButtonText: "Website",
    cardTitle: "CV Labs",
    cardText:
      "CV Labs offers startups and entrepreneurs two primary services, the CV Labs Incubator and CV Labs Coworking space. The CV Labs Incubator is an intensive 12-week program...",
    cardLink: "https://cvvc.com/"
  },
  {
    id: 35,
    cardImg: "/img/ecosystem-page/partners/partner35.png",
    cardButtonText: "Website",
    cardTitle: "Crypto Valley Journal",
    cardText:
      "Crypto Valley Journal provides a more specific high-quality resource around the distributed ledger technology. The focus is on education around the topic blockchain...",
    cardLink: "https://cvj.ch/"
  },
  {
    id: 36,
    cardImg: "/img/ecosystem-page/partners/partner36.png",
    cardButtonText: "Website",
    cardTitle: "Interactive Brokers",
    cardText:
      "Interactive Brokers Group affiliates provide automated trade execution and custody of securities, commodities, and foreign exchange around the clock on over 120 markets in...",
    cardLink: "https://www.interactivebrokers.com/"
  }
];

export const teamMembersData: ITeamCard[] = [
  {
    id: 1,
    cardImg: "/img/about-page/team/member01.jpeg",
    cardTitle: "Uroš Škorc",
    cardSubtitle: "Chief Technical Officer",
    cardLink: "https://www.linkedin.com/in/urosskorc/"
  },
  {
    id: 2,
    cardImg: "/img/about-page/team/member02.jpeg",
    cardTitle: "Georgette Vun",
    cardSubtitle: "Head of Legal",
    cardLink: "https://www.linkedin.com/in/georgettevun/"
  },
  {
    id: 3,
    cardImg: "/img/about-page/team/member03.jpeg",
    cardTitle: "Kurt Krautheim",
    cardSubtitle: "Senior Legal Counsel",
    cardLink: "https://www.linkedin.com/in/kurt-krautheim"
  },
  {
    id: 4,
    cardImg: "/img/about-page/team/member04.jpeg",
    cardTitle: "Phillip Sprenger, CIIA",
    cardSubtitle: "Key Account Manager",
    cardLink: "https://www.linkedin.com/in/philipp-sprenger/"
  },
  {
    id: 5,
    cardImg: "/img/about-page/team/member05.jpeg",
    cardTitle: "Bahareh Manzoni",
    cardSubtitle: "Head Key Account Management",
    cardLink: "https://www.linkedin.com/in/bahareh-manzoni-731b3026/"
  },
  {
    id: 6,
    cardImg: "/img/about-page/team/member06.jpeg",
    cardTitle: "Sandra Chattopadhyay",
    cardSubtitle: "Chief Marketing & Communications Officer",
    cardLink: "https://www.linkedin.com/in/sandra-chattopadhyay-27133b45/"
  },
  {
    id: 7,
    cardImg: "/img/about-page/team/member07.jpeg",
    cardTitle: "Ramiza Naegeli",
    cardSubtitle: "Chief Human Resources Officer",
    cardLink: "https://www.linkedin.com/in/ramiza-naegeli-1038146a/"
  },
  {
    id: 8,
    cardImg: "/img/about-page/team/member08.jpeg",
    cardTitle: "Nadia Hochtrasser",
    cardSubtitle: "Event Manager",
    cardLink: "https://ch.linkedin.com/in/nadia-hochstrasser-b11461137"
  },
  {
    id: 9,
    cardImg: "/img/about-page/team/member09.jpeg",
    cardTitle: "Gamze Palaz",
    cardSubtitle: "Key Account Manager",
    cardLink: "https://www.linkedin.com/in/gamze-palaz/"
  },
  {
    id: 10,
    cardImg: "/img/about-page/team/member10.jpeg",
    cardTitle: "Joyce Albertin",
    cardSubtitle: "Business Process Manager",
    cardLink: "https://www.linkedin.com/in/joycealbertin/"
  },
  {
    id: 11,
    cardImg: "/img/about-page/team/member11.jpeg",
    cardTitle: "Phillippe A. Naegeli",
    cardSubtitle: "Co-Founder & Chief Vision Officer",
    cardLink: "https://www.linkedin.com/in/gamze-palaz/"
  },
  {
    id: 12,
    cardImg: "/img/about-page/team/member12.jpeg",
    cardTitle: "Patrick Loepfe",
    cardSubtitle: "Founder & Chairman",
    cardLink: "https://ch.linkedin.com/in/patrickloepfe"
  },
  {
    id: 13,
    cardImg: "/img/about-page/team/member13.jpeg",
    cardTitle: "Jorg Bode",
    cardSubtitle: "Chief Executive Officer",
    cardLink: "https://www.linkedin.com/in/joerg-bode-877b3814/"
  },
  {
    id: 14,
    cardImg: "/img/about-page/team/member14.jpeg",
    cardTitle: "Pierre-Noel Formige",
    cardSubtitle: "Advisory Board",
    cardLink:
      "https://www.linkedin.com/in/pierre-no%C3%ABl-formig%C3%A9-5a62296/"
  },
  {
    id: 15,
    cardImg: "/img/about-page/team/member15.jpeg",
    cardTitle: "Toni Barros",
    cardSubtitle: "Key Account Manager",
    cardLink: "https://www.linkedin.com/in/toni-barros-87139412/"
  },
  {
    id: 16,
    cardImg: "/img/about-page/team/member16.jpeg",
    cardTitle: "Mario Casty",
    cardSubtitle: "Operations Manager",
    cardLink: "https://www.linkedin.com/in/castyma/"
  },
  {
    id: 17,
    cardImg: "/img/about-page/team/member17.jpeg",
    cardTitle: "Lydia Nadal Masson",
    cardSubtitle: "Head of Products",
    cardLink: "https://www.linkedin.com/in/lydia-nadal-48a528163/"
  },
  {
    id: 18,
    cardImg: "/img/about-page/team/member18.jpeg",
    cardTitle: "Benjamin Spring",
    cardSubtitle: "Marketing Manager",
    cardLink: "https://www.linkedin.com/in/springbenjamin/"
  },
  {
    id: 19,
    cardImg: "/img/about-page/team/member19.jpeg",
    cardTitle: "Nikolaus V.Borck",
    cardSubtitle: "Operations Manager",
    cardLink: "https://www.linkedin.com/in/nikolaus-v-borck/"
  },
  {
    id: 20,
    cardImg: "/img/about-page/team/member20.jpeg",
    cardTitle: "Eric Kruger",
    cardSubtitle: "Head Valuations",
    cardLink: "https://www.linkedin.com/in/eric-kr%C3%BCger-09405685/"
  },
  {
    id: 21,
    cardImg: "/img/about-page/team/member21.jpeg",
    cardTitle: "Jan Sramek",
    cardSubtitle: "Software Developer",
    cardLink: "https://www.linkedin.com/in/jan-%C5%A1r%C3%A1mek-717386ab/"
  },
  {
    id: 22,
    cardImg: "/img/about-page/team/member22.jpeg",
    cardTitle: "Marc P. Bernegger",
    cardSubtitle: "Advisory Board",
    cardLink: "https://www.linkedin.com/in/marcpbernegger/"
  },
  {
    id: 23,
    cardImg: "/img/about-page/team/member23.jpeg",
    cardTitle: "Roger Darin",
    cardSubtitle: "Managing Advisor, GenTwo Digital",
    cardLink: "https://www.linkedin.com/in/rogerdarin"
  },
  {
    id: 24,
    cardImg: "/img/about-page/team/member24.jpeg",
    cardTitle: "Lucas A. Ereth",
    cardSubtitle: "Managing Partner, GenTwo Digital",
    cardLink: "https://ch.linkedin.com/in/lucasereth"
  },
  {
    id: 25,
    cardImg: "/img/about-page/team/member25.jpeg",
    cardTitle: "Stephen Brown",
    cardSubtitle: "Senior Software Developer",
    cardLink: "https://www.linkedin.com/in/stephen-d-brown/"
  },
  {
    id: 26,
    cardImg: "/img/about-page/team/member26.jpeg",
    cardTitle: "Anastasiia Bondareva",
    cardSubtitle: "Structure",
    cardLink: "https://www.linkedin.com/in/anastasia-bondareva-2a971658/"
  },
  {
    id: 27,
    cardImg: "/img/about-page/team/member27.jpeg",
    cardTitle: "Barbara Locsi",
    cardSubtitle: "Software Developer",
    cardLink: "https://www.linkedin.com/in/barbara-locsi/"
  },
  {
    id: 28,
    cardImg: "/img/about-page/team/member28.jpeg",
    cardTitle: "Beat Hodel",
    cardSubtitle: "Advisory Board",
    cardLink: "https://www.linkedin.com/in/beat-hodel-a10a24aa/"
  },
  {
    id: 29,
    cardImg: "/img/about-page/team/member29.jpeg",
    cardTitle: "Alberto Neto",
    cardSubtitle: "Valuations Manager",
    cardLink: "https://www.linkedin.com/in/alberto-neto-491aa150"
  },
  {
    id: 30,
    cardImg: "/img/about-page/team/member30.jpeg",
    cardTitle: "Spiros Margaris",
    cardSubtitle: "Advisory Board",
    cardLink: "https://www.linkedin.com/in/spirosmargaris/"
  },
  {
    id: 31,
    cardImg: "/img/about-page/team/member31.jpeg",
    cardTitle: "Laureen Ligozat",
    cardSubtitle: "Key Account Manager",
    cardLink: "https://www.linkedin.com/in/laureen-ligozat-b127a667/"
  },
  {
    id: 32,
    cardImg: "/img/about-page/team/member32.jpeg",
    cardTitle: "Michael Byrne",
    cardSubtitle: "Senior Legal Counsel",
    cardLink: "https://www.linkedin.com/in/michael-byrne-420604104/"
  },
  {
    id: 33,
    cardImg: "/img/about-page/team/member33.jpeg",
    cardTitle: "Nikola Gander",
    cardSubtitle: "Key Account Manager, GenTwo Digital",
    cardLink: "https://www.linkedin.com/in/nikola-gander/"
  }
];

export const careersData: ICareerCard[] = [
  {
    id: 1,
    cardImg: "/img/about-page/careers/career-1.png",
    cardTitle: "Paralegal/Legal Assistant",
    cardLocation: "Zurich",
    cardRatio: " · 80-100%"
  },
];
