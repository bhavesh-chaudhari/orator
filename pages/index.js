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
