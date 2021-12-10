import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Particles from "react-tsparticles";
import { Typography } from '@mui/material';
import ParticleComponent from '../components/ParticleComponent';

import { motion, useViewportScroll, useTransform, Variants} from "framer-motion";
  


const Home: NextPage = () => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 4]);


  const cardVariants: Variants = {
    offscreen: {
      y: 300,
    },
    onscreen: {
      y: 10,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    },
  };


  
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
      
      <header className={styles.heroContainer}>
        <nav className={styles.nav}>
          <h3><em>Tech Development Studios</em></h3>
          <div style={{display: 'flex'}}>
          <p className={styles.navItem}>Connect</p>
          <p className={styles.navItem}>About Us</p>
          </div>
        </nav>
      
        <div className={styles.headerTextContainer}>
          <Typography className={styles.headerText} variant="h2">Software Development <br/> Reimagined</Typography>
        </div>
  
        <ParticleComponent/>  

      </header>

      <main className={styles.main}>
        {/* <div className={styles.wrapper}> */}
      {/* hello */}
          <motion.div
          initial="offscreen"
          whileInView="onscreen"
          exit="offscreen"
          className={styles.wrapper}
          // viewport={{nce: true, amount: 0.8 }}
        >
  
          <motion.div 
            className={styles.card}

            variants={cardVariants}
          >
          <h3>Connetion</h3> 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.
          </motion.div>

          <motion.div 
            className={styles.card}
            variants={cardVariants}
          > 
          <h3>Innovation</h3> 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
          </motion.div>
        </motion.div>

  
        {/* </div> */}


        {/* <div style={{height: '5000px', background: 'red' }}></div> */}
      </main>

    

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
