import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    text-decoration: none;
  }
  *::selection {
  background: transparent;
  color: #37CCC9;
}
  :root{
    --white-100: #fff,
    --white-200: #f0f0f0,
  }
  body{
    background: var(--white-100);
    left: 5rem;
    margin-right: 5rem;
    position: relative;
    overflow-x: hidden;
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

  @keyframes  shelf{
    0% {
      padding-right: 0px;
    }
    20% {
        padding-right: 20px;
    }
    40% {
        padding-right: 10px;
    }
    60% {
        padding-right: 15px;
    }
    80% {
        padding-right: 5px;
    }
    100% {
        padding-right: 0px;
    }  
  }

  @media (max-width: 600px) {
  body{
    left: 0;
    margin-right: 0;
  }
  }
`;
 
export default GlobalStyle;