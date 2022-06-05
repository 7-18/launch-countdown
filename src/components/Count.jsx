import { CounterCardRemainStyled, CounterCardNumberStyled, CounterCardStyled, CounterCardTextStyled, CounterDivStyled } from "../styles/CountdownShowStyles";

export const Count = ({ days, hours, minutes, seconds }) => {
  return (
    <CounterDivStyled>
      <CounterCardStyled>
        <CounterCardRemainStyled>
          <CounterCardNumberStyled>
            <span>{days <= 9 ? "0" + days : days}</span>
          </CounterCardNumberStyled>
        </CounterCardRemainStyled>
        <CounterCardTextStyled>Days</CounterCardTextStyled>
      </CounterCardStyled>
      <CounterCardStyled>
        <CounterCardRemainStyled>
          <CounterCardNumberStyled>
            {hours <= 9 ? "0" + hours : hours}
          </CounterCardNumberStyled>
        </CounterCardRemainStyled>
        <CounterCardTextStyled>Hours</CounterCardTextStyled>
      </CounterCardStyled>
      <CounterCardStyled>
        <CounterCardRemainStyled>
          <CounterCardNumberStyled>
            {minutes <= 9 ? "0" + minutes : minutes}
          </CounterCardNumberStyled>
        </CounterCardRemainStyled>
        <CounterCardTextStyled>Minutes</CounterCardTextStyled>
      </CounterCardStyled>
      <CounterCardStyled>
        <CounterCardRemainStyled>
          <CounterCardNumberStyled>
            {seconds <= 9 ? "0" + seconds : seconds}
          </CounterCardNumberStyled>
        </CounterCardRemainStyled>
        <CounterCardTextStyled>Seconds</CounterCardTextStyled>
      </CounterCardStyled>
    </CounterDivStyled>
  );
}