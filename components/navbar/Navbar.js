import React, {useState} from "react";
import Image from "next/image"
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../styles/Navbar.module.css"

const Navbar = () => {

    const [show, setShow] = useState(false)

    const router = useRouter()
    
    return (
      <div className={styles["navbar-container"]}>
        <nav className={styles["navbar"]}>
          <div className={styles["nav-logo"]}>
            <Image src="/images/navbar/logo.png" width={50} height={50}></Image>
          </div>
          <div
            onClick={() => setShow((prevState) => !prevState)}
            className={
              show
                ? `${styles["hamburger-btn"]} ${styles["open"]}`
                : styles["hamburger-btn"]
            }
          >
            <div className={styles["hamburger"]}></div>
          </div>
          <div
            className={
              show
                ? styles["nav-links"]
                : `${styles["nav-links"]} ${styles["hide"]}`
            }
          >
            <ul>
              <li className={styles["menu-title"]}>Menu</li>
              <li
                className={router.pathname == "/" ? styles["active"] : ""}
              >
                <Link href="/">Home</Link>
              </li>
              <li
                className={router.pathname == "/events" ? styles["active"] : ""}
              >
                <Link href="/events">Events</Link>
              </li>
              <li
                className={router.pathname == "/team" ? styles["active"] : ""}
              >
                <Link href="/team">Team</Link>
              </li>
              <li
                className={router.pathname == "/blogs" ? styles["active"] : ""}
              >
                <Link href="/blogs">Blog</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
}

export default Navbar
