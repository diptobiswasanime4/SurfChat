import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { SocketProvider } from "./SocketProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <SocketProvider>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </SocketProvider>
  </BrowserRouter>
);
