import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import '@fontsource/roboto';
import '@fontsource/poppins';

import App from 'App';
import store from './store/configureStore';

import 'assets/styles/index.scss';

const root = document.getElementById('root');

const app = (
  <Provider store={store.store}>
    {/* @ts-ignore */}
    <PersistGate loading={null} persistor={store.persistor}>
      <Router>
        <App />
      </Router>
    </PersistGate>
  </Provider>
);

ReactDOM.render(app, root);
