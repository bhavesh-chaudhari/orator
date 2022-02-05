import ReactPlayer from "react-player/youtube";
import styles from "../../styles/VideoContainer.module.css";

const VideoContainer = () => {
  return (
    <div className={styles["video-container"]}>
      <div className={styles["video"]}>
        <ReactPlayer
          width="100%"
          height="100%"
          color="blue"
          controls={true}
          url="https://www.youtube.com/watch?v=DcDESTanUGM"
          config={{
            youtube: {
              playerVars: { color: "white", modestbranding: 1 },
            },
          }}
        />
      </div>
      <div className={styles["details"]}>
        <p>
          We, at Orator Club, are pleased to announce that on 28th January 2022
          we have completed exactly one year since the inception of the Orator
          Club. The journey we've had has been quite an oxymoron, i.e., it's
          been a short journey, yet at the same time, we've come a long way from
          where we were on Day 1.
        </p>
        <p>
          We are grateful to thank all who are associated with us. Our desire to
          progress together in the future voyages we hope to sail on will be
          supported. In the end, we would once again like to thank all for their
          support. Next year we aim to achieve many more daunting feats. So on,
          and so forth!
        </p>
      </div>
    </div>
  );
};

export default VideoContainer;
