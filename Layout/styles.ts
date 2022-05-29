import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root{
      --text: #fafafa;
      --background: #201f20;
      --background-light: #282728;
      --main: #52B788;
      --main-dark: #2D6A4F;
      --main-light: #95D5B2;
      --main-lighter: #D8F3DC;
    }

  @media (prefers-color-scheme: light){
    :root{
      --text: #201f20;
      --background: #f0f0f0;
      --background-light: #fafafa;
      --main: #52B788;
      --main-dark: #2D6A4F;
      --main-light: #95D5B2;
      --main-lighter: #D8F3DC;
    }
  }
  
  * {
    box-sizing: border-box;
  }

  body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto,
      'Helvetica Neue', Arial, sans-serif;
  font-weight: 400;
  }
  
  a {
    text-decoration: none;
  }

  input, button {
    border: none;
    outline: transparent;
  }
  
  button {
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0);
    

    ::focus, ::active {
      border: none;
    }
  }
`;

export default GlobalStyle;
