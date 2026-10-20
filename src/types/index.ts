export interface SlideInfo {
  id: string;
  number: number;
  numberFormatted: string;
  kicker: string;
  title: string;
  shortTitle: string;
}

export interface ThesisPillar {
  number: string;
  title: string;
  description: string;
}

export interface SiblingHub {
  name: string;
  url: string;
  title: string;
  description: string;
  icon: string;
}

export interface CanonWork {
  type: string;
  title: string;
  description: string;
  tag?: string;
}

export interface InvestorInquiryPayload {
  name: string;
  email: string;
  scope: string;
  notes?: string;
}

export interface PublishedGame {
  id: string;
  title: string;
  genre: string;
  shortDescription: string;
  fullDescription: string;
  primaryUrl: string;
  primaryLabel: string;
  secondaryUrl?: string;
  secondaryLabel?: string;
  statusTag: string;
  mechanicsKicker: string;
}

