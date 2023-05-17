import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import App from "./containers/App/App";
import { store } from "./redux/store/index";

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
