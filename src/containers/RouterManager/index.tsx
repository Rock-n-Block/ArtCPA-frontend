import { routes } from 'appConstants/routes';
import { Home } from 'pages';
import { ComingSoon } from 'pages/ComingSoon';
import { NotFound } from 'pages/NotFound';
import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

export const RouteManager: FC = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path={routes.root} element={<Home />} />
      <Route path={routes.marketplace.root} element={<ComingSoon title={routes.marketplace.title} />} />
      <Route path={routes.dex.root} element={<ComingSoon title={routes.dex.title} />} />
      <Route path={routes.staking.root} element={<ComingSoon title={routes.staking.title} />} />
      <Route path={routes.crowdsale.root} element={<ComingSoon title={routes.crowdsale.title} />} />
    </Routes>
  );
};
