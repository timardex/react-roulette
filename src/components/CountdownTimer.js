import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  // initialize timeLeft with the seconds prop
  const [timeLeft, setTimeLeft] = useState(10);

  useEffect(() => {
    // exit early when we reach 0
    if (!timeLeft) return;

    // save intervalId to clear the interval when the
    // component re-renders
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    // clear interval on re-render to avoid memory leaks
    return () => clearInterval(intervalId);
    // add timeLeft as a dependency to re-rerun the effect
    // when we update it
  }, [timeLeft]);

  return (
    <span>{timeLeft}</span>
  );
};

export default CountdownTimer;
