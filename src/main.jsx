import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { AuthProviderWithHistory } from "./auth/AuthProviderWithHistory";

import {
  ModuleRegistry,
  AllCommunityModule,
} from 'ag-grid-community';

ModuleRegistry.registerModules([
  AllCommunityModule,
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProviderWithHistory>
      <App />
    </AuthProviderWithHistory>
  </BrowserRouter>
);
