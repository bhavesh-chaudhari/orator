import styles from "../../../styles/HomeEvent.module.css";

const Event = (props) => {
  const { flexDirection, buttonName, borderBottomLeftRadius, pb, background } = props;

  return (
    <div
      style={{
        flexDirection: flexDirection,
        borderBottomLeftRadius: borderBottomLeftRadius,
        paddingBottom: pb,
        background: background
      }}
      className={styles["home-event"]}
    >
      <div className={styles["event-desc"]}>
        <h2>Event Name</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.Lorem Ipsum has been the industry's standard dummy
          text ever since the 1500s.
        </p>
        <button>{buttonName}</button>
      </div>
      <div className={styles["event-image"]}></div>
    </div>
  );
};

export default Event;
