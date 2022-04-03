import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`


  html{
    font-size: 10px;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      @media only screen and (max-width: 1024px) {
        font-size: 8px;
      }
      @media only screen and (max-width: 768px) {
        font-size: 6px;
      }
  }
body {
  background-color: #ffffff ;
  font-size: 1.6rem ;
  
   
    
  color: ${(props) => props.theme.colors.primaryText};

  /* @media only screen and (min-width: 480px) {
       font-size: 12px;
}
  @media only screen and (min-width: 768px) {
       font-size: 14px;
}
  @media only screen and (min-width: 1024px) {
       font-size: 16px;
}
  @media only screen and (min-width: 1600px) {
       font-size: 18px;
}
  @media only screen and (min-width: 2000px) {
       font-size: 20px;
} */
}

*{
  padding:0 ;
  margin:0 ;
  box-sizing: border-box;
}

p{
  font-size: 1.6rem;
  color: ${(props) => props.theme.colors.primaryText};
}
`;

export default GlobalStyle;
