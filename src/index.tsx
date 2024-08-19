import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Providers from "providers/Providers";
import { theme as defaultTheme } from "styles/Theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Providers theme={defaultTheme}>
      <App />
    </Providers>
  </React.StrictMode>
);
