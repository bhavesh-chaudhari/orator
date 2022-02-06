import Head from "next/head";
import styles from "../../styles/Team.module.css";
import TeamCard from "../../components/teamCard/TeamCard";

import teamData from "../../components/teamCard/teamData";

const team = () => {
  return (
    <>
      <Head>
        <title>Orator | Team</title>
        <meta name="title" content="Orator | Team"></meta>
        <meta
          name="description"
          content="We are the Orator Club, a pioneer club founded by the students of Indian Institute Of Information Technology, Nagpur(an institute of National Importance) on 28th January 2021. Our prime motto is Elocution, Diction, Oration. As the club continues to grow, our team is dedicated to create an evergrowing community of orators."
        />
        <meta
          name="keywords"
          content="Orator Team, Orator Events, IIITN, Orator Club, Debate Club of IIITN, Orator Talk, Debate Club, IIIT Nagpur"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English"></meta>
        <meta
          property="og:image"
          content="https://github.com/bhavesh-chaudhari/orator/blob/main/public/images/navbar/logo.png?raw=true"
        ></meta>
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
