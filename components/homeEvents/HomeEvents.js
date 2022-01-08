import styles from "../../styles/HomeEvents.module.css"
import Event from "./event/Event"

const HomeEvents = () => {
    return (
      <div className={styles["home-events"]}>
        <div className={styles["home-events-content"]}>
          <div className={styles["heading"]}>
            <h1>Events</h1>
          </div>
          <div>
            <Event buttonName="Register" ></Event>
            <Event pb="8rem" borderBottomLeftRadius="100px" buttonName="Register" flexDirection="row-reverse" ></Event>
          </div>
        </div>
      </div>
    );
}

export default HomeEvents
