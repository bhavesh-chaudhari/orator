import styles from "../../styles/Hero.module.css";
import Slider from "react-slick";

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
    autoplaySpeed: 3000,
    appendDots: (dots) => (
      <div>
        <ul style={{ marginTop: "0px" }}> {dots} </ul>
      </div>
    ),
  };

  return (
    <div className={styles["hero-container"]}>
      <Slider {...settings}>
        <img src="/images/hero/hero.png" alt="heroImage" />
        <img
          src="https://i.pinimg.com/736x/c7/a0/4a/c7a04a031ed8341798792dde36ff47e2.jpg"
          alt="heroImage"
        />
        <img
          src="https://i.pinimg.com/originals/aa/2e/01/aa2e019132448add35ae4405e9411e85.png"
          alt="heroImage"
        />
      </Slider>
    </div>
  );
};

export default Hero;
