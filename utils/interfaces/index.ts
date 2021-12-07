export interface INavLinks {
  id: number | string;
  path: string;
  title: string;
}

export interface ICardTags {
  id: string | number;
  bg: string;
  text: string;
}

export interface IExploreCards {
  id: number;
  isVertical: boolean;
  cardImg: IImage;
  cardLogo?: string;
  cardTitle: string;
  cardDate?: string;
  cardSlug?: string;
  cardSubtitle: string;
  cardTags: ICardTags[];
  hasProductSpotlight: boolean;
  hasCaseStudy: boolean;
  cardClass: string;
  animation: string;
}

export interface IClientReview {
  id: string | number;
  clientMsg: string;
  clientImg: string;
  clientName: string;
  clientRole: string;
}

export interface INewsCard {
  id: string | number;
  cardImg: string;
  cardTag: string;
  cardDate: string;
  cardTitle: string;
  cardSubtitle: string;
}

export interface IOurVision {
  id: string | number;
  isTextLarge: boolean;
  titleSmall: string;
  titleLarge: string;
  description: string;
}

export interface ITeamDiversityCard {
  id: string | number;
  icon: string;
  title: string;
  subtitle: string;
  className?: string;
  animationDelay?: string;
}

export interface IInvestmentCard {
  id: string | number;
  cardTitle: string;
  cardTitleClass: string;
  cardClass: string;
  cardSubtitle: string;
  cardBtnText: string;
  cardBtnClass: string;
  animationDelay?: string;
}

export interface IInvestmentIdeaCard {
  id: string | number;
  cardTitle: string;
  cardHeading: string;
  cardSubtitle?: string;
  cardBg: string;
  animationDelay?: string;
}

export interface IOfferCard {
  id: string | number;
  cardIcon: string;
  cardTitle: string;
  cardSubtitle: string;
  animationDelay: string;
}

export interface IImage {
  default: string;
  small?: string;
  medium?: string;
  large?: string;
}

export interface ICategory {
  id: string | number;
  name: string;
  slug: string;
  type: string;
}

export interface IFeedCard {
  id: string | number;
  cardImg: IImage;
  cardTag?: string;
  cardCategories?: ICategory[];
  cardDate: string;
  cardTitle: string;
  cardText: string;
  animationDelay?: string;
  cardPath: string;
}

export interface IVideoCard {
  id: string | number;
  cardThumbnail: string;
  cardTitle: string;
  cardDate: string;
}

export interface IEcoPartnerCard {
  id: string | number;
  cardImg: string;
  cardButtonText: string;
  cardTitle: string;
  cardText: string;
  cardLink?: string;
}

export interface ITeamCard {
  id: string | number;
  cardImg: string;
  cardTitle: string;
  cardSubtitle: string;
  cardLink: string;
}

export interface ICareerCard {
  id: string | number;
  cardImg: string;
  cardTitle: string;
  cardLocation: string;
  cardRatio: string;
}

export interface IGenTwoStrategies {
  id: string | number;
  text: string;
  img: string;
}
