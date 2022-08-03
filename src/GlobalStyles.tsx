import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: "Nunito Sans", sans-serif;
  color: rgb(17, 21, 23);
  font-weight: 300;
  /* background-color: ; */
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

svg {
  display: inline-block;
}

button {
  padding: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;
}

ul,
p,
h1,
h2,
h3,
h4,
h5,
h6 {
  padding: 0;
  margin: 0;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
  color: inherit;
}
`;

export default GlobalStyle;