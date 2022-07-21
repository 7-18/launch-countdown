import { BackgroundImageStyled, CountdownDivStyled, StarsStyled } from "../styles/CountdownStyles";
import { Icons } from "../components/Icons";
import stars from "../images/bg-stars.svg";
import pattern from "../images/pattern-hills.svg";
import { ShowCount } from "./ShowCount";

export const Countdown = () => {
  const finishDate = new Date(2022, 12, 31);
  return (
    <CountdownDivStyled>
      <StarsStyled src={stars} />
      <ShowCount finishDate={finishDate} />
      <Icons />
      <BackgroundImageStyled src={pattern} />
    </CountdownDivStyled>
  );
};
