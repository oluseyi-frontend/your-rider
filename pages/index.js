import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import LpSection2 from '../components/LPsection2'
import LpSection3 from '../components/LPsection3'
import LpSection4 from '../components/LPsection4'
import LpSection5 from '../components/LPsection5'
import styles from '../styles/Home.module.css'
import "@fontsource/roboto";
import { useEffect, useContext } from "react";
import { DataCentral } from './../components/context';


export default function Home() {
       const {open, setOpen, handleAsideOpen} = useContext(DataCentral)



 useEffect(() => {
   setOpen(false)

  }, [])
  return (
    <div className={styles.container}>
      <Head>
        <title>Your Rider</title>
        <meta
          name="description"
          content=" the cheapest & most reliable way to get your package there"
        />
        <link rel="icon" href="./logo 2 2 (1).svg" />
      </Head>

      <Banner />
      <LpSection2 />
      <LpSection3 />
      <LpSection4 />
      <LpSection5 />
      <footer className={styles.footer}></footer>
    </div>
  );
}
