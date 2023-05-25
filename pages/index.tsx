import type { NextPage } from "next";
import { useCallback } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import NavBar from "../components/nav-bar";
import Footer from "../components/footer";
import styles from "./index.module.css";
import dynamic from "next/dynamic";
import router from "next/router";

const Home: NextPage = () => {
  const JsonSnakes = dynamic(() => import("../components/json-snakes"));
  const PhaseJson = dynamic(() => import("../components/phase-json"));
  const WomanLiv = dynamic(() => import("../components/woman-liv"));
  const onButtonDarkClick = useCallback(() => {
    router.push("/dark");
  }, [router]);

  const onButtonWhite1Click = useCallback(() => {
    router.push("/light");
  }, [router]);

  const onAboutClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='about']");
    if (anchor) {
      anchor.scrollIntoView({ block: "nearest" });
    }
  }, []);

  const onButtonWhite2Click = useCallback(() => {
    router.push("/light");
  }, [router]);

  const onButtonDark1Click = useCallback(() => {
    router.push("/dark");
  }, [router]);

  return (
    <div className={styles.home}>
      <NavBar />
      <div className={styles.herocontainer}>
        <JsonSnakes />
        <div className={styles.heroinfo}>
          <div className={styles.whoseSideAre}>Whose side are you on?</div>
          <div className={styles.buttonText}>
            <div className={styles.button}>
              <button className={styles.buttonDark} onClick={onButtonDarkClick}>
                <div className={styles.dark}>DARK</div>
              </button>
              <button
                className={styles.buttonWhite}
                onClick={onButtonWhite1Click}
              >
                <div className={styles.light}>LIGHT</div>
              </button>
            </div>
            <div className={styles.clickToMint}>Click to mint</div>
          </div>
        </div>
      </div>
      <div
        className={styles.about}
        data-scroll-to="about"
        onClick={onAboutClick}
      >
        <div className={styles.aboutncontent}>
          <div className={styles.textblock}>
            <div className={styles.about1}>About</div>
            <div className={styles.textcontainer}>
              <div className={styles.welcomeToThe}>
                Welcome to the World of Dark and Light
              </div>
              <div
                className={styles.stepIntoThe}
              >{`Step into the realm of Dark and Light, an innovative and experimental NFT project built on the Ethereum & Bitcoin blockchain that explores the concept of duality and the balance between opposing forces. Immerse yourself in the captivating struggle between the two sides, and decide which path you will follow the path of darkness or the path of light.`}</div>
              <div className={styles.welcomeToThe}>The Choice is Yours</div>
              <div className={styles.uponEnteringThe}>
                Upon entering the world of Dark and Light, you will be presented
                with a choice between two ERC1150 tokens: Light and Dark. The
                mint will be open for 24 hours in an Open Edition format, and at
                the end of this period, we will see which side has garnered more
                support.
              </div>
              <div className={styles.welcomeToThe}>Conversion</div>
              <div className={styles.uponEnteringThe}>
                Discover the profound essence of permanence as you witness the
                transition into a new state that will endure for eternity.
                Embrace the power of everlasting memories and eternalize
                moments, securely recorded in the most reliable and historical
                blockchain Bitcoin. Through the technology of Ordinals each
                inscription becomes your personal, unique testament, preserved
                for eternity.
              </div>
            </div>
          </div>
          <WomanLiv />
        </div>
        <img className={styles.linewhiteIcon} alt="" src="/linewhite@1x.png" />
      </div>
      <div className={styles.phase}>
        <div className={styles.phasecontent}>
          <PhaseJson />
          <div className={styles.phasetextblock}>
            <div className={styles.phase1}>Phase</div>
            <div className={styles.phasecontainer}>
              <div className={styles.phase11}>
                <div className={styles.phase1Free}>Phase 1: FREE mint</div>
                <img
                  className={styles.linephase12Icon}
                  alt=""
                  src="/linephase1-2@2x.png"
                />
                <div className={styles.mintOpenWithin}>
                  The first 1000 NFTs will be free. Free mint in FCFS format
                </div>
              </div>
              <img
                className={styles.phasecontainerChild}
                alt=""
                src="/polygon-1.svg"
              />
              <div className={styles.phase2}>
                <div className={styles.phase1Free}>Phase 2: Public Mint</div>
                <img
                  className={styles.linephase12Icon}
                  alt=""
                  src="/linephase1-2@2x.png"
                />
                <div className={styles.mintOpenWithin}>
                  Mint open within 24 hours at a price of 0.003 ETH per NFT
                </div>
              </div>
              <img
                className={styles.phasecontainerChild}
                alt=""
                src="/polygon-1.svg"
              />
              <div className={styles.phase2}>
                <div className={styles.phase1Free}>Phase 3: Сonversion</div>
                <img
                  className={styles.linephase12Icon}
                  alt=""
                  src="/linephase1-2@2x.png"
                />
                <div className={styles.mintOpenWithin}>
                  Conversion ERC1155 token into an Ordinal inscription in the
                  Bitcoin blockchain.
                </div>
              </div>
              <img
                className={styles.phasecontainerChild}
                alt=""
                src="/polygon-1.svg"
              />
            </div>
            <div className={styles.phase20}>Phase 2.0</div>
          </div>
        </div>
      </div>
      <div className={styles.mergescheme}>
        <div className={styles.contentmergeblock}>
          <div className={styles.conversion1}>Conversion</div>
          <div className={styles.mergescheme1}>
            <img
              className={styles.backimgmergeIcon}
              alt=""
              loading="lazy"
              src="/backimgmerge@1x.png"
            />
            <div className={styles.imageandbuttonconvers}>
              <div className={styles.carddl}>
                <Player
                  className={styles.light5}
                  autoplay
                  src="/light300.json"
                  loop
                />
                <Player
                  className={styles.dark3}
                  autoplay
                  src="/dark300.json"
                  loop
                />
              </div>
              <div className={styles.buttondlmerge}>
                <button
                  className={styles.buttonWhite1}
                  onClick={onButtonWhite2Click}
                >
                  <div className={styles.light}>LIGHT</div>
                </button>
                <button
                  className={styles.buttonDark1}
                  onClick={onButtonDark1Click}
                >
                  <div className={styles.dark}>DARK</div>
                </button>
              </div>
            </div>
            <div className={styles.hideanddiscr}>
              <button className={styles.buttonMerge}>
                <div className={styles.dark}>TRANSFORM</div>
              </button>
              <div className={styles.byHoldingDark}>
                By holding Dark or Light ERC1155 tokens on the Ethereum
                blockchain, you will be entitled to receive an Ordinals
                inscriptions on the Bitcoin blockchain. The Dark and Light
                Ordinals will be presented as a collection with unique art. The
                total supply of inscriptions will depend on the number of minted
                tokens in the second phase of our journey.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.ideology}>
        <div className={styles.ideologycontent}>
          <div className={styles.ideology1}>Ideology</div>
          <div className={styles.textidecontent}>
            <img
              className={styles.baclimgideIcon}
              alt=""
              loading="lazy"
              src="/baclimgide@1x.png"
            />
            <div className={styles.textideleft}>
              <div className={styles.welcomeToThe}>
                A Dynamic, Evolving Experience
              </div>
              <div
                className={styles.darkLight}
              >{`Dark & Light is more than just an NFT project – it's a social experiment that encourages users to choose a side and interact with NFTs representing their chosen allegiance. The project aims to create a dynamic, evolving, and immersive experience for its community. By engaging with the project, users can expand their knowledge and explore the fascinating realm of blockchain technology.`}</div>
            </div>
            <div className={styles.textidecenter}>
              <div className={styles.theArtOf}>The Art of Duality</div>
              <div className={styles.theOrdinalsThemselves}>
                The Ordinals themselves will feature unique, high-quality
                digital art representing the themes of Darkness and Light. Dark
                ordinals will showcase darker, more mysterious elements, while
                Light ordinals will feature brighter, more uplifting imagery.
              </div>
            </div>
            <div className={styles.textideright}>
              <div className={styles.theArtOf}>
                Educational and cultural impact
              </div>
              <div
                className={styles.theOrdinalsThemselves}
              >{`By exploring the concept of duality and the balance between opposing forces, the Dark & Light project aims to inspire thought and conversation around the importance of harmony, unity, and understanding in our world. Through art, social experiments, technologies and community engagement, the project seeks to create a lasting impact on its audience and the broader cultural landscape.`}</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.faq}>
        <img
          className={styles.k1Icon}
          alt=""
          loading="lazy"
          src="/womanfooter@1x.png"
        />
        <div className={styles.faq1}>FAQ</div>
        <div className={styles.faq2}>
          <div className={styles.ordinalsblock}>
            <div className={styles.ordinal}>
              <div className={styles.whatAreOrdinal}>
                What are Ordinal inscription?
              </div>
              <div className={styles.bitcoinIsDividedContainer}>
                {`Bitcoin is divided into small units called satoshis or sats, with each Bitcoin consisting of 100,000,000 sats. The new `}
                <a
                  className={styles.ordinalsProtocol}
                  href="https://github.com/casey/ord/blob/master/bip.mediawiki"
                  target="_blank"
                >
                  <span className={styles.ordinalsProtocol1}>
                    Ordinals protocol
                  </span>
                </a>{" "}
                now allows for data to be added to each of these sats by those
                who run Bitcoin nodes, effectively creating a new type of
                digital asset called an “Ordinal.”
              </div>
              <img
                className={styles.vector31}
                alt=""
                src="/vector-3-1@2x.png"
              />
            </div>
            <div className={styles.long}>
              <div className={styles.howToGet}>
                How to get Bitcoin Ordinals?
              </div>
              <div className={styles.youNeedToContainer}>
                <p className={styles.youNeedTo}>
                  You need to set up a wallet. Top 3 Ordinals wallets:
                </p>
                <p className={styles.youNeedTo}>XVERSE</p>
                <p className={styles.youNeedTo}>UNISAT</p>
                <p className={styles.youNeedTo}>HIRO WALLET</p>
                <p className={styles.youNeedTo}>
                  Follow updates and news Dark and Light project
                </p>
              </div>
              <img
                className={styles.vector34}
                alt=""
                src="/vector-3-4@2x.png"
              />
            </div>
          </div>
          <div className={styles.contentFaq}>
            <div className={styles.cardmintdate}>
              <div className={styles.tba}>{`TBA `}</div>
              <img
                className={styles.vector32}
                alt=""
                src="/vector-3-1@2x.png"
              />
              <div className={styles.mintDate}>Mint Date ?</div>
            </div>
            <div className={styles.manytokens}>
              <div className={styles.totalSupply}>Total Supply?</div>
              <div
                className={styles.unlimitedOpenEdition}
              >{`Unlimited (Open Edition format) `}</div>
              <img
                className={styles.vector31}
                alt=""
                src="/vector-3-1@2x.png"
              />
            </div>
            <div className={styles.cardmintdate}>
              <div className={styles.nftFree}>
                1 NFT - Free mint | 20 NFTs - Public
              </div>
              <img
                className={styles.vector32}
                alt=""
                src="/vector-3-1@2x.png"
              />
              <div className={styles.maxPerWallet}>Max per Wallet ?</div>
            </div>
            <div className={styles.manytokens1}>
              <div className={styles.mintPrice}>Mint Price?</div>
              <div className={styles.first1000}>
                First 1000 - Free | Public = 0.003 ETH
              </div>
              <img
                className={styles.vector31}
                alt=""
                src="/vector-3-1@2x.png"
              />
            </div>
            <div className={styles.manytokens1}>
              <div className={styles.howLongWill}>
                How long will the mint last?
              </div>
              <div className={styles.hoursOpenEdition}>
                24 hours (Open Edition format)
              </div>
              <img
                className={styles.vector31}
                alt=""
                src="/vector-3-1@2x.png"
              />
            </div>
          </div>
        </div>
        <img className={styles.line24} alt="" src="/line-2-4@1x.png" />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
