import { FC } from 'react';
import '@elrondnetwork/dapp-core/dist/index.css';

import { InteractionProvider, Layout, RouteManager as Router } from 'containers';
import { ToastContainer } from 'react-toastify';

import { DappProvider } from '@elrondnetwork/dapp-core';

import 'react-toastify/dist/ReactToastify.css';
import 'assets/styles/index.scss';
import { isDev } from 'config';

const App: FC = () => {
  return (
    <DappProvider
      environment={isDev ? 'testnet' : 'mainnet'}
    >
      <InteractionProvider>
        <Layout>
          <ToastContainer autoClose={4000} hideProgressBar position="top-right" closeButton={false} />
          <Router />
        </Layout>
      </InteractionProvider>
    </DappProvider>
  );
};
export default App;
