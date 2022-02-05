import Head from "next/head";
import styles from "../../styles/Activities.module.css";
import Event from "../../components/homeEvents/event/Event";
import VideoContainer from "../../components/videoContainer/VideoContainer";
import MicOnSection from "../../components/micOnSection/MicOnSection";
import allEventsData from "../../components/homeEvents/allEventsData";

const events = () => {
  return (
    <>
      <Head>
        <title>Orator | Events</title>
      </Head>
      <div className={styles["activities-page-container"]}>
        <div className={styles["activities-page-content"]}>
          <div className={styles["page-header"]}>
            <h1>Activities</h1>
          </div>
          <div className={styles["heading"]}>
            <h1>The sun has risen up</h1>
          </div>
          <VideoContainer></VideoContainer>
          <div className={styles["heading"]}>
            <h1>Orator Talks</h1>
          </div>
          <div className={styles["events"]}>
            {allEventsData.map((event) => {
              return <Event key={event.id} {...event}></Event>;
            })}
          </div>
          <div className={styles["heading"]}>
            <h1>3..2..1.. Mic On !</h1>
          </div>
          <MicOnSection></MicOnSection>
        </div>
      </div>
    </>
  );
};

export default events;
