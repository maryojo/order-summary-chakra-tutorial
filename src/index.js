import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import theme from "./Theme";


import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
