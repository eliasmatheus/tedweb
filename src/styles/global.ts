import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
   *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body{
    background: #090909;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button{
    font: 16px helvetica;
  }

  button {
    cursor: pointer;
  }

  ::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #ece8e82e;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #f10;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
`;

export default GlobalStyle;
