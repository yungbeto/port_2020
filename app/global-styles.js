import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  -webkit-transition: all 0.2s ease;
  -moz-transition:    all 0.2s ease;
  -ms-transition:     all 0.2s ease;
  -o-transition:      all 0.2s ease;
}
  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
    color: #FFFCEB;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #111111;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    line-height: 1.5em;
  }

  a,
  a:visited {
    color: #FF41B4;
  }
  a:hover,
  a:focus,
  a:active {
    color: #D5008F;
  }
`;

export default GlobalStyle;
