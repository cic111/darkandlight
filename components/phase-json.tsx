import type { NextPage } from "next";
import styles from "./phase-json.module.css";
const PhaseJson: NextPage = () => {
  return (
    <video
      className={styles.phasejson}
      width="300"
      height="300"
      autoPlay
      loop
      muted
    >
      <source src="/phase.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default PhaseJson;
