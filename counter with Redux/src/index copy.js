import React_dom from "react-dom/client";
import { App } from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./store/index.js";

const root = React_dom.createRoot(document.querySelector("#root"));
root.render(
  <Provider store={store}>
    <App></App>
  </Provider>
);
