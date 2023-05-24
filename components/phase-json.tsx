import type { NextPage } from "next";
import { Player } from "@lottiefiles/react-lottie-player";
import styles from "./phase-json.module.css";
const PhaseJson: NextPage = () => {
  return (
    <Player
      className={styles.phasejson}
      autoplay
      src="/pyramid.json"
      loop
      speed={0.7}
    />
  );
};

export default PhaseJson;
