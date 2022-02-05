import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Layout from "../components/layout/Layout";
import "../styles/globals.css";
import { AppProvider } from "../context/appContext";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      disable: function () {
        return /bot|googlebot|crawler|spider|robot|crawling/i.test(
          navigator.userAgent
        );
      },
    });
  }, []);

  return (
    <AppProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppProvider>
  );
}

export default MyApp;
