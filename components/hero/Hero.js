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

  return (
    <div className={styles["hero-container"]}>
      <Slider {...settings}>
        <Image
          width="1600px"
          height="710px"
          src="/images/hero/hero2.png"
          alt="heroImage"
        />
        <Image
          width="1600px"
          height="710px"
          src="/images/hero/hero1.png"
          alt="heroImage"
        />
      </Slider>
    </div>
  );
};

export default Hero;
