import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  // FONTS
  :root {
    --text-font: 'Roboto';
    --title-font: 'Roboto';
    --light-gray: #f2f2f2;
    --green: #106f2b;
    --blue: #22293c;
    --red: #c9050d;
    --yellow: #ffd505;
    --header1: 22px;
    --header2: 18px;
  }

  // Scrollbar styles
  ::-webkit-scrollbar {
    width: 5px;
    height: 6px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px var(--light-gray);
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: $green;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--light-gray);
  }

  // Global Styles
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html {
    font-size: 62.5%;
  }

  body {
    -webkit-font-smoothing: antialiased;
    font-family: var(--text-font);
    font-size: 1.6rem;

    * {
      transition: all .3s ease-in-out;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--tittle-font);
    font-weight: 500;
  }

  h2 {
    font-size: 2.4rem;
  }

  h3 {
    font-size: 2rem;
  }

  button {
    cursor: pointer;
  }
  
`;