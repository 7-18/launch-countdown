import styled from "styled-components";

export const CountdownDivStyled = styled.div`
  position: relative;
  height: 100vh;
`;

export const CountdownTitleStyled = styled.h1`
  color: var(--white);
  letter-spacing: 10px;
  text-align: center;
  padding-top: 15vh;
  font-size: 1rem;
`;

export const BackgroundImageStyled = styled.img`
  position: absolute;
  width: 100%;
  bottom: 0;
  z-index: -1;
`;

export const StarsStyled = styled.img`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;
