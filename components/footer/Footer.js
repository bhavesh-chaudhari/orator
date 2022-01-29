import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../../styles/Footer.module.css";

const Footer = () => {
  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const [feedback, setFeedback] = useState(initialValues);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(feedback);
    fetch("/api/mail", {
      method: "post",
      body: JSON.stringify(feedback),
      
    });
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
                onChange={(e) =>
                  setFeedback({ ...feedback, name: e.target.value })
                }
                type="text"
                id="name"
              />
            </div>
            <div className={styles["user-input"]}>
              <label htmlFor="email">Email</label>
              <input
                onChange={(e) =>
                  setFeedback({ ...feedback, email: e.target.value })
                }
                type="email"
                id="email"
              />
            </div>
            <div className={styles["user-input"]}>
              <label htmlFor="message">Message</label>
              <textarea
                onChange={(e) =>
                  setFeedback({ ...feedback, message: e.target.value })
                }
                name="message"
                id="message"
              ></textarea>
            </div>
            <button>Send</button>
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
