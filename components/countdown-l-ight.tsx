import styles from "./countdown-l-ight.module.css";
import React, { useState, useEffect } from "react";

interface CountdownProps {
  targetDate: Date;
}

const CountdownLIght: React.FC<CountdownProps> = ({ targetDate }) => {
  const [isClient, setIsClient] = useState(false);
  const calculateTimeLeft = () => {
    const now = new Date();
    const timeLeft = targetDate.getTime() - now.getTime();
    return timeLeft > 0 ? timeLeft : 0;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setIsClient(true);

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [targetDate]);

  const formatTimeLeft = () => {
    const seconds = Math.floor(timeLeft / 1000) % 60;
    const minutes = Math.floor(timeLeft / (1000 * 60)) % 60;
    const hours = Math.floor(timeLeft / (1000 * 60 * 60)) % 24;
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));

    return `${hours} H: ${minutes} M: ${seconds} S`;
  };

  return <div className={styles.div}>{isClient && formatTimeLeft()}</div>;
};

export default CountdownLIght;
