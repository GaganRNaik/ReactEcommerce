import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AppProvider } from "./context/Productcontext";
import {FilterContextProvider} from "./context/Filtercontext";
import { Cartprovider } from "./context/cart_context";
import { Auth0Provider } from "@auth0/auth0-react";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Auth0Provider
    domain="dev-8714fnspg00wcdin.us.auth0.com"
    clientId="3wSYyiMttkKQbNeI3lAEQtDZcdqk2ebx"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <AppProvider>
    <FilterContextProvider>
      <Cartprovider>
        <App />
      </Cartprovider>
    </FilterContextProvider>
  </AppProvider>
  </Auth0Provider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
