import type { NextPage } from 'next'
import { useState, useEffect, useLayoutEffect } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import styles from '../styles/Home.module.css'

import { Box, Button, Divider, Grid, Stack, Typography } from '@mui/material';
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
    <MainLayout title="Home">
     
      <header className={styles.header}>
        <div className={styles.headerTextContainer} >
            <div style={{width: '600px'}}>
              
            <Image
              layout="responsive"
              src="/static/images/mainLogoWhite.png"
              alt="site logo"
              width={600}
              height={140}
            />
            {/* <Typography variant="h1" color="#F4F4F9"><b>CASCADIAN</b></Typography>    
            <Typography variant="overline" color="#F4F4F9">Custom Software Development <span style={{color: '#FBB13C'}}>Reimagined</span></Typography>     */}
            </div> 
        </div>
          <ParticleComponent />  
      </header>

      <main 
      // className={styles.main}
      >


          <Box py={20} px={4} 
            sx={{
              textAlign: 'center', 
              justifyContent: 'center', 
              display: 'flex',
              // backgroundColor: "#F4F4F9"
          }}>
            <Box sx={{maxWidth: 650}}>
              <Typography className={styles.sectionHeader} variant="h3" sx={{mb: 2, color: '#FBB13C', fontWeight: 'bold'}}>Modern Agile Development</Typography> 
              
              <Typography color="#757780" sx={{ fontWeight: 'light' }}>
                Cascadian is a boutique custom software development agency. We understand the importance of your application development and pride ourselves on delivering the products that you have been dreaming of. Our agile approach of incremental, consumable deliverables ensures that your software will be modern, meaningful, and continuously adaptable in a world of constant change.
                {/* By leveraging our agile approach you can deliver the best contemporary software to your clients. We understand that software is relient on continous releases and subject to constant change. By focusing on incremental, consumable deliverables we can guarantee that your software will be modern agile and adaptable. */}
              </Typography>
            </Box>
          </Box>

          {/* Start HERE */}
          
          <Box 
            sx={{
              // width: '100%',
              display: {md: 'flex'},
            }}>

              <Box 
                className={styles.left}
                sx={{display: 'flex', textAlign: 'center', justifyContent: 'center', alignItems: 'center'}}
              >
                
                <Box 
                  px={4}
                  sx={{
                    color: 'white', 
                    // display: 'flex', height: '100%', flexDirection: 'column', justifyContent: 'space-between'
                    }}>
                <Typography className={styles.sectionHeader} variant="h3" sx={{mb: 2, fontWeight: 'bold' }}>UNTAPPED POTENTIAL</Typography> 
                      
                <Typography sx={{ fontWeight: 'light' }}>
                  Let us help you build lasting technology that goes above and beyond in satisfying your needs.
                  {/* We specialize in the latest web, mobile and cloud technologies, frameworks and practices to optimize performance, build lasting technology and go above and beyond in satisfying your needs. */}
                </Typography>
                <Button 
                  sx={{
                    mt: 3, 
                    color:"#FBB13C", 
                    borderColor: "#FBB13C", 
                    ':hover': {
                      color: 'white',
                      borderColor: "white"
                    }
                  }} 
                  variant="outlined"
                >
                  Contact Us Now
                </Button>

                </Box>
              </Box>

              <Box 
                className={styles.right} 
                sx={{
                  marginLeft: {sm: '0', md: '140px'},
                  display: 'flex', justifyContent: 'center', alignItems: 'center'}}
              >
               
                <Box 
                // item xs={12} sm={12} md={6} 
                // px={{sm: 6, md: 8}}
                  sx={{
                    display: 'flex', justifyContent: 'flex-start', 
                  }}
                >
              
                  <Box sx={{borderLeft: '2px solid #11151c'}} px={2}>
                    <Box my={4}>
                    <Typography sx={{fontSize: {xs: '1em', sm: '1.75em'} }} color="white">WEB</Typography>
                    
                    </Box>
              
                    <Box my={4}>
                    <Typography sx={{fontSize: {xs: '1em', sm: '1.75em'} }}  color="white">MOBILE</Typography>
                    </Box>
              
                    <Box my={4}>
                    <Typography sx={{fontSize: {xs: '1em', sm: '1.75em'} }} color="white">CLOUD</Typography>
                    </Box>
                    
                    <Button 
                    sx={{
                      mt: 3, 
                      color:"#FBB13C", 
                      backgroundColor: "#11151c",
                      // borderColor: "#11151c", 
                      ':hover': {
                        color: '#11151c',
                        borderColor: "#11151c",
                      }
                    }} 
                    variant="outlined"
                  >
                    See Our Services
                  </Button>
                  </Box>

                </Box>
              </Box>

          </Box>
          
          {/* End HERE */}



          <Box 
            py={20} 
            px={2} 
            sx={{
              flexDirection: 'column', textAlign: 'center', justifyContent: 'center', display: 'flex', 
          // backgroundColor: "#F4F4F9"
          }}>
            {/* <Box> */}
              <Typography color="#757780" sx={{ fontWeight: 'light' }}>
                YOUR SOFTWARE WILL BE
              </Typography>

              <Typography className={styles.sectionHeader} sx={{my: 2, color: '#FBB13C', fontWeight: 'bold', fontSize: '2em'}}>CONTINUOUSLY ADAPTABLE</Typography> 
              
              <Typography color="#757780" sx={{ fontWeight: 'light' }}>
                IN A WORLD OF CONSTANT CHANGE
              </Typography>
            {/* </Box> */}
          </Box>





          {/* <Grid
            container
            spacing={2}
            py={16}
            px={
              {
                xs: 4,
                md: 16
              }
            }
            sx={{
              margin: 0,
              width: '100%',
              backgroundColor: "#11151C",
            }}
          >
          <Grid item xs={12} sm={12} md={6} sx={{display: 'flex', justifyContent: 'flex-start'}}>
             
            <Box sx={{borderLeft: '1px solid #F4F4F9'}} px={2}>
              <Box my={8}>
              <Typography sx={{fontSize: {xs: '1em', sm: '1.75em'} }} color="#FBB13C">WEB</Typography>
              
              </Box>
        
              <Box my={8}>
              <Typography sx={{fontSize: {xs: '1em', sm: '1.75em'} }}  color="#FBB13C">MOBILE</Typography>
              </Box>
        
              <Box my={8}>
              <Typography sx={{fontSize: {xs: '1em', sm: '1.75em'} }} color="#FBB13C">CLOUD</Typography>
              </Box>
            </Box>
         </Grid>

         <Grid 
           item
           xs={12}
           sm={12} 
           md={6}  
           minHeight={250}
           flex={1}
           sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}
         >
           
            <Box>
                <Typography className={styles.sectionHeader} color="#F4F4F9" variant="h3" sx={{mb: 2, fontWeight: 'bold' }}>UNTAPPED POTENTIAL</Typography> 
                      
                <Typography color="#F4F4F9" sx={{ fontWeight: 'light' }}>
                  Let us help you build lasting technology that goes above and beyond in satisfying your needs. Our solutions utilize the latest web, mobile, and cloud technologies to optimize performance and open new doors of possibilities.
                </Typography>

                <Button 
                  sx={{
                    mt: 3, 
                    color:"#FBB13C", 
                    borderColor: "#FBB13C", 
                    ':hover': {
                      color: '#F4F4F9',
                      borderColor: "#F4F4F9"
                    }
                  }} 
                  variant="outlined"
                >
                  Contact Us Now
                </Button>
            </Box>
         </Grid>    
       </Grid> */}
          {/* END */}

      </main>

    </MainLayout>
  )
}

export default Home
