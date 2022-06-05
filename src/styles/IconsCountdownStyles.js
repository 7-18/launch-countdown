import styled from "styled-components";

export const IconsDivStyled = styled.div`
  text-align: center;
  position: absolute;
  width: 100%;
  z-index: 1;
  bottom: 10%;
`;

export const IconImgStyled = styled.img`
  margin-right: 2rem;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    filter: invert(60%) sepia(56%) saturate(3812%) hue-rotate(310deg)
      brightness(100%) contrast(97%);
  }

  &:last-child {
    margin-right: 0;
  }
`;
