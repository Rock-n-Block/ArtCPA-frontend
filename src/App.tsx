/* eslint-disable react/jsx-indent */
/* eslint-disable @typescript-eslint/indent */
import { FC } from 'react';
import '@elrondnetwork/dapp-core/dist/index.css';

import { Layout, RouteManager as Router } from 'containers';
import { ToastContainer } from 'react-toastify';

import { DappProvider } from '@elrondnetwork/dapp-core';

import 'react-toastify/dist/ReactToastify.css';
import 'assets/styles/index.scss';

const App: FC = () => {
  return (
    <DappProvider
      environment="devnet"
    >
      <Layout>
        <ToastContainer autoClose={4000} hideProgressBar position="top-right" closeButton={false} />
        <Router />
      </Layout>
    </DappProvider>
  );
};
export default App;
