import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Fragment, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import "./assets/style/index.css";
import "./assets/style/App.css";
import Router from "./components/router";
import store from "./redux/store.js";
const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Fragment>
            <Router />
          </Fragment>
        </BrowserRouter>
      </QueryClientProvider>
    </Provider>
  </StrictMode>
);
