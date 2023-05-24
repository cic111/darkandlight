import type { NextPage } from "next";
import { Player } from "@lottiefiles/react-lottie-player";
import styles from "./woman-liv.module.css";
const WomanLiv: NextPage = () => {
  return (
    <Player
      className={styles.womanLiv}
      autoplay
      src="/kingjsonblack.json"
      loop
    />
  );
};

export default WomanLiv;
