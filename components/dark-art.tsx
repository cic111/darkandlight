import type { NextPage } from "next";
import { Player } from "@lottiefiles/react-lottie-player";
import styles from "./dark-art.module.css";
const DarkArt: NextPage = () => {
  return (
    <Player className={styles.darkArt} autoplay src="/dark300.json" loop />
  );
};

export default DarkArt;
