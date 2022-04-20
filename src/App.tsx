/* eslint-disable react/jsx-indent */
/* eslint-disable @typescript-eslint/indent */
import { FC } from 'react';

import { Layout, RouteManager as Router } from 'containers';
import { ToastContainer } from 'react-toastify';

import { DappProvider, DappUI } from '@elrondnetwork/dapp-core';

import 'react-toastify/dist/ReactToastify.css';
import 'assets/styles/index.scss';
import { WalletConnectContext } from 'services';

const {
  ExtensionLoginButton,
  WebWalletLoginButton,
  LedgerLoginButton,
  WalletConnectLoginButton,
} = DappUI;

const App: FC = () => {
  return (
    <DappProvider
      environment="devnet"
    >
      <WalletConnectContext>
        <ToastContainer autoClose={4000} hideProgressBar position="top-right" closeButton={false} />
        <Layout>
          <ExtensionLoginButton
            loginButtonText="Extension"
          />
            <WebWalletLoginButton
              loginButtonText="Web wallet"
            />
            <LedgerLoginButton
              loginButtonText="Ledger"
              className="test-class_name"
            />
            <WalletConnectLoginButton
              loginButtonText="Maiar"
            />
          <Router />
        </Layout>
      </WalletConnectContext>
    </DappProvider>
  );
};
export default App;
