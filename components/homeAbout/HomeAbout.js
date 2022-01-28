import Image from "next/image";
import styles from "../../styles/HomeAbout.module.css";

const HomeAbout = () => {
  return (
    <div className={styles["home-about"]}>
      <div className={styles["home-about-content"]}>
        <div className={styles["about-club"]}>
          <h2>About Club</h2>
          <p>
            We are the Orator Club, a pioneer club founded by the students of
            Indian Institute Of Information Technology, Nagpur(an institute of
            National Importance) on 28th January 2021.
          </p>
          <p>
            Our prime motto is <q>Elocution, Diction, Oration</q>. The club
            rejoices to have built a community of 300+ members taking
            particpation in its various club activites conducted throughout the
            year. As the club continues to grow, our team is dedicated to
            create an evergrowing community of orators.
          </p>
        </div>
        <div className={styles["members-image"]}>
          <div className={styles["mask"]}>
            <h3>300+</h3>
            <h3>Members</h3>
            <Image width={300} height={230} src="/images/homeAbout/members.png" alt="members" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
