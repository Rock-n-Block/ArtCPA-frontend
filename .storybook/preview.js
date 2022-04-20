import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from 'react-router-dom';

import store from "../src/store/configureStore";

import { addDecorator } from "@storybook/react";
import { CssBaseline, StylesProvider, ThemeProvider } from "@material-ui/core";
import Connector from "services/walletConnect";

import { theme } from "../src/theme";
import { BreakpointsProvider } from "../src/hooks/useBreakpoints";

const MUIDecorator = (story) => (
  // <Provider store={store.store}>
  //   <Connector>
      <Router>
        <ThemeProvider theme={theme}>
          <StylesProvider>
            <CssBaseline />
            <BreakpointsProvider>{story()}</BreakpointsProvider>
          </StylesProvider>
        </ThemeProvider>
      </Router>
  //   </Connector>
  // </Provider>
);

addDecorator(MUIDecorator);

export const parameters = { layout: "fullscreen" };
