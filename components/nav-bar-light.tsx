import type { NextPage } from "next";
import { useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./nav-bar-light.module.css";
import { ConnectWallet } from "@thirdweb-dev/react";
import React from "react";
import CountdownLIght from "./countdown-l-ight";

const NavBarLight: NextPage = () => {
  const targetDate = new Date("2023-05-25T12:00:00");
  const router = useRouter();

  const onLogoFootreClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onEllipseClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onButtonBlackClick = useCallback(() => {
    window.open("/dark-mint-page");
  }, []);

  const onHomeClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className={styles.navbar}>
      <div className={styles.navbarcontent}>
        <div className={styles.logoandbutton}>
          <Link
            className={styles.logofootre}
            href="/"
            onClick={onLogoFootreClick}
          >
            <div className={styles.logofootreChild} onClick={onEllipseClick} />
            <img
              className={styles.logoWhite2}
              alt=""
              src="/logo-white-22@2x.png"
            />
          </Link>
          <button className={styles.buttonBlack} onClick={onButtonBlackClick}>
            <div className={styles.dark}>DARK</div>
          </button>
          <button className={styles.buttonWhite}>
            <div className={styles.light}>LIGHT</div>
          </button>
        </div>
        <div className={styles.linkandconnect}>
          <a className={styles.home} target="_blank" onClick={onHomeClick}>
            home
          </a>
          <ConnectWallet btnTitle="Connect" />
        </div>
        <CountdownLIght targetDate={targetDate} />
      </div>
    </div>
  );
};

export default NavBarLight;
