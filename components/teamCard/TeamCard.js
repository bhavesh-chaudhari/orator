import styles from "../../styles/TeamCard.module.css"

const TeamCard = (props) => {

    const {image, name, designation} = props
    
    return (
      <div className={styles["team-card-container"]}>
        <div className={styles["card-image"]}>
          <img src="/images/team/example.png" alt="team-member" />
        </div>
        <div className={styles["card-content"]}>
          <h2>{name}</h2>
          <h4>{designation}</h4>
        </div>
      </div>
    );
}

export default TeamCard
