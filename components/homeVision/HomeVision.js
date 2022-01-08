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
                width="300px"
                height="300px"
                src="/images/homeVision/events.png"
                alt="events-calendar-img"
              />
            </div>
          </div>
          <div className={styles["vision-mission-details"]}>
            <h2>Vision and Mission</h2>
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
        </div>
      </div>
    );
}

export default HomeVision
