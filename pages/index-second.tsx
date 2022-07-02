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
        <div className={styles.headerTextContainer} >
            <div>
            <Typography variant="h1" color="#F4F4F9">Flow Studios</Typography>    
            <Typography variant="overline" color="#F4F4F9">Software Development Reimagined</Typography>    

            {/* <Typography variant="h2">Software Development <br/> Reimagined</Typography>     */}
            {/* <Typography variant="overline" color="white">Dream, Build, Deliver</Typography> */}
            </div> 
        </div>

        <div className={styles.tsparticles}>
          <ParticleComponent/>  
        </div>
      </header>

      <main 
      // className={styles.main}
      >

        {/* <Stack
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

        </Stack> */}



        {/* Start */}
        <Box 
          mt={4}
          sx={{
              background: 'linear-gradient(to right, #F24236, #0197F6)',
              padding: '0.5em',
              // position: 'relative',
              mx: {
                xs: 4,
                sm: 8
              },
              display: 'flex',
              // flexGrow: 1,
              justifyContent: 'center',

              
          }}
        >

          <Grid
            container
            spacing={2}
            sx={{
              margin: 0,
              width: '100%',
              // flexGrow: 1,

              // display: 'flex',  
              // justifyContent: 'center',
              // position: 'relative', 
              // objectFit: 'contain', 
              background:  'white', 
              // overflow: 'hidden',
              // p: {
              //   xs: 5,
              //   sm: 10,
              // },
              // borderRadius: 0,
              color: "#22333B",
              height: '100%',

            }}
          >
            <Grid item sm={12} md={6}>
             
                <Box mb={8}>
                  <Typography variant="h4" sx={{mb: 2}}>Evolution</Typography> 
                  
                  <Typography color="#757575">
                    Software development is ever evolving, let us be the guiding force that helps you adapt and stay ahead of the curve.
                  </Typography>
                </Box>

                <Box>
                  <Typography variant="h4" sx={{mb: 2}}>Innovation</Typography> 
                  <Typography color="#757575">
                    We specialize in the latest web, mobile and cloud technologies, frameworks and practices to optimize performance, build lasting technology and go above and beyond in satisfying your needs.
                  </Typography>
                </Box>
            </Grid>

            <Grid 
              item
              sm={12} 
              md={6}  
              minHeight={250}
              flex={1}
            >
              <Box 
                sx={{
                  border: '1px solid',
                  height: '100%',
                  position: 'relative', 
                }}
              >
              <Image
                alt=""
                src="/static/images/undraw_launching_re_tomg.svg"
                layout="fill"
                // objectFit='cover'

              />
            </Box>
            </Grid>    
          </Grid>
        </Box>
        {/* End */}



         {/* <Stack
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

        </Stack> */}


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

    </MainLayout>
  )
}

export default Home
