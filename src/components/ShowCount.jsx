import { useCountdown } from "../hooks/useCount";
import { CountdownTitleStyled } from "../styles/CountdownStyles";
import { Count } from "./Count";
import { FinishCountdown } from "./FinishCountdown";

export const ShowCount = ({ finishDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(finishDate);

  if (days + hours + minutes + seconds === 0) {
    return <FinishCountdown />;
  } else {
    return (
      <>
        <CountdownTitleStyled>We're launching soon</CountdownTitleStyled>
        <Count
          days={days}
          hours={hours}
          minutes={minutes}
          seconds={seconds}
        />
      </>

    );
  }
}