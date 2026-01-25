import React from "react";
import { createRoot } from "react-dom/client";

import GlobalStyle from './styles/global';

import App from "./components/App";

const root = createRoot(document.getElementById("root"));
root.render(
    <>
        <GlobalStyle />
        <App />
    </>
);