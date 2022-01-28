import Image from "next/image";
import styles from "../../styles/TeamCard.module.css"

const TeamCard = (props) => {

    const {image, name, designation} = props
    
    return (
      <div className={styles["team-card-container"]}>
        <div className={styles["card"]}>
          <div className={styles["front"]}>
            <div className={styles["card-image"]}>
              <Image width={180} height={180} src="/images/team/example.png" alt="team-member" />
            </div>
            <div className={styles["card-content"]}>
              <h2>{name}</h2>
              <h4>{designation}</h4>
            </div>
          </div>
          <div className={styles["back"]}>
            <h2>{name}</h2>
            <h4>{designation}</h4>
            <div className={styles["contact"]}>
              <p>email@gmail.com</p>
              <div className={styles["links"]}>

              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default TeamCard
