import Head from "next/head"
import styles from "../../styles/EventDetail.module.css"

const eventDetail = () => {
    return (
      <>
      <Head>
          <title>Orator | Event Detail</title>
      </Head>
        <div>
          <h1 className={styles["yellow-text"]}>Event Detail</h1>
        </div>
      </>
    );
}

export default eventDetail
