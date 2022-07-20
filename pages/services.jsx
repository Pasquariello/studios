import { useState } from 'react';
import { Box, Button, Card, CardActions, CardContent, Collapse, Divider, IconButton, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import MainLayout from '../Layouts/MainLayout';
import styles from '../styles/Services.module.css';
import ParticleComponent from '../components/ParticleComponent';

import ContactForm from '../components/ContactForm';


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

const Services = () => {

    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    return (
        <MainLayout title="Services">
            <header
                style={{
                     display: 'flex', justifyContent: 'center'}}
            >
                <div 
                    style={{ padding: "80px 20px", maxWidth: '700px'}}
                    className={styles.headerTextContainer} 
                >
               

                        <Typography 
                            mb={4}
                            variant="h2"
                            color="#F4F4F9"
                        >
                            Animating Your Vision
                        </Typography>
                        

                        <Typography
                            color="#F4F4F9"
                            variant="body2"
                            gutterBottom
                            
                        >
                            We build <span style={{color: '#FBB13C'}}>custom software</span> to super charge your success, validate your vision and innovate the technology your compnay relies on. 
                        </Typography> 
                     
                </div>
                <div className={styles.tsparticles} style={{overflow: 'hidden'}}>
                <ParticleComponent height="100vh"/>  
                </div>
            </header>

            <Box py={10} px={4} sx={{backgroundColor: "#F4F4F9"}}>
                    <div style={{textAlign: 'center', marginBottom: 36}}>
                        <Typography variant="h4" >Core Services</Typography>
                    </div>

                    <Stack display="flex" justifyContent="center" mb={'36px'} direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                    <Card sx={{  maxWidth: 375, border: 'none' }}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Web
                            </Typography>
        
                            <Typography variant="body2" color="text.secondary">
                                We use the latest technologies combined with a human-centric approach to build efficient, and future-proof web applications 
                            </Typography>
                        </CardContent>

                    </Card>

                    <Card sx={{  maxWidth: 375  }}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Mobile
                            </Typography>
        
                            <Typography variant="body2" color="text.secondary">
                                Whether your application is iOS, Android hybrid or cross-platform, we can help you deliver your product to palm of your user&apos;s hands
                            </Typography>
                        </CardContent>
                    </Card>

                    </Stack>

                    <Stack display="flex" justifyContent="center" direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 2, sm: 8, md: 16 }}>
                    
                    <div>
                        <ul>
                            <li className={styles.serviceListItem}><Typography color="#757780" sx={{ fontWeight: 'light' }}>PoC Development</Typography></li>
                            <li className={styles.serviceListItem}><Typography color="#757780" sx={{ fontWeight: 'light' }}>Re-Engineering</Typography></li>
                            <li className={styles.serviceListItem}><Typography color="#757780" sx={{ fontWeight: 'light' }}>Cloud Migration</Typography></li>
                            <li className={styles.serviceListItem}><Typography color="#757780" sx={{ fontWeight: 'light' }}>PWA (Progressive Web Apps)</Typography></li>
                        </ul>
                    </div>

                    <Divider orientation="vertical" />

                    <div>
                        <ul>
                            <li className={styles.serviceListItem}><Typography color="#757780" sx={{ fontWeight: 'light' }}>Front-End Development</Typography></li>
                            <li className={styles.serviceListItem}><Typography color="#757780" sx={{ fontWeight: 'light' }}>API</Typography></li>
                            <li className={styles.serviceListItem}><Typography color="#757780" sx={{ fontWeight: 'light' }}>System Architecture</Typography></li>
                            <li className={styles.serviceListItem}><Typography color="#757780" sx={{ fontWeight: 'light' }}>Cross-platform</Typography></li>
                        </ul>
                    </div>

                    <Divider orientation="vertical" />

                    <div>
                        <ul>
                            <li className={styles.serviceListItem}><Typography color="#757780" sx={{ fontWeight: 'light' }}>Security Best Practices</Typography></li>
                            <li className={styles.serviceListItem}><Typography color="#757780" sx={{ fontWeight: 'light' }}>Back-end Development</Typography></li>
                            <li className={styles.serviceListItem}><Typography color="#757780" sx={{ fontWeight: 'light' }}>Design</Typography></li>
                            <li className={styles.serviceListItem}><Typography color="#757780" sx={{ fontWeight: 'light' }}>MVP</Typography></li>
                        </ul>
                    </div>
                    </Stack>

            </Box>

            {/* section start*/}
                {/* <Box px={5} py={16} className={styles.mainTagLineContainer}>
                    <div style={{maxWidth: 700}}>
                    <Typography mb={4} variant="h4">
                        We Are Obsessed With Your Success
                    </Typography>

                    <Typography>
                        We are fully invested in our clients.  Through our engagment we remain agile and adaptable, prioritizing your needs. Building a strong and sustaianable relationship with our clients is at the core of everything we do.
                    </Typography>
                    </div>

                </Box>         */}
            {/* section end */}

            <Box py={10} px={4} sx={{display: 'flex', justifyContent: 'center'}}>
            <Box sx={{maxWidth: 600}}>
                <Typography className={styles.sectionHeader} variant="h3" sx={{mb: 2, color: '#FBB13C', fontWeight: 'bold'}}>                        
                    Obsessed With Your Success
                </Typography> 
              
              <Typography color="#757780" sx={{ fontWeight: 'light' }}>
              We are fully invested in our clients.  Through our engagment we remain agile and adaptable, prioritizing your needs. Building a strong and sustaianable relationship with our clients is at the core of everything we do.
              </Typography>
            </Box>
          </Box>

            
            <Box
            p={{
                xs: 2,
                md: 4
            }}
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center'

            }}
            >
            
                <Box 
                  
                            sx={{
                                width: 900,
                                
                              }}
                >
                    <ContactForm />
                </Box>
            </Box>
        </MainLayout>
    )
}

export default Services;
