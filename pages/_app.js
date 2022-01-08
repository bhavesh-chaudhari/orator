import Layout from '../components/layout/Layout'
import '../styles/globals.css'
import { AppProvider } from '../context/appContext';

function MyApp({ Component, pageProps }) {

  return (
    <AppProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppProvider>
  );
}

export default MyApp
