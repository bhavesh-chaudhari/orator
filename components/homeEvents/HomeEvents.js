import styles from "../../styles/HomeEvents.module.css";
import Event from "./event/Event";

const HomeEvents = () => {
  return (
    <div className={styles["home-events"]}>
      <div className={styles["home-events-content"]}>
        <div className={styles["heading"]}>
          <h1>Events</h1>
        </div>
        <div className={styles["events"]}>
          <Event background="#8E2DE2" buttonName="Register"></Event>
          <Event
            background="#8E2DE2"
            buttonName="Register"
            flexDirection="row-reverse"
          ></Event>
        </div>
      </div>
    </div>
  );
};

export default HomeEvents;
