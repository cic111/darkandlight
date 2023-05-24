import type { NextPage } from "next";
import { useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Countdown from "./countdown";
import styles from "./navbardark.module.css";
import { ConnectWallet } from "@thirdweb-dev/react";

const Navbardark: NextPage = () => {
  const targetDate = new Date("2023-05-25T12:00:00");
  const router = useRouter();

  const onLogoWhite2Click = useCallback(() => {
    router.push("/");
  }, [router]);

  const onButtonWhiteClick = useCallback(() => {
    window.open("/light-mint-page");
  }, []);

  const onHomeClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className={styles.navbar}>
      <div className={styles.navbarcontent}>
        <div className={styles.logoandbutton}>
          <div className={styles.logofootre}>
            <Link
              className={styles.logoWhite2}
              href="/"
              onClick={onLogoWhite2Click}
            />
          </div>
          <button className={styles.buttonBlack}>
            <div className={styles.dark}>DARK</div>
          </button>
          <button className={styles.buttonWhite} onClick={onButtonWhiteClick}>
            <div className={styles.light}>LIGHT</div>
          </button>
        </div>
        <div className={styles.linkandconnect}>
          <a className={styles.home} target="_blank" onClick={onHomeClick}>
            home
          </a>
          <ConnectWallet btnTitle="CONNECT" />
        </div>
        <Countdown targetDate={targetDate} />
      </div>
    </div>
  );
};

export default Navbardark;
