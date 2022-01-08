import styles from "../../styles/HomeAbout.module.css";

const HomeAbout = () => {
  return (
    <div className={styles["home-about"]}>
      <div className={styles["home-about-content"]}>
        <div className={styles["about-club"]}>
          <h2>About Club</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
        </div>
        <div className={styles["members-image"]}>
          <div className={styles["mask"]}>
            <h3>300+</h3>
            <h3>Members</h3>
            <img src="images/homeAbout/members.png" alt="members" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
