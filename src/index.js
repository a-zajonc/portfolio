import * as React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { extendTheme } from "@chakra-ui/react";

const breakpoints = {
  sm: "320px",
  md: "650px",
  lg: "960px",
  xl: "1100px",
  "2xl": "1536px",
};
const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "white",
      },
    },
  },
  fonts: {
    heading: "Montserrat",
    body: "Montserrat",
  },
  breakpoints,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
