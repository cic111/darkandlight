import type { NextPage } from "next";
import { Player } from "@lottiefiles/react-lottie-player";
import styles from "./json-snakes.module.css";
const JsonSnakes: NextPage = () => {
  return (
    <video className={styles.jsonsnakes} autoPlay loop muted>
      <source src="/snake75.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default JsonSnakes;
