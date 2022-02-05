import styles from "../../styles/HomeEvents.module.css";
import Event from "./event/Event";
import homeEvents from "./homeEventsData";

const HomeEvents = () => {
  return (
    <div className={styles["home-events"]}>
      <div className={styles["home-events-content"]}>
        <div className={styles["heading"]}>
          <h1>Events</h1>
        </div>
        <div className={styles["events"]}>
          {
            homeEvents.map(event=>{
              return <Event key={event.id} {...event} ></Event>
            })
          }
        </div>
      </div>
    </div>
  );
};

export default HomeEvents;
