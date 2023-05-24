import type { NextPage } from "next";
import { Player } from "@lottiefiles/react-lottie-player";
import styles from "./lightweb.module.css";
const Lightweb: NextPage = () => {
  return (
    <Player className={styles.lightweb} autoplay src="/light300.json" loop />
  );
};

export default Lightweb;
