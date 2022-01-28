import Image from "next/image"
import styles from "../../styles/HomeVision.module.css"

const HomeVision = () => {
    return (
      <div className={styles["vision-mission-container"]}>
        <div className={styles["vision-mission-content"]}>
          <div className={styles["events-image"]}>
            <div className={styles["mask"]}>
              <h3>5</h3>
              <h3>Events</h3>
              <Image
                width="280px"
                height="250px"
                src="/images/homeVision/events.png"
                alt="events-calendar-img"
              />
            </div>
          </div>
          <div className={styles["vision-mission-details"]}>
            <h2>Vision and Mission</h2>
            <p>
              We are on a mission of educating and creating awareness among
              people regarding various topics by organizing events, debates and
              seminars. Our aim is to not only strengthen but also to nurture
              the zeal of oratory and debating in the students.
            </p>
            <p>
              This aim of ours continuously drives us to create opportunities
              for our audience and members to maintain their interest and also
              maintain the connection of knowledge and wisdom amongst every one
              of us.
            </p>
          </div>
        </div>
      </div>
    );
}

export default HomeVision
