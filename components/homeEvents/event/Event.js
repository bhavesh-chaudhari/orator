import Image from "next/image";
import styles from "../../../styles/HomeEvent.module.css";

const Event = (props) => {
  const { flexDirection, buttonName, background, hasButton, src, eventName, eventDetails } = props;

  return (
    <div
      style={{
        flexDirection: flexDirection,
        background: background,
      }}
      className={styles["home-event"]}
    >
      <div className={styles["event-desc"]}>
        <h2>{eventName}</h2>
        <p>
          {eventDetails}
        </p>
        {hasButton ? <button>{buttonName}</button> : null}
      </div>
      <div className={styles["event-image"]}>
        <div data-aos="fade-in" data-aos-duration={1000} data-aos-once={true} className={styles["image"]}>
          {
            src ? <Image layout="fill" alt="Event Image" src={src} >

          </Image> : null
          }
        </div>
      </div>
    </div>
  );
};

export default Event;
