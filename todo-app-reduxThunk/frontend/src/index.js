import React from "react";
import { PersistGate } from 'redux-persist/integration/react';
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { store, persistor } from './services/store';

const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#37474F",
    },
    secondary: {
      main: "#e1f5fe",
    },
  },
});

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
    <ThemeProvider theme={darkTheme}>
      <App />
    </ThemeProvider>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
