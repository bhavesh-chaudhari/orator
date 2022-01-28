import styles from "../../../styles/HomeEvent.module.css";

const Event = (props) => {
  const { flexDirection, buttonName, background, hasButton } = props;

  return (
    <div
      style={{
        flexDirection: flexDirection,
        background: background
      }}
      className={styles["home-event"]}
    >
      <div className={styles["event-desc"]}>
        <h2>Event Name</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever
          since the 1500s.Lorem Ipsum has been the industry&apos;s standard dummy
          text ever since the 1500s.
        </p>
        {
          hasButton ? <button>{buttonName}</button> : null
        }
      </div>
      <div className={styles["event-image"]}></div>
    </div>
  );
};

export default Event;
