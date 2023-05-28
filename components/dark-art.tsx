import type { NextPage } from "next";
import styles from "./dark-art.module.css";
const DarkArt: NextPage = () => {
  return (
    <video
      className={styles.darkArt}
      width="300"
      height="300"
      autoPlay
      loop
      muted
    >
      <source src="/dark100.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default DarkArt;
