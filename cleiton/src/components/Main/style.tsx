import styled from "styled-components"

export const Main = styled.main`
display: flex;
justify-content: center;
align-items: center;
    width:100%;
    height: 100vh;
    opacity: 1;
    background: #1bd41b;
    left: 0vw;
    position: relative;
    transition: left 0.5s ease-in-out;

    &.main-move{
        left: 45vw;
    }

    @media (min-width: 1000px){

        &.main-move {
            left: 450px;
        }
    }
      

`