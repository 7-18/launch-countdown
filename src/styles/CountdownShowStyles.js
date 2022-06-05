import styled from "styled-components";

export const CounterDivStyled = styled.div`
  display: flex;
  justify-content: center;
  padding: 10vh 50px 0;
`;

export const CounterCardStyled = styled.div`
  background: var(--dark-desaturated-blue);
  position: relative;
  margin-right: 4%;
  min-width: 4.5rem !important;
  width: 10rem !important;
  height: 8rem;
  border-radius: 8px;
  box-shadow: 0px 8px 0px 0px #16151d;

  &:last-child {
    margin-right: 0;
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    z-index: 6;
    top: calc(50% - 5px);
    background-color: var(--very-dark-blue);
    border-radius: 50%;
    width: 10px;
    height: 10px;
  }

  &::before {
    left: -5px;
  }

  &::after {
    right: -5px;
  }

  @media (max-width: 450px) {
    height: 4rem !important;
  }

  @media (min-width: 558px) {
    margin-right: 2%;
  }

  @media (max-width: 650px) {
    height: 6rem;
  }
`;

export const CounterCardRemainStyled = styled.span`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  user-select: none;
  position: relative;

  @media (max-width: 500px) {
    font-size: 200% !important;
  }

  @media (max-width: 650px) {
    font-size: 350%;
  }

  @media (min-width: 650px) {
    font-size: 500%;
  }
`;

export const CounterCardNumberStyled = styled.span`
  color: var(--soft-red);
`;

export const CounterCardTextStyled = styled.p`
  letter-spacing: 5px;
  font-size: 60%;
  color: var(--graylish-blue);
  text-align: center;
  margin-top: 20px;

  @media (max-width: 330px) {
    font-size: 50%;
  }

  @media (min-width: 650px) {
    font-size: 80%;
  }
`;
