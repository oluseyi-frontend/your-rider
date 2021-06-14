import YourRiderContext from "../components/context";
import "../styles/globals.css";
import Layout from "./../components/Layout";
import styles from "./../styles/home/Banner.module.css";

function MyApp({ Component, pageProps }) {
  return (
    <YourRiderContext>
      <Layout className={styles.layout}>
        <Component {...pageProps} />
      </Layout>
    </YourRiderContext>
  );
}

export default MyApp;
