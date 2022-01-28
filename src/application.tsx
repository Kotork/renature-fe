import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

// INTERFACES
import { AppProps } from "./interfaces/app";

// ROUTES
import Router from "./routes";

// STYLES
import GlobalStyle from "./styles/global";
import theme from "./styles/theme";

const Application: React.FC<AppProps> = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  )
};

export default Application;
