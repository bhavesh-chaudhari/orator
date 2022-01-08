import styles from "../../styles/Hero.module.css";
import Slider from "react-slick";
import Image from "next/image";

const Hero = () => {
  const settings = {
    pauseOnHover: false,
    dots: true,
    swipeToSlide: true,
    variableWidth: true,
    adaptiveHeight: true,
    infinite: true,
    slidesToShow: 1,
    initialSlide: 0,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 8000,
    appendDots: (dots) => (
      <div>
        <ul style={{ marginTop: "0px" }}> {dots} </ul>
      </div>
    ),
  };

  const src1 = "https://wallpaperaccess.com/full/665001.jpg";
  const src2 = "https://wallpapercave.com/wp/wp6040887.png";
  const src3 =
    "https://sportshub.cbsistatic.com/i/2021/03/18/8efc04dc-59f0-47c2-8653-4ea8d3b42da5/naruto-itachi-uchiha-anime-tribute-1239755.jpg";

  return (
    <div className={styles["hero-container"]}>
      <Slider {...settings}>
        <Image
          loader={() => src1}
          width="1600px"
          height="710px"
          src={src1}
          alt="heroImage"
        />
        <Image
          loader={() => src2}
          width="1600px"
          height="710px"
          src={src2}
          alt="heroImage"
        />
        <Image
          loader={() => src3}
          width="1600px"
          height="710px"
          src={src3}
          alt="heroImage"
        />
      </Slider>
    </div>
  );
};

export default Hero;
