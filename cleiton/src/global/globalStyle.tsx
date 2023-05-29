import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    text-decoration: none;
  }
  :root{
    font-size: 62.5%;
  }

  .container{
    max-width: 1024px;
    margin: 0 auto
  }
  @keyframes undash {
    0% {
      stroke-dasharray: 100;
      stroke-dashoffset: 0;
    }
    100% {
      stroke-dasharray: 100;
      stroke-dashoffset: 102;
    }   
  }

  @keyframes dash {
    from {
      stroke-dashoffset: 100;
    }
    to {
      stroke-dashoffset: 69;
    }  
  }
`;
 
export default GlobalStyle;