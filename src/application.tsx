import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

// CONFIG
import logging from "./config/logging";

// INTERFACES
import { AppProps } from "./interfaces/app";

// CONTEXT
import { useThemeContext } from "./context/themeContext";

// ROUTES
import Router from "./routes";

// STYLES
import GlobalStyle from "./styles/global";
import { lightTheme, darkTheme } from "./styles/theme";

const Application: React.FC<AppProps> = (props) => {
  const { theme } = useThemeContext();
  // const navigate = useNavigate();

  useEffect(() => {
    logging.info(`Loading application.`)
  }, [])

  return (
    <ThemeProvider theme={ theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  )
};

export default Application;
