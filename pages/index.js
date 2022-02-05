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
            content="We are the Orator Club, a pioneer club founded by the students of Indian Institute Of Information Technology, Nagpur(an institute of National Importance) on 28th January 2021. Our prime motto is Elocution, Diction, Oration."
          />
          <meta
            name="keywords"
            content="Orator, IIITN, Orator Club, Debate Club of IIITN, Orator Talk, Debate Club, IIIT Nagpur"
          />
          <meta name="robots" content="index, follow" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="language" content="English"></meta>
          <meta
            property="og:image"
            content="https://github.com/bhavesh-chaudhari/orator/blob/main/public/images/navbar/logo.png?raw=true"
          ></meta>
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
