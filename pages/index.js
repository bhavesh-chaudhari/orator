import Head from "next/head"
import styles from "../styles/Home.module.css"
import Hero from "../components/hero/Hero"
import HomeEvents from "../components/homeEvents/HomeEvents"
import HomeAbout from "../components/homeAbout/HomeAbout"
import HomeVision from "../components/homeVision/HomeVision"

const Home = () => {
    return (
      <div className={styles["home-container"]}>
        <Head>
          <title>Orator | IIITN</title>
          <meta name="title" content="Orator | IIITN"></meta>
          <meta
            name="description"
            content="We are the Orator Club, a pioneer club founded by the students of Indian Institute Of Information Technology, Nagpur(an institute of National Importance) on 28th January 2021. Our prime motto is Elocution, Diction, Oration. We are on a mission of educating and creating awareness among people regarding various topics by organizing events, debates and seminars. Our aim is to not only strengthen but also to nurture the zeal of oratory and debating in the students."
          />
          <meta
            name="keywords"
            content="Orator, IIITN, Orator Club, Debate Club of IIITN, Orator Talk, Debate Club, IIIT Nagpur, Orator Events"
          />
          <meta name="robots" content="index, follow" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="language" content="English"></meta>
          <meta
            property="og:image"
            content="https://github.com/bhavesh-chaudhari/orator/blob/main/public/images/navbar/logo.png?raw=true"
          ></meta>
          <meta
            name="google-site-verification"
            content="JDXcwG5v5EZWW9sWAe6KbNv_RnVh3xd-Heqoc1g852U"
          />
        </Head>
        <div>
          <Hero></Hero>
          <HomeEvents></HomeEvents>
          <HomeAbout></HomeAbout>
          <HomeVision></HomeVision>
        </div>
      </div>
    );
}

export default Home
