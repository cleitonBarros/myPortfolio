import styled from "styled-components";

export const Header_ = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 2rem;
  position: fixed;
  top: 0;
  left: 0;

  &.scrolled {
    box-shadow: 0 0.1rem 0.2rem 0 rgba(0, 0, 0, 0.2);
  }
`;
