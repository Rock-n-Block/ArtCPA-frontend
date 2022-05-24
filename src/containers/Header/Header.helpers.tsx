// @ts-ignore
import whitepaper from '../../assets/ArtCPA_Whitepaper.pdf';

export enum HomePageAnchors {
  ROAD_MAP = '/#roadMapBlockAnchor',
  WHITE_PAPER = '/#whitepaperBlockAnchor',
  TEAM = '/#teamBlockAnchor',
  BUY = '/#buyBlockAnchor',
}

export type HomePageNavElement = {
  label: string;
  anchorId?: HomePageAnchors;
  isOuterLink?: boolean;
  link?: string;
};

export const homePageNavigation: HomePageNavElement[] = [
  {
    label: 'Road map',
    anchorId: HomePageAnchors.ROAD_MAP,
  },
  {
    label: 'Whitepaper',
    isOuterLink: true,
    link: whitepaper,
  },
  {
    label: 'Team',
    anchorId: HomePageAnchors.TEAM,
  },
];
