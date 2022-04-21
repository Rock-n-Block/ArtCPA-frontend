export enum HomePageAnchors {
  ROAD_MAP = 'roadMapBlockAnchor',
  WHITE_PAPER = 'whitepaperBlockAnchor',
  TEAM = 'teamBlockAnchor',
  BUY = 'buyBlockAnchor',
}

export const homePageNavigation = [
  {
    label: 'Road map',
    anchorId: HomePageAnchors.ROAD_MAP,
  },
  {
    label: 'Whitepaper',
    isOuterLink: true,
    href: 'https://google.com',
  },
  {
    label: 'Team',
    anchorId: HomePageAnchors.TEAM,
  },
];
