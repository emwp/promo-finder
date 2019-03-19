import { createGlobalStyle } from 'styled-components';
import img from './img/red.svg';

const GlobalStyle = createGlobalStyle`

html {
  height: 100%;
}

body {
  margin: 0;
  padding: 0;
  font-family: 'Open Sans', sans-serif;
  background-image: url(${img});
  background-size: cover;
  height: 100%;
}
`;

export default GlobalStyle;
