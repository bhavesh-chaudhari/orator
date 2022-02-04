import Head from "next/head";
import styles from "../../styles/Activities.module.css";
import Event from "../../components/homeEvents/event/Event";
import VideoContainer from "../../components/videoContainer/VideoContainer";

const events = () => {
  return (
    <>
      <Head>
        <title>Orator | Events</title>
      </Head>
      <div className={styles["activities-page-container"]}>
        <div className={styles["activities-page-content"]}>
          <div className={styles["heading"]}>
            <h1>The sun has risen up</h1>
          </div>
          <VideoContainer></VideoContainer>
          <div className={styles["heading"]}>
            <h1>3..2...1..Mic On !</h1>
          </div>
          <div className={styles["heading"]}>
            <h1>Events</h1>
          </div>
          <div className={styles["events"]}>
            <Event hasButton={true} buttonName="Read More"></Event>
            <Event
              hasButton={true}
              buttonName="Read More"
              flexDirection="row-reverse"
            ></Event>
            <Event hasButton={true} buttonName="Read More"></Event>
            <Event
              hasButton={true}
              buttonName="Read More"
              flexDirection="row-reverse"
            ></Event>
            <Event hasButton={true} buttonName="Read More"></Event>
            <Event
              hasButton={true}
              buttonName="Read More"
              flexDirection="row-reverse"
            ></Event>
            <Event hasButton={true} buttonName="Read More"></Event>
            <Event
              hasButton={true}
              buttonName="Read More"
              flexDirection="row-reverse"
            ></Event>
          </div>
        </div>
      </div>
    </>
  );
};

export default events;
