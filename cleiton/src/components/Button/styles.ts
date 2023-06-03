import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 13rem;
  height: 4rem;
  color: #000;
  border-radius: 0.5rem;
  border: none;
  padding: 1rem 5.5rem;
  font-weight: 500;
  background: #ffa1d3;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
 
  outline: none;
  z-index: 1;

  &:after {
    position: absolute;
    content: "";
    width: 100%;
    height: 0;
    top: 0;
    left: 0;
    z-index: -1;
    border-radius: 0.rem;
    background-color: #491a37;
    background-image: linear-gradient(315deg, #ffa1d3 0%, #572246 74%);
    transition: all 0.3s ease;
  }

  &:hover {
    color: #fff;
  }
  &:hover:after {
    top: auto;
    bottom: 0;
    height: 100%;
  }
  &:active {
    top: 2px;
  }
`;
