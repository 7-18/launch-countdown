import { CountdownTitleStyled } from "../styles/CountdownStyles";
import { FinalCountdownDivStyled, FinalCountStyled } from "../styles/FinishCountdownStyles";


export const FinishCountdown = () => {
  return (
    <>
      <CountdownTitleStyled>The Final Countdown!!!</CountdownTitleStyled>
      <FinalCountdownDivStyled>
        <FinalCountStyled src="https://www.youtube.com/embed/9jK-NcRmVcw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowfullscreen name="The Final Countdown">
        </FinalCountStyled>
      </FinalCountdownDivStyled>
    </>
  );
};