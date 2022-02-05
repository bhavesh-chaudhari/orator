import Head from "next/head";
import styles from "../../styles/Team.module.css";
import TeamCard from "../../components/teamCard/TeamCard";

import teamData from "../../components/teamCard/teamData";

const team = () => {
  return (
    <>
      <Head>
        <title>Orator | Team</title>
      </Head>
      <div className={styles["team-container"]}>
        <div className={styles["heading"]}>
          <h1>Our Team</h1>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration={500}
          className={styles["team-cards"]}
        >
          {teamData.map((member) => {
            return <TeamCard key={member.id} {...member}></TeamCard>;
          })}
        </div>
      </div>
    </>
  );
};

export default team;
