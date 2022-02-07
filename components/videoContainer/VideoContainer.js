// import React, {useState, useRef, useEffect} from 'react';
import styles from "../../styles/VideoContainer.module.css";

const VideoContainer = () => {

  // const [loading, setLoading] = useState()
  // const iframeRef = useRef(null)
  // const iframeDoc = iframeRef.current?.contentDocument;

  // console.log(iframeDoc)

  // useEffect(()=>{
  //   if (iframeDoc?.readyState == "complete") {
  //     //iframe.contentWindow.alert("Hello");
  //     iframeRef.current.contentWindow.onload = function () {
  //       alert("I am loaded");
  //     };
  //     // The loading is complete, call the function we want executed once the iframe is loaded
  //     afterLoading();
  //     return;
  //   } 
  // }, [])
  
 return (
    <div
      data-aos="fade-up"
      data-aos-duration={500}
      className={styles["video-container"]}
    >
      <div className={styles["video"]}>
        <iframe
          // ref={iframeRef}
          width="1519"
          height="570"
          src="https://www.youtube.com/embed/DcDESTanUGM"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className={styles["details"]}>
        <p>
          We, at Orator Club, are pleased to announce that on 28th January 2022
          we have completed exactly one year since the inception of the Orator
          Club. The journey we&apos;ve had has been quite an oxymoron, i.e.,
          it&apos;s been a short journey, yet at the same time, we&apos;ve come
          a long way from where we were on Day 1.
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
