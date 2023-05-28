import type { NextPage } from "next";
import { useCallback } from "react";
import styles from "./dark-mint-page.module.css";
import Navbardark from "../components/navbardark";
import DarkArt from "../components/dark-art";
import {
  useActiveClaimConditionForWallet,
  useAddress,
  useClaimConditions,
  useClaimerProofs,
  useClaimIneligibilityReasons,
  useContract,
  useContractMetadata,
  useTotalCirculatingSupply,
  Web3Button,
} from "@thirdweb-dev/react";
import { BigNumber, utils } from "ethers";
import { parseIneligibility } from "../utils/parseIneligibility";
import { useMemo, useState } from "react";

// Put Your Edition Drop Contract address from the dashboard here
const myEditionDropContractAddress =
  "0x869D7aE9d5b5dB9EA379baE747A6bAE6e849aD27";

// Put your token ID here
const tokenId = 1;

const DarkMintPage: NextPage = () => {
  const onOpensea1IconClick = useCallback(() => {
    window.open("https://opensea.io/");
  }, []);

  const address = useAddress();
  const [quantity, setQuantity] = useState(1);
  const { contract: editionDrop } = useContract(myEditionDropContractAddress);
  const { data: contractMetadata } = useContractMetadata(editionDrop);

  const claimConditions = useClaimConditions(editionDrop);
  const activeClaimCondition = useActiveClaimConditionForWallet(
    editionDrop,
    address,
    tokenId
  );
  const claimerProofs = useClaimerProofs(editionDrop, address || "", tokenId);
  const claimIneligibilityReasons = useClaimIneligibilityReasons(
    editionDrop,
    {
      quantity,
      walletAddress: address || "",
    },
    tokenId
  );

  const claimedSupply = useTotalCirculatingSupply(editionDrop, tokenId);

  const totalAvailableSupply = useMemo(() => {
    try {
      return BigNumber.from(activeClaimCondition.data?.availableSupply || 0);
    } catch {
      return BigNumber.from(1_000_000);
    }
  }, [activeClaimCondition.data?.availableSupply]);

  const numberClaimed = useMemo(() => {
    return BigNumber.from(claimedSupply.data || 0).toString();
  }, [claimedSupply]);

  const numberTotal = useMemo(() => {
    const n = totalAvailableSupply.add(BigNumber.from(claimedSupply.data || 0));
    if (n.gte(1_000_000)) {
      return "";
    }
    return n.toString();
  }, [totalAvailableSupply, claimedSupply]);

  const priceToMint = useMemo(() => {
    const bnPrice = BigNumber.from(
      activeClaimCondition.data?.currencyMetadata.value || 0
    );
    return `${utils.formatUnits(
      bnPrice.mul(quantity).toString(),
      activeClaimCondition.data?.currencyMetadata.decimals || 18
    )} ${activeClaimCondition.data?.currencyMetadata.symbol}`;
  }, [
    activeClaimCondition.data?.currencyMetadata.decimals,
    activeClaimCondition.data?.currencyMetadata.symbol,
    activeClaimCondition.data?.currencyMetadata.value,
    quantity,
  ]);

  const maxClaimable = useMemo(() => {
    let bnMaxClaimable;
    try {
      bnMaxClaimable = BigNumber.from(
        activeClaimCondition.data?.maxClaimableSupply || 0
      );
    } catch (e) {
      bnMaxClaimable = BigNumber.from(1_000_000);
    }

    let perTransactionClaimable;
    try {
      perTransactionClaimable = BigNumber.from(
        activeClaimCondition.data?.maxClaimablePerWallet || 0
      );
    } catch (e) {
      perTransactionClaimable = BigNumber.from(1_000_000);
    }

    if (perTransactionClaimable.lte(bnMaxClaimable)) {
      bnMaxClaimable = perTransactionClaimable;
    }

    const snapshotClaimable = claimerProofs.data?.maxClaimable;

    if (snapshotClaimable) {
      if (snapshotClaimable === "0") {
        // allowed unlimited for the snapshot
        bnMaxClaimable = BigNumber.from(1_000_000);
      } else {
        try {
          bnMaxClaimable = BigNumber.from(snapshotClaimable);
        } catch (e) {
          // fall back to default case
        }
      }
    }

    let max;
    if (totalAvailableSupply.lt(bnMaxClaimable)) {
      max = totalAvailableSupply;
    } else {
      max = bnMaxClaimable;
    }

    if (max.gte(1_000_000)) {
      return 1_000_000;
    }
    return max.toNumber();
  }, [
    claimerProofs.data?.maxClaimable,
    totalAvailableSupply,
    activeClaimCondition.data?.maxClaimableSupply,
    activeClaimCondition.data?.maxClaimablePerWallet,
  ]);

  const isSoldOut = useMemo(() => {
    try {
      return (
        (activeClaimCondition.isSuccess &&
          BigNumber.from(activeClaimCondition.data?.availableSupply || 0).lte(
            0
          )) ||
        numberClaimed === numberTotal
      );
    } catch (e) {
      return false;
    }
  }, [
    activeClaimCondition.data?.availableSupply,
    activeClaimCondition.isSuccess,
    numberClaimed,
    numberTotal,
  ]);

  const canClaim = useMemo(() => {
    return (
      activeClaimCondition.isSuccess &&
      claimIneligibilityReasons.isSuccess &&
      claimIneligibilityReasons.data?.length === 0 &&
      !isSoldOut
    );
  }, [
    activeClaimCondition.isSuccess,
    claimIneligibilityReasons.data?.length,
    claimIneligibilityReasons.isSuccess,
    isSoldOut,
  ]);

  const isLoading = useMemo(() => {
    return (
      activeClaimCondition.isLoading || claimedSupply.isLoading || !editionDrop
    );
  }, [activeClaimCondition.isLoading, editionDrop, claimedSupply.isLoading]);

  const buttonLoading = useMemo(
    () => isLoading || claimIneligibilityReasons.isLoading,
    [claimIneligibilityReasons.isLoading, isLoading]
  );
  const buttonText = useMemo(() => {
    if (isSoldOut) {
      return "Sold Out";
    }

    if (canClaim) {
      const pricePerToken = BigNumber.from(
        activeClaimCondition.data?.currencyMetadata.value || 0
      );
      if (pricePerToken.eq(0)) {
        return "Mint (Free)";
      }
      return `Mint (${priceToMint})`;
    }
    if (claimIneligibilityReasons.data?.length) {
      return parseIneligibility(claimIneligibilityReasons.data, quantity);
    }
    if (buttonLoading) {
      return "Checking eligibility...";
    }

    return "Claiming not available";
  }, [
    isSoldOut,
    canClaim,
    claimIneligibilityReasons.data,
    buttonLoading,
    activeClaimCondition.data?.currencyMetadata.value,
    priceToMint,
    quantity,
  ]);

  return (
    <div className={styles.dark}>
      <Navbardark />
      <div className={styles.mainContainer}>
        <img className={styles.tronpngIcon} alt="" src="/tronpng@2x.png" />
        <div className={styles.mintcontetndark}>
          <div className={styles.artContainer}>
            <DarkArt />
            <div className={styles.totalMinted}>
              <p>Total Minted:</p>
              {claimedSupply ? (
                <p>
                  <b>{numberClaimed}</b>
                  {" / "}
                  {numberTotal || "∞"}
                </p>
              ) : (
                // Show loading state if we're still loading the supply
                <p>Loading...</p>
              )}
            </div>
          </div>
          <div className={styles.mintButton}>
            <div className={styles.number}>
              <button
                className={styles.buttonBlack}
                onClick={() => setQuantity(quantity - 1)}
                disabled={quantity <= 1}
              >
                <div className={styles.mint}>-</div>
              </button>
              <div className={styles.div2}>{quantity}</div>
              <button
                className={styles.buttonBlack}
                onClick={() => setQuantity(quantity + 1)}
                disabled={quantity >= maxClaimable}
              >
                <div className={styles.mint}>+</div>
              </button>
            </div>
            {isSoldOut ? (
              <div>
                <h1 className={styles.mint}>Connect Wallet</h1>
              </div>
            ) : (
              <Web3Button
                contractAddress={editionDrop?.getAddress() || ""}
                action={(cntr) => cntr.erc1155.claim(tokenId, quantity)}
                isDisabled={!canClaim || buttonLoading}
                onError={(err) => {
                  console.error(err);
                  alert("Error claiming NFTs");
                }}
                onSuccess={() => {
                  setQuantity(1);
                  alert("Successfully claimed NFTs");
                }}
              >
                {buttonLoading ? "Loading..." : buttonText}
              </Web3Button>
            )}
          </div>
        </div>
      </div>
      <img className={styles.line23} alt="" src="/line-2-2@2x.png" />
      <div className={styles.footer}>
        <div className={styles.footercontent}>
          <img
            className={styles.logoWhite2}
            alt=""
            src="/logo-white-21@2x.png"
          />
          <div className={styles.icon}>
            <div className={styles.twitter}>
              <a
                className={styles.icon1}
                href="https://twitter.com/darkandlightnft"
              >
                <img className={styles.layer2Icon} alt="" src="/layer-21.svg" />
                <img className={styles.vectorIcon} alt="" src="/vector7.svg" />
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
              <img className={styles.vectorIcon2} alt="" src="/vector8.svg" />
              <img className={styles.vectorIcon3} alt="" src="/vector3.svg" />
            </a>
          </div>
          <img className={styles.line22} alt="" src="/line-2-2@2x.png" />
        </div>
      </div>
    </div>
  );
};

export default DarkMintPage;
