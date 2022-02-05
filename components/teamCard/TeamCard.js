import React, { useState, useRef } from "react";
import Image from "next/image";
import styles from "../../styles/TeamCard.module.css";
import { useEffect } from "react";

const TeamCard = (props) => {
  const {
    imagePath,
    name,
    designation,
    email,
    linkedinLink,
    instagramLink,
    twitterLink,
    githubLink,
  } = props;

  const [flip, setFlip] = useState(false);
  const card = useRef(null);

  // if (typeof window !== "undefined") {
  //   const isMobile = window.matchMedia("(max-width: 600px)");
  // }

  useEffect(() => {
    if (flip) {
      card.current.style.transform = "rotateY(180deg)";
    }
    if (!flip && window.matchMedia("(max-width: 600px)").matches) {
      card.current.style.transform = "none";
    }
  }, [flip]);

  return (
    <div
      onClick={
        typeof window !== "undefined" &&
        window.matchMedia("(max-width: 600px)").matches
          ? () => setFlip(!flip)
          : null
      }
      className={styles["team-card-container"]}
    >
      <div
        ref={card}
        onMouseOver={() => console.log("hovering")}
        className={styles["card"]}
      >
        <div className={styles["front"]}>
          <div className={styles["card-image"]}>
            <Image
              width={180}
              height={180}
              src={imagePath}
              alt={`${name}'s image`}
            />
          </div>
          <div className={styles["card-content"]}>
            <h2>{name}</h2>
            <h4>{designation}</h4>
          </div>
        </div>
        <div className={styles["back"]}>
          <h2>{name}</h2>
          <h4>{designation}</h4>
          <div className={styles["contact"]}>
            <a href={`mailto:${email}`}>{email}</a>
            <div className={styles["links"]}>
              {linkedinLink ? (
                <a rel="noreferrer" target="_blank" href={linkedinLink}>
                  <Image
                    src="/logos/linkedinLogo.png"
                    width={30}
                    height={30}
                    alt="Linkedin Logo"
                  ></Image>
                </a>
              ) : null}
              {instagramLink ? (
                <a rel="noreferrer" target="_blank" href={instagramLink}>
                  <Image
                    src="/logos/instagramLogo.png"
                    width={30}
                    height={30}
                    alt="Instagram Logo"
                  ></Image>
                </a>
              ) : null}
              {twitterLink ? (
                <a rel="noreferrer" target="_blank" href={twitterLink}>
                  <Image
                    src="/logos/twitterLogo.png"
                    width={30}
                    height={30}
                    alt="Linkedin Logo"
                  ></Image>
                </a>
              ) : null}
              {githubLink ? (
                <a
                  rel="noreferrer"
                  target="_blank"
                  className={styles["github-logo"]}
                  href={githubLink}
                >
                  <Image
                    src="/logos/githubLogo.svg"
                    width={30}
                    height={30}
                    alt="Github Logo"
                  ></Image>
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
