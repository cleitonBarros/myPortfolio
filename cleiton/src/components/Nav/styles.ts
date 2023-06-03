import styled from "styled-components";

export const Nav = styled.nav`
  transition: left 0.5s linear;
  width: 112.4rem;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    cursor: pointer;

    padding: 1rem 1.8rem;

    font-size: 1.6rem;
    font-weight: 500;
    line-height: 2.4rem;

    color: #000;
  }
`;
export const Navbar = styled.ul`
  opacity: 0;
  visibility: hidden;
  display: none;

  gap: 2rem;
  padding: 1rem 1.8rem;

  font-size: 1.6rem;
  font-weight: 500;
  line-height: 2.4rem;

  a {
    color: #000;
  }
  li {
    padding: 0.5rem 0;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      width: 0;
      height: 0.3rem;
      left: 0;
      bottom: 0;
      background-color: red;
      transition: width 0.5s ease-in-out;
    }

    &:hover::after {
      width: 100%;
    }
  }

  @media (min-width: 600px) {
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 1;
    visibility: visible;
  }
`;
export const Menu = styled.div`
  opacity: 0;
  visibility: hidden;
  position: fixed;
  width: 100%;
  left: -100%;
  min-width: 345px;
  height: 100vh;
  margin-top: 8.4rem;
  top: 0px;
  background-color: #ffffff;
  transition: all 0.5s ease-in-out;
  border-top: 2px solid #e3e3e3;

  &.open-menu {
    visibility: visible;
    opacity: 1;
    left: 0;
    transition: all 0.7 ease-in-out;
  }

  @media (min-width: 600px) {
    opacity: 0;
    visibility: hidden;
    display: none;
  }
`;
export const Logo = styled.div`
  svg {
    margin: 0 auto;
    cursor: pointer;
    
  }

  @media (max-width: 600px) {
    svg,
    .hexagon,
    .ac,
    line {
      transition: 0.5s all cubic-bezier(0.87, -0.41, 0.19, 1.44);
    }

    .firstline,
    .lastline,
    .middleline {
      transition: 0.3s all cubic-bezier(0.87, -0.41, 0.19, 1.44);
    }

    svg:hover {
      transform: rotate(120deg);
    }

    svg:hover .ac {
      transform: translate(-3.7px, -3.5px) rotate(-180deg);
      opacity: 0;
    }

    svg:hover line {
      stroke-dashoffset: 100;
      animation: dash 0.3s linear forwards alternate !important;
      animation-delay: 0.15s;
    }

    svg:hover .middleline {
      animation-delay: 0.25s !important;
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
    svg.click .lines {
      opacity: 1;
      transition: 0.3s opacity ease-in-out;
      transition-delay: 0.1s;
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

    svg:hover .hexagon {
      opacity: 0;
    }

    svg.click .lastline {
      transform: rotate(-45deg) translate(-26px, 21px);
    }

    svg.click:hover {
      transform: rotate(120deg);
    }

    .redraw {
      animation: dash 0.4s forwards linear;
      animation-delay: 0.4s;
    }

    svg.click .middleline {
      animation: undash 0.4s forwards linear !important;
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
    g {
      stroke: #000000;
      fill: #000000;
    }
    line {
      stroke: #000000;
      stroke-width: 4;
      stroke-linecap: round;
      stroke-miterlimit: 10;
      stroke-dasharray: 33;
      stroke-dashoffset: 50;
      animation: undash 0.4s forwards linear;
    }
  }
`;
export const Box = styled.div`
  margin: 0 auto;
  padding: 8rem 5rem 0;
  max-width: 44rem;
  display: flex;
  justify-content: center;
  font-size: 3rem;
  font-weight: 400;

  ul {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 5rem;
    width: fit-content;
  }

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    width: 29rem;
    height: 5rem;
    cursor: pointer;
  }

  a {
    color: #000;
    letter-spacing: 3px;

    &#cv {
      font-size: 2rem;
      padding: 1rem 1.5rem;
      border-radius: 1rem;
      background: #000;
      color: #fff;
    }
  }
`;
