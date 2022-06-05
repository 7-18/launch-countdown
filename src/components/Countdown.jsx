import { BackgroundImageStyled, CountdownDivStyled, StarsStyled } from "../styles/CountdownStyles";
import { Icons } from "../components/Icons";
import stars from "../images/bg-stars.svg";
import pattern from "../images/pattern-hills.svg";
import { ShowCount } from "./ShowCount";

export const Countdown = () => {
  const DAYS_TO_LAUNCH = 31 * 24 * 60 * 60 * 1000;
  const finishDate = new Date(Date.now() + DAYS_TO_LAUNCH);
  return (
    <CountdownDivStyled>
      <StarsStyled src={stars} />
      <ShowCount finishDate={finishDate} />
      <Icons />
      <BackgroundImageStyled src={pattern} />
    </CountdownDivStyled>
  );
};