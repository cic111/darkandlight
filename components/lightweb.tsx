import type { NextPage } from "next";
import styles from "./lightweb.module.css";
const Lightweb: NextPage = () => {
  return (
    <video
      className={styles.lightweb}
      width="300"
      height="300"
      autoPlay
      loop
      muted
    >
      <source src="/light100.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default Lightweb;
