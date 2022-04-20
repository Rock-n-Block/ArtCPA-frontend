/* eslint-disable react/jsx-indent */
/* eslint-disable @typescript-eslint/indent */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC } from 'react';

import { Layout, RouteManager as Router } from 'containers';
import { ToastContainer } from 'react-toastify';

import { DappProvider, DappUI } from '@elrondnetwork/dapp-core';

import 'react-toastify/dist/ReactToastify.css';
import 'assets/styles/index.scss';
import { WalletConnectContext } from 'services';

const {
  TransactionsToastList,
  SignTransactionsModals,
  NotificationModal,
  DappCorePages: { UnlockPage },
} = DappUI;

const App: FC = () => {
  return (
    // <DappProvider
    //   environment="devnet"
    // >
      <WalletConnectContext>
        <ToastContainer autoClose={4000} hideProgressBar position="top-right" closeButton={false} />
        <Layout>
          {/* <TransactionsToastList />
          <NotificationModal />
          <SignTransactionsModals />
          <UnlockPage /> */}
          <Router />
        </Layout>
      </WalletConnectContext>
    // </DappProvider>
  );
};
export default App;
