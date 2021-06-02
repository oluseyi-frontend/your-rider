import '../styles/globals.css'
import Layout from './../components/Layout';
import styles from './../styles/home/Banner.module.css'


function MyApp({ Component, pageProps }) {
  return (
    <Layout className={styles.layout}>
      <Component {...pageProps} />
    </Layout>
  );
  
 
}

export default MyApp
