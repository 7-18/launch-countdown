import { useState, useEffect } from "react";

export const useCountdown = (finishDate) => {
  const countdownDate = new Date(finishDate).getTime();
  const [countdown, setCountdown] = useState(
    countdownDate - new Date().getTime()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(countdownDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [countdownDate]);

  if (countdown < 0) {
    return [0, 0, 0, 0];
  }

  return getCountdown(countdown);
};

const getCountdown = (countdown) => {
  const days = Math.floor(countdown / (1000 * 60 * 60 * 24));
  const hours = Math.floor((countdown / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((countdown / 1000 / 60) % 60);
  const seconds = Math.floor((countdown / 1000) % 60);

  return [days, hours, minutes, seconds];
};
