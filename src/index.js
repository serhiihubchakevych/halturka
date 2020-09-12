import React from "react";
import ReactDOM from "react-dom";
import { store } from "./services/store";
import { Provider } from "react-redux";

import App from "./App";

import "./index.css";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
