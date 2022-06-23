import type { NextPage } from 'next'
import { useState, useEffect, useLayoutEffect } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import styles from '../styles/Home.module.css'

import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import ParticleComponent from '../components/ParticleComponent';
  
import WebAssetIcon from '@mui/icons-material/WebAsset';
import MobileScreenShareIcon from '@mui/icons-material/MobileScreenShare';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';

import ReactTextTransition, { presets } from "react-text-transition";
import { height, width } from '@mui/system';

import MainLayout from '../Layouts/MainLayout';



const Home: NextPage = () => {

  const texts = ["Engineering", "Designing", "Advising", "Delivering"];
  const [ textIndex, setTextIndex ] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex(textIndex + 1);

    }, 1200);
    return () => clearInterval(interval);

  }, [textIndex]);

  return (
    <MainLayout title="Tecnical">
     
      <header className={styles.header}>
        <div 
          className={styles.headerTextContainer}  
          style={{

        }}>
           
            <Typography variant="h2">Software Development <br/> Reimagined</Typography>     
        </div>

        <div className={styles.tsparticles}>
          <ParticleComponent/>  
        </div>
      </header>

      <main className={styles.main}>

        <Stack
          direction="row" 
          spacing={3} 
          sx={{
            width: '80%',
            justifyContent: 'space-around',
            color: '#22333B',
            my: 8,
          }}
        >
          <Box sx={{textAlign: 'center'}}>
              <WebAssetIcon sx={{fontSize: 72}}/>
              <Typography>Web</Typography>
          </Box>
          <Box sx={{textAlign: 'center'}}>
            <MobileScreenShareIcon sx={{fontSize: 72 }}/>
            <Typography>Mobile</Typography>
          </Box>
          <Box sx={{textAlign: 'center'}}>
            <CloudQueueIcon sx={{fontSize: 72 }}/>
            <Typography>Cloud</Typography>
          </Box>

        </Stack>



        {/* Start */}
        <Box 
          sx={{
              background: 'linear-gradient(to right, #F24236, #0197F6)',
              padding: '0.5em',
              position: 'relative',
              mx: '4em'
          }}
        >
          <Grid
            container
            sx={{
              display: 'flex',  
              position: 'relative', 
              objectFit: 'contain', 
              background:  'white', 
              p: {
                xs: 5,
                sm: 10,
              },
              borderRadius: 0,
              color: "#22333B",
              width:"100%",
              height: '100%'
            }}
          >

            <Grid item xs={12} sm={6}>
              <Box mb={8}>
                <Typography variant="h4" sx={{mb: 2}}>Evolution</Typography> 
                
                <Typography>
                  Software development is ever evolving, let us be the guiding force that helps you adapt and stay ahead of the curve.
                </Typography>
              </Box>

              <Box>
                <Typography variant="h4" sx={{mb: 2}}>Innovation</Typography> 
                <Typography>
                  We specialize in the latest web, mobile and cloud technologies, frameworks and practices to optimize performance, build lasting technology and go above and beyond in satisfying your needs.
                </Typography>
              </Box>
            </Grid>

            <Grid 
              item
              xs={12} 
              sm={6}              
              sx={{
                position: 'relative', 
                objectFit: 'contain',
              }}
            >
      
              <Image
                alt=""
                src="/static/images/undraw_launching_re_tomg.svg"
                layout="fill"
              />
        
            </Grid>    
          </Grid>
        </Box>
        {/* End */}


        {/* Start */}

        <Grid
          container
          my={{
            xs: 4,
            sm: 8,
            md: 16,
          }} 
          px={2}
          sx={{
            display:"flex",
            justifyContent:"center",
            alignItems:'center',
            width:"100%",
            // border: '1px solid red'
          }}
        >
        <Grid item
          xs={12} sm={6} 
          height="400px"
          sx={{
            position: 'relative',
            objectFit: 'contain',
            // border: '1px solid red',
          }}
        >
          <Image
            alt=""
            src="/static/images/undraw_web_devices_re_m8sc.svg"
            layout="fill"
          />
        </Grid>

   
        <Grid 
          item  
          xs={12}  sm={6}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            // border: '1px solid red'
          }}
        >
          <Box
            sx={{
              background: 'linear-gradient(0deg, rgba(10,9,8,1) 11%, rgba(34,51,59,1) 100%)', //'linear-gradient(white, 1%, #22333B, 70%, #0A0908)',
              height: {
                xs: '250px',
                sm: '300px',
              },
              width: {
                xs: '250px',
                sm: '300px'
              },
              borderRadius: '50%',
              display: 'flex',
              // p:20,
              justifyContent: 'center',
              alignItems: 'center',
              color: '#F2F4F3',
              flexDirection: 'column',
            }}
          >
            <Box sx={{width: '50%'}}>
            <Typography variant="h5">
              <ReactTextTransition
                text={texts[textIndex % texts.length]}
                springConfig={presets.gentle}
                // style={{ with: "100%", background: 'red' }}
                // inline
              />
            </Typography>
            <Typography variant="h5">
              Optimized
            </Typography>
            <Typography variant="h5">
              Solutions
            </Typography>
            </Box>
            <Button>Connect With Us</Button>
          </Box>
        </Grid>

      
      </Grid> 
        {/* End */}

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
    </MainLayout>
  )
}

export default Home
