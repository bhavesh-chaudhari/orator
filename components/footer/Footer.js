import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../../styles/Footer.module.css";
import { css } from "@emotion/react";
import { PulseLoader } from "react-spinners";

const Footer = () => {
  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const [feedback, setFeedback] = useState(initialValues);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateEmail = (someEmail) => {
    return String(someEmail)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (
      validateEmail(feedback.email) &&
      feedback.name != "" &&
      feedback.message != ""
    ) {
      fetch("/api/mail", {
        method: "post",
        body: JSON.stringify(feedback),
      })
        .then((res) => {
          if(res.status === 200){
            console.log(res);
            console.log("message sent")
            setIsLoading(false);
            setIsSuccess(true);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.log("message not valid");
      setIsLoading(false);
    }

    setFeedback("");
  };

  return (
    <div className={styles["footer-container"]}>
      <div className={styles["footer-content"]}>
        <div className={styles["footer-form"]}>
          <h2>Contact Us:</h2>
          <form onSubmit={handleSubmit}>
            <div className={styles["user-input"]}>
              <label htmlFor="name">Name</label>
              <input
                autoComplete="off"
                onChange={(e) =>
                  setFeedback({ ...feedback, name: e.target.value })
                }
                type="text"
                id="name"
                spellCheck={false}
              />
            </div>
            <div className={styles["user-input"]}>
              <label htmlFor="email">Email</label>
              <input
                autoComplete="off"
                onChange={(e) =>
                  setFeedback({ ...feedback, email: e.target.value })
                }
                type="email"
                id="email"
                spellCheck={false}
              />
            </div>
            <div className={styles["user-input"]}>
              <label htmlFor="message">Message</label>
              <textarea
                autoComplete="off"
                onChange={(e) =>
                  setFeedback({ ...feedback, message: e.target.value })
                }
                name="message"
                id="message"
                spellCheck={false}
              ></textarea>
            </div>
            <button
              className={
                validateEmail(feedback.email) &&
                feedback.name != "" &&
                feedback.message != ""
                  ? styles["btn"]
                  : `${styles["btn"]} ${styles["muted"]}`
              }
              disabled={isSuccess ? true : false}
            >
              {isLoading ? (
                <PulseLoader color="#6c16e1" size={8}></PulseLoader>
              ) : (
                <>
                  {isSuccess ? (
                    <>
                      Sent&nbsp;
                      <span
                        style={{
                          fontSize: "20px",
                          color: "#6c16e1",
                          marginBottom: "3px",
                        }}
                      >
                        &#10003;
                      </span>
                    </>
                  ) : (
                    <>Send</>
                  )}
                </>
              )}
            </button>
          </form>
        </div>
        <div className={styles["vertical-line"]}></div>
        <div className={styles["footer-links"]}>
          <h2>Connect with us:</h2>
          <div className={styles["link"]}>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/orator_club_iiitn/"
            >
              <Image
                src="/logos/instagramLogo.png"
                width={30}
                height={30}
                alt="Instagram Logo"
              ></Image>
              <span>Follow us on instagram</span>
            </a>
          </div>
          <div className={styles["link"]}>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/company/orator-club-iiitn/"
            >
              <Image
                src="/logos/linkedinLogo.png"
                width={30}
                height={30}
                alt="Linkedin Logo"
              ></Image>
              <span>Connect us on LinkedIn</span>
            </a>
          </div>
          <div className={styles["link"]}>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/club_orator"
            >
              <Image
                src="/logos/twitterLogo.png"
                width={30}
                height={30}
                alt="Twitter Logo"
              ></Image>
              <span>Follow us on Twitter</span>
            </a>
          </div>
          <div className={styles["link"]}>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.youtube.com/channel/UCKFC9VMpQlE6GcM7zz51MYg"
            >
              <Image
                src="/logos/youtubeLogo.png"
                width={30}
                height={30}
                alt="Youtube Logo"
              ></Image>
              <span>Subscribe us on YouTube</span>
            </a>
          </div>
          <div className={styles["link"]}>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://discord.gg/m7fCdSNx"
            >
              <Image
                src="/logos/discordLogo.png"
                width={30}
                height={30}
                alt="Discord Logo"
              ></Image>
              <span>Join our Discord</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
