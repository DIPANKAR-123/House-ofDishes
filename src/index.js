// import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from '@auth0/auth0-react';
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-mpmw82qbgjcjy8fn.us.auth0.com"
    clientId="VFefbNE8S7T0D0WqJLxtSGWqC5iiexsC"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
  <BrowserRouter>
  <Provider store={store}>
        <App />
      </Provider>
    <Toaster/>
  </BrowserRouter>
  </Auth0Provider>


);
