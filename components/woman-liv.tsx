import type { NextPage } from "next";
import { Player } from "@lottiefiles/react-lottie-player";
import styles from "./woman-liv.module.css";
const WomanLiv: NextPage = () => {
  return (
    <video className={styles.womanLiv} autoPlay loop muted>
      <source src="/king.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default WomanLiv;
