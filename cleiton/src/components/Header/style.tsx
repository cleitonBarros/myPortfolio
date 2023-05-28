import styled from "styled-components"

export const Nav = styled.nav`
    width: 5rem;
    height: 100vh;

    background-color: #fff;
    border-right: 1px solid #f0f0f0;

    position: fixed;
    left: 0;
    z-index: 9999;

    @media (max-width: 600px) {
  
        width: 100%;
        height: 80px;
        background: #fff;
        position: fixed;
        left: 0;
        border-right: 0 solid #f0f0f0;
        z-index: 9999;
   
    }
`
export const Logo = styled.div`
    display: block;
    cursor: pointer;
    margin: 47vh 0;
    
    svg{
        display: block;
        margin: 0 auto;
        cursor: pointer;
             
    }
    svg, .hexagon, .ac, line{
        transition: 0.5s all cubic-bezier(.87, -.41, .19, 1.44);
    }

    .firstline,.lastline,.middleline {
    transition: 0.3s all cubic-bezier(.87, -.41, .19, 1.44);
    }

    svg:hover{
    transform: rotate(120deg);
    }

    svg:hover .ac {
    transform: translate(-3.7px, -3.5px) rotate(-180deg);
    opacity: 0;
    }

    svg:hover line{
    stroke-dashoffset: 100;
    animation: dash 0.3s linear forwards alternate!important;
    animation-delay: 0.15s;
    }

    svg:hover .middleline{
    animation-delay: 0.25s!important;
    }

    svg line {
    animation: undash 0.3s linear forwards alternate;
    }

    .lines {
    transform: rotate(60deg) translate(5.5px, -32.5px);
    opacity: 0;
    transition: 0.3s opacity ease-in-out;
    transition-delay: 0.3s;
    }

    svg:hover .lines,
    svg.click .lines{
    opacity: 1;
    transition: 0.3s opacity ease-in-out;
    transition-delay: .1s;
    }

    svg:hover .firstline {
    transform: translatey(2px);
    transition-delay: 0.2s;
    }

    svg.click .firstline {
    transform: rotate(45deg) translate(7px, -32px);
    }

    svg:hover .lastline {
    transform: translatey(-2px);
    transition-delay: 0.2s;
    }

    svg.click .hexagon {
    opacity: 0;
    }

    svg:hover .hexagon{
    opacity: 0;
    }

    svg.click .lastline {
    transform: rotate(-45deg) translate(-26px, 21px);
    }

    svg.click:hover{
    transform: rotate(120deg);
    }

    .redraw {
    animation: dash 0.4s forwards linear;
    animation-delay: 0.4s;
    }

    svg.click .middleline {
    animation: undash 0.4s forwards linear!important;
    }

    svg.click {
    transform: rotate(120deg);
    }

    svg.click .ac {
    display: none;
    }

    svg.click line {
    animation: dash 0.4s linear forwards alternate;
    animation-delay: 0.15s;
    }
    g{
        stroke: #D9042B;
        fill: #D9042B;
    }
    line {
    stroke: #D9042B;
    stroke-width: 4;
    stroke-linecap: round;
    stroke-miterlimit: 10;
    stroke-dasharray: 33;
    stroke-dashoffset: 50;
    animation: undash 0.4s forwards linear;
    }

    @media (max-width: 600px) {
        margin: 0;
  
    svg {
        margin: 17px;
    }  
    
}

`
export const Navigation  = styled.div`
  
   
`

export const MenuBg = styled.div`
    position: fixed;
    display: none;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0);
    z-index: 11;
    transition: 0.5s all ease-in-out;

    .open-nav + &.menu-bg {
        display: block;
        background: rgba(0, 0, 0, 0.5);
        transition: 0.3s all ease-in-out;
    }
`
