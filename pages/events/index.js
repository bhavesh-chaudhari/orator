import Head from "next/head";
import styles from "../../styles/Events.module.css"
import Event from "../../components/homeEvents/event/Event"

const events = () => {
    return (
      <>
        <Head>
          <title>Orator | Events</title>
        </Head>
        <div className={styles["events-page-container"]}>
          <div className={styles["events-page-content"]}>
            <div className={styles["heading"]}>
              <h1>Events</h1>
            </div>
            <div className={styles["events"]}>
              <Event buttonName="Read More"></Event>
              <Event buttonName="Read More" flexDirection="row-reverse"></Event>
              <Event buttonName="Read More"></Event>
              <Event buttonName="Read More" flexDirection="row-reverse"></Event>
              <Event buttonName="Read More"></Event>
              <Event buttonName="Read More" flexDirection="row-reverse"></Event>
              <Event buttonName="Read More"></Event>
              <Event buttonName="Read More" flexDirection="row-reverse"></Event>
            </div>
          </div>
        </div>
      </>
    );
}

export default events
