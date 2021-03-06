import { AboutUs } from 'components/AboutUs';
import { Banner } from 'components/Banner';
import { FollowUs } from 'components/FollowUs';
import { MainVideo } from 'components/MainVideo';
import { RoadMap } from 'components/RoadMap';
import { NftCollections } from 'components/NftCollections';
import { Crowdsale } from 'components/Crowdsale';
import { Team } from 'components/Team';
import { FC } from 'react';

import s from './Home.module.scss';

const Home: FC = () => {
  return (
    <div className={s.homeWrapper}>
      <Banner />
      <Crowdsale />
      <AboutUs />
      <MainVideo />
      <NftCollections />
      <RoadMap />
      <Team />
      <FollowUs />
    </div>
  );
};
export default Home;
