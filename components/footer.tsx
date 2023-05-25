import type { NextPage } from "next";
import { useCallback } from "react";
import styles from "./footer.module.css";
const Footer: NextPage = () => {
  const onOpensea1IconClick = useCallback(() => {
    window.open("https://opensea.io/");
  }, []);

  return (
    <div className={styles.footer}>
      <img className={styles.line41} alt="" src="/line-4-1@2x.png" />
      <div className={styles.footercontent}>
        <img className={styles.logoWhite2} alt="" src="/logo-white-21@2x.png" />
        <div className={styles.icon}>
          <div className={styles.twitter}>
            <a className={styles.icon1} href="https://twitter.com/home">
              <img className={styles.layer2Icon} alt="" src="/layer-2.svg" />
              <img className={styles.vectorIcon} alt="" src="/vector.svg" />
            </a>
          </div>
          <img
            className={styles.opensea1Icon}
            alt=""
            src="/opensea-1.svg"
            onClick={onOpensea1IconClick}
          />
          <a
            className={styles.etherscan}
            href="https://etherscan.io/"
            target="_blank"
          >
            <img className={styles.layer2Icon} alt="" src="/vector1.svg" />
            <img className={styles.vectorIcon2} alt="" src="/vector2.svg" />
            <img className={styles.vectorIcon3} alt="" src="/vector3.svg" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
