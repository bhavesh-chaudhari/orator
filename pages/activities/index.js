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
        <meta name="title" content="Orator | Activities"></meta>
        <meta
          name="description"
          content="We are the Orator Club, a pioneer club founded by the students of Indian Institute Of Information Technology, Nagpur(an institute of National Importance) on 28th January 2021. Our prime motto is Elocution, Diction, Oration. As the club continues to grow, our team is dedicated to create an evergrowing community of orators."
        />
        <meta
          name="keywords"
          content="Orator Team Activities, IIITN, Orator Club, Debate Club of IIITN, Orator Talk, Debate Club, IIIT Nagpur, Orator Events"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English"></meta>
        <meta
          property="og:image"
          content="https://github.com/bhavesh-chaudhari/orator/blob/main/public/images/navbar/logo.png?raw=true"
        ></meta>
      </Head>
      <div className={styles["activities-page-container"]}>
        <div className={styles["activities-page-content"]}>
          <div
            data-aos="zoom-in"
            data-aos-duration={500}
            className={styles["page-header"]}
          >
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
