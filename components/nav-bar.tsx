import type { NextPage } from "next";
import { useCallback } from "react";
import styles from "./nav-bar.module.css";
import { ConnectWallet } from "@thirdweb-dev/react";
import router from "next/router";

const NavBar: NextPage = () => {
  const onButtonBlackClick = useCallback(() => {
    router.push("/dark");
  }, [router]);

  const onButtonWhiteClick = useCallback(() => {
    router.push("/light");
  }, [router]);

  const onAbout1Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='about1']");
    if (anchor) {
      anchor.scrollIntoView({ block: "end", behavior: "smooth" });
    }
  }, []);

  const onPhaseClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='phase']");
    if (anchor) {
      anchor.scrollIntoView({ block: "end", behavior: "smooth" });
    }
  }, []);

  const onConversionClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='conversion']");
    if (anchor) {
      anchor.scrollIntoView({ block: "end", behavior: "smooth" });
    }
  }, []);

  const onIdeologyClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='ideology']");
    if (anchor) {
      anchor.scrollIntoView({ block: "end", behavior: "smooth" });
    }
  }, []);

  const onFaqClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='faq']");
    if (anchor) {
      anchor.scrollIntoView({ block: "end", behavior: "smooth" });
    }
  }, []);

  return (
    <div className={styles.navbar}>
      <div className={styles.navbarcontent}>
        <div className={styles.logoandbutton}>
          <img
            className={styles.logoWhite2}
            alt=""
            src="/logo-white-2@2x.png"
          />
          <div className={styles.linkButton}>
            <button className={styles.buttonBlack} onClick={onButtonBlackClick}>
              <div className={styles.dark}>DARK</div>
            </button>
            <button className={styles.buttonWhite} onClick={onButtonWhiteClick}>
              <div className={styles.light}>LIGHT</div>
            </button>
          </div>
        </div>
        <div className={styles.linkandconnect}>
          <div className={styles.linkmenu}>
            <a className={styles.about} onClick={onAbout1Click}>
              about
              <div className={styles.anchorAbout} data-scroll-to="about1" />
            </a>
            <a className={styles.about} target="_blank" onClick={onPhaseClick}>
              phase
              <div className={styles.anchorPhase} data-scroll-to="phase" />
            </a>
            <a
              className={styles.about}
              target="_blank"
              onClick={onConversionClick}
            >
              conversion
              <div
                className={styles.anchorConversion}
                data-scroll-to="conversion"
              />
            </a>
            <a
              className={styles.about}
              target="_blank"
              onClick={onIdeologyClick}
            >
              ideology
              <div
                className={styles.anchorIdeology}
                data-scroll-to="ideology"
              />
            </a>
            <a className={styles.about} target="_blank" onClick={onFaqClick}>
              faq
              <div className={styles.anchorFaq} data-scroll-to="faq" />
            </a>
          </div>
          <ConnectWallet btnTitle="Connect" />
        </div>
      </div>
      <img className={styles.line41} alt="" src="/line-4-1@2x.png" />
    </div>
  );
};

export default NavBar;
