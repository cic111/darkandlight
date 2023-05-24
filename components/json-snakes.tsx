import type { NextPage } from "next";
import { Player } from "@lottiefiles/react-lottie-player";
import styles from "./json-snakes.module.css";
const JsonSnakes: NextPage = () => {
  return (
    <Player
      className={styles.jsonsnakes}
      autoplay
      src="https://lottie.host/5e48b4d1-f036-4ded-a07e-18dbd2d44e40/lfL5aHViqt.json"
      loop
    />
  );
};

export default JsonSnakes;
