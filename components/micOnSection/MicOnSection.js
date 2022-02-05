import Image from "next/image";
import styles from "../../styles/MicOnSection.module.css";

const MicOnSection = () => {
  return (
    <div className={styles["mic-on-container"]}>
      <div className={styles["content"]}>
        <div
          data-aos="fade-up"
          data-aos-duration={1000}
          className={styles["wrapper"]}
        >
          <h3>Star Speakers</h3>
          <div className={styles["participant"]}>
            <div className={styles["image"]}>
              <Image
                alt="star speaker image"
                layout="fill"
                src="/images/micOn/abhinavAnand.png"
              ></Image>
            </div>
            <p>Abhinav Anand</p>
          </div>
          <div className={styles["participant"]}>
            <div className={styles["image"]}>
              <Image
                alt="star speaker image"
                layout="fill"
                src="/images/micOn/kushagraRai.png"
              ></Image>
            </div>
            <p>Kushagra Rai</p>
          </div>
          <div className={styles["participant"]}>
            <div className={styles["image"]}>
              <Image
                alt="star speaker image"
                layout="fill"
                src="/images/micOn/himanshuRai.png"
              ></Image>
            </div>
            <p>Himanshu Rai</p>
          </div>
          <div className={styles["participant"]}>
            <div className={styles["image"]}>
              <Image
                alt="star speaker image"
                layout="fill"
                src="/images/micOn/shreeshBharadwaj.png"
              ></Image>
            </div>
            <p>Himanshu Rai</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MicOnSection;
